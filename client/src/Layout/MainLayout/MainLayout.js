import React from 'react';
import { Box, makeStyles } from "@material-ui/core";


const drawerWidth = 250;

const useStyles = makeStyles({
  dashboard: {
    width: '100vw',
    marginTop: "100px",
    padding: "20px 20px",
  },
});

const MainLayout = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.dashboard}>
            {props.children}
        </Box>
    );
};

export default MainLayout;