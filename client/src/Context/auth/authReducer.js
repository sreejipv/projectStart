import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
  } from "../types";

  export default(state, action) =>{
      switch (action.type) {
        case USER_LOADED: 
            return {
                ...state,
                isAuthenticated :true,
                loading: false,
                user: action.payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            console.log('success',  action.payload.token)
            return{
                ...state,
                ...action.payload,
                isAuthenticated :true
            }

        case LOGOUT:
            localStorage.removeItem("token");
            return {
                ...state,
                isAuthenticated :false
            }   
        default:
      return state;

      }
  }