import React,{useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import SignIn from '../../Components/SignIn'
import SignUp from '../../Components/SignUp'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AuthContext from "../../Context/auth/authContext";
import ForgottonPassword from '../../Components/ForgottonPassword/ForgottonPassword';
import * as Routes from '../../routes'
import { useHistory } from 'react-router-dom';

const Landing = props => {

    const authContext = useContext(AuthContext);
    const { login, error, isAuthenticated} = authContext;
    const history = useHistory()

    useEffect(()=>{
    console.log(isAuthenticated);

        if(isAuthenticated) {
          history.push(Routes.HOME);
        }
        if(error) {
          alert('error biaatchhhh')
          console.log(error);
        }
      }, [error, isAuthenticated]);

    return (
        <Box>
            <Container >
                {/* <SignUp/> */}
                <SignIn/>
                {/* <ForgottonPassword/> */}
            </Container>
        </Box>
        
    );
};

Landing.propTypes = {
    
};

export default Landing;