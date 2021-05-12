import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import AuthContext from "../../Context/auth/authContext";
import * as Routes from '../../routes'
import {useHistory} from 'react-router-dom'
import { GET_AUTH_USER } from '../../graphql/user';
import { useQuery } from '@apollo/react-hooks';
import SignOut from "../../Components/SignOut";
import Profile from '../../Components/Profile'

const HomeApp = (props) => {

  // const { loading , data: {authUser} } = useQuery(GET_AUTH_USER); 
  const { loading,loadUser, error, data: authData } = useQuery(GET_AUTH_USER); 
  console.log(authData);
  // const history = useHistory()

  useEffect(() => {
    // loadUser();
    // eslint-disable-next-line
  }, []);
  console.log(authData);

    return (
        <div>
            <Profile user={authData}/>
            <SignOut/>
        </div>
    );
};

HomeApp.propTypes = {
    
};

export default HomeApp;