import React , { useReducer } from "react"
import AuthContext from "./authContext";
import { useQuery, useMutation } from '@apollo/client';
import {
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from "../types";
import { GET_AUTH_USER } from '../../graphql/user';
import { LOG_IN, SIGN_UP } from "../../graphql/user";
import authReducer from "../../Context/auth/authReducer";



const AuthState = (props) => {
    const { loading, error, data: authData } = useQuery(GET_AUTH_USER); 
    const [signin, { data: userData }] = useMutation(LOG_IN); 


    const initialState = {
        token: localStorage.getItem("token"),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null,
    }
    const [state, dispatch] = useReducer(authReducer, initialState);

    const loadUser = async () => {
        try {
            dispatch({
                type: USER_LOADED,
                payload: authData
            })
        } catch (error) {

            dispatch({type: AUTH_ERROR, payload: error})
        }
    }

    const logout = async () => {
        dispatch({type: LOGOUT})
    }
    const login = async (formData) => {
        try{
            const response = await signin({variables: formData})
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data.login
            })
            loadUser();
        } catch(error) {
            dispatch({
                type: LOGIN_FAIL,
                payload: error
            })
        }
    } 
    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                login,
                logout,
                loadUser
            }}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthState