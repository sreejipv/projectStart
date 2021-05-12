import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../Context/auth/authContext";
import { GET_AUTH_USER } from '../../graphql/user';
import Spinner from "../Spinner";
import { useQuery } from '@apollo/client';



const PrivateRoute = ({component: Component, ...rest}) => {
    const { loading,loadUser, error, data: authData } = useQuery(GET_AUTH_USER); 

    // const authContext = useContext(AuthContext);
    // const { isAuthenticated, loading } = authContext;
    console.log(loading);
    return(
        <Route 
        {...rest}
            render={(props)=>
                loading ? (<Spinner />) : authData ? (<Component {...props} />) : (<Redirect to="/" />)}
        />
    )
}

export default  PrivateRoute;