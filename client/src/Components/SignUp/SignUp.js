import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { useMutation } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { LOG_IN, SIGN_UP } from "../../graphql/user";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  

function SignUp(props) {
    const classes = useStyles();

    // const [error, setError] = useState('');
    const [values, setValues] = useState({
      email: '',
      password: ''
    })

    // const [signin, { data }] = useMutation(LOG_IN); 
    const [signup, { error, data }] = useMutation(SIGN_UP); 


    const handleSubmit = async(e) => {
      try{
        // const response = await signup({variables: {email: "koqqqqq@gmail.com",password: "qweqwe123"}})
        const response = await signup({variables: {input: {name: "ramasasan",
        email: "k@gmail.com",
        mobile: "9898989898",
        password: "qweqwe123",
        confirmPassword: "qweqwe123"}}});
        console.log(response.data.register);
        localStorage.setItem("token", response.data.register.token )
      } catch(error) {
        console.log(error);
        if(error) {
          alert('im wrong')
        }
        // if(error){
        //   console.log(error.graphQLErrors[0].message)
        // }
        
      }
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

                <TextField  id="outlined-basic" label="Name" variant="outlined" name="name" value=""  onChange={(e)=>changeHandler(e)}/>
                <Box mt={2} />
                <TextField pt={10} id="outlined-basic" label="Email" variant="outlined" name="email" value="" onChange={(e)=>changeHandler(e)}/>
                <Box mt={2} />

                <TextField id="outlined-basic" label="Mobile" variant="outlined" name="mobile" value="" onChange={(e)=>changeHandler(e)}/>
                <Box mt={2} />
                <TextField id="outlined-basic" label="Password" variant="outlined" name="password" value="qweqwe123" type="password" onChange={(e)=>changeHandler(e)}/>
                <Box mt={2} />
                
                <TextField id="outlined-basic" label="ConfirmPassword" variant="outlined" name="confirmPassword" value="qweqwe123" type="password" onChange={(e)=>changeHandler(e)}/>
                <Box mt={2} />

                <Button variant="contained"  value="Submit" color="primary" size="large" onClick={handleSubmit} >
                    Sign Up
                </Button>
            </Box>    
      </form>
      </Box>
    );
}

export default SignUp;