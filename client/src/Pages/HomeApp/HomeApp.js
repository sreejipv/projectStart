import React, {useContext, useEffect} from 'react';
import { Box, makeStyles } from '@material-ui/core';

import { GET_AUTH_USER } from '../../graphql/user';
import { useQuery } from '@apollo/react-hooks';
import Drawer from '@material-ui/core/Drawer';

import NavBar from '../../Components/NavBar/NavBar';


const drawerWidth = 250;

const useStyles = makeStyles({
  dashboard: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
})
const HomeApp = (props) => {
  const classes = useStyles();
  
  const { loading,loadUser, error, data: authData } = useQuery(GET_AUTH_USER); 

    return (
        <Box display="flex">
            <NavBar/>
            <Box className={classes.dashboard}>  
            </Box>
        </Box>
    );
};

HomeApp.propTypes = {
    
};

export default HomeApp;