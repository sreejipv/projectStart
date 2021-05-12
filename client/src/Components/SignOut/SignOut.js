import React, { useContext, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Button } from '@material-ui/core';
import  AuthContext from "../../Context/auth/authContext";
import {GET_AUTH_USER} from '../../graphql/user'
import * as Routes from '../../routes'
import { useHistory } from 'react-router-dom';


const SignOut = () => {
    const history = useHistory();

    const authContext = useContext(AuthContext)
    const { logout , isAuthenticated, error, loadUser} = authContext;
    // const { loading , data: {authUser} } = useQuery(GET_AUTH_USER); 
    

    // useEffect(()=>{
    //     if (loading) {
    //         return <p >Loading...</p>;
    //       }
    //     if(!authUser) {
    //         // alert('im sorry');
    //         history.push(Routes.LANDING);
    //     }
    // },[authUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        logout();
        history.push(Routes.LANDING);
        // console.log(localStorage.getItem("token"))
    } 
    // console.log(isAuthenticated);
    return (
        <Button variant="contained"  value="Submit" color="primary" size="large" onClick={(e) =>handleSubmit(e)} >
            Sign Out 
        </Button>
    );
};

export default SignOut;