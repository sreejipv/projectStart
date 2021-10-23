import { Box, TextField, Button } from '@material-ui/core';
import React from 'react';

const ClientContact = () => {
    return (
        <Box >
             <form  noValidate autoComplete="off">
                    <Box pb={2}>

                    <TextField id="outlined-basic" 
                        width="300px"
                        fullWidth
                       size="small"  label="Name"
                       variant="outlined" />
                    </Box>
                    <Box pb={2}>
                    <TextField id="outlined-basic" 
                       fullWidth
                       size="small" label="Email" 
                       variant="outlined" />
                    </Box>
                    <Box pb={2}>
                    <TextField id="outlined-basic" 
                        fullWidth
                       size="small" label="Phone" 
                       variant="outlined"
                        />
                    </Box>

                    <Box pb={2}>
                    <TextField id="outlined-basic" 
                        fullWidth
                       size="small" label="Message" 
                       variant="outlined"
                       rowsMax={4}
                       rows={4}
                       multiline />
                    </Box>

                    <Box display="flex"
                        flexDirection="column">
                        <Button variant="contained" 
                            color="primary" >
                            Submit
                        </Button>
                    </Box>

                    </form>
        </Box>
            
    );
};

export default ClientContact;