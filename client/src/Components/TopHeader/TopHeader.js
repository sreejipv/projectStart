import React from 'react';
import { Box, Button, makeStyles, TextField } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
const useStyles = makeStyles((theme)=> ({
    root: {
        '& > *': {
            margin: '5px',
          },
    }
}))

const TopHeader = () => {
    const classes = useStyles();

    return (
        <Box
            display="flex" 
            px={1}
            py={1}
            justifyContent="space-between">
                <Box >
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" 
                       mr={2}
                       size="small"  className={`without-padding`} value="https://mabuz.com/clientURL" variant="outlined" />
                    <Button variant="contained" 
                        size="medium" 
                        color="default" 
                        href="#contained-buttons"
                     
                    >
                        Copy URL
                    </Button>
                    <Button variant="contained" 
                        size="medium" 
                        color="default" 
                        href="#contained-buttons"
                     
                    >
                       <ShareIcon/>
                    </Button>
                    </form>
                </Box>

           <Box>
           <form className={classes.root} noValidate autoComplete="off">
           <Button variant="contained" 
                        size="medium" 
                        color="primary" 
                        href="#contained-buttons"
                     
                    >
                        EDIT PAGE
                    </Button>
            </form>
           </Box>
        </Box>
    );
};

export default TopHeader;