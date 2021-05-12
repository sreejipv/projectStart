import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import PropTypes from 'prop-types';
import { GET_AUTH_USER } from '../../graphql/user';
import { GET_TESTED } from '../../graphql/user';


const AuthApp = props => {
    // const { loading, data, error, refetch } = useQuery(GET_TESTED);
    // const [signup, { loading }] = useMutation(SIGN_UP);


    // if (loading)  console.log('Loading...');
    // if (data)  console.log(data);
    // if (error) console.log( `Error! ${error.message}`);

    return (
        <div>
            <p>im authapp</p>
        </div>
    );
};

AuthApp.propTypes = {
    
};

export default AuthApp;