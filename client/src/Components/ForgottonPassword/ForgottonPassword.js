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
  

function ForgottonPassword(props) {
    const classes = useStyles();

    // const [error, setError] = useState('');
    const [values, setValues] = useState({
      email: '',
      password: ''
    })

    // const [signin, { data }] = useMutation(LOG_IN); 
    const [signup, { error, data }] = useMutation(SIGN_UP); 


    const handleSubmit = async(e) => {
 
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

                <TextField  id="outlined-basic" label="Enter your mobile number" variant="outlined" name="name" value=""  onChange={(e)=>changeHandler(e)}/>
                <Box mt={2} />
         

                <Button variant="contained"  value="Submit" color="primary" size="large" onClick={handleSubmit} >
                    Sign Up
                </Button>
            </Box>    
      </form>
      </Box>
    );
}

export default ForgottonPassword;
