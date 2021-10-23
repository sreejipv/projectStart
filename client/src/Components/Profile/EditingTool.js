import { Box } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    profileTitle: {
        border :' 1px solid  #ccc'
    }
})

const EditingTool = (props) => {
  let classes = useStyles(props);

    return (
        <Box width="200px" className={classes.profileTitle}>
            <p>Edit</p>
        </Box>
            
    );
};

export default EditingTool;