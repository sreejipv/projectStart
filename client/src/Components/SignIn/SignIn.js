import React, { useState, useContext, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { useMutation } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { LOG_IN, SIGN_UP } from "../../graphql/user";
import { Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import * as Routes from '../../routes';

import AuthContext from "../../Context/auth/authContext";


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  

function SignIn(props) {
    const authContext = useContext(AuthContext);
    const { login, error, isAuthenticated} = authContext;
    // const {user, setUser} = useContext(userContext)
    const classes = useStyles();
    const history = useHistory();



    // const [error, setError] = useState('');
    const [values, setValues] = useState({
      email: 'Gopaal@lgopal.in',
      password: 'asdqwecxccqwe'
    })

    // const [signin, { data }] = useMutation(LOG_IN); 
    // const [signup, { error, data }] = useMutation(SIGN_UP); 


    const handleSubmit = async(e) => {
      e.preventDefault();
      login({email: email,password: password});
    };

    const { email, password } = values;

    // console.log(email);
    function changeHandler(e) {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
    }
    return (

      <Box display="flex" justifyContent="center">
      <form className={classes.root}  autoComplete="off">
          
          <Box pt={10} display="flex"   flexDirection="column">

            <TextField id="outlined-basic" label="Email" variant="outlined" name="email" value={email} onChange={(e)=>changeHandler(e)}/>
            <Box mt={2} />
            <TextField id="outlined-basic" label="Password" variant="outlined" name="password" value={password} type="password" onChange={(e)=>changeHandler(e)}/>
            <Box mt={2} />
            <Button variant="contained"  value="Submit" color="primary" size="large" onClick={handleSubmit} >
                Sign In
            </Button>
          </Box>    
    </form>
    </Box>
     
    );
}

export default SignIn;