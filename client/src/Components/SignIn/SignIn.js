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

// import { userContext } from '../../Context/userContext';

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
      email: '',
      password: ''
    })

    // const [signin, { data }] = useMutation(LOG_IN); 
    // const [signup, { error, data }] = useMutation(SIGN_UP); 


    const handleSubmit = async(e) => {
      e.preventDefault();
      if(email === "" || password === "") {
        alert('fill it bitchh');
      }else {
        login({email: "koqqqqq@gmail.com",password: "qweqwe123"});
      }
      // try{
      //   const response = await signin({variables: {email: "koqqqqq@gmail.com",password: "qweqwe123"}})
      //   // const response = await signup({variables: {input: {name: "ramasasan",
      //   // email: "koqqqqq@gmail.com",
      //   // mobile: "9898989898",
      //   // password: "qweqwe123",
      //   // confirmPassword: "qweqwe123"}}});
      //   localStorage.setItem("token", response.data.login.token)
      //   // setUser(response.data.login.token)

      //   console.log(response);
      // } catch(error) {
      //     console.log(error);
      //   // if(error){
      //   //   console.log(error.graphQLErrors[0].message)
      //   // }
        
      // }
    };

    const { email, password } = values;

    // console.log(email);
    function changeHandler(e) {
      console.log(email, password);

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