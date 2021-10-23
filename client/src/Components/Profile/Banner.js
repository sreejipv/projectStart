import React from 'react';
import { Box, Container } from '@material-ui/core';
import { Button } from '@material-ui/core';
import EditingTool from './EditingTool';
import UploadIcon from '../UploadIcon';
import ClientContact from '../ClientContact';

const Banner = ({businessName, businessDesc, productsTitle}) => {
    return (
        <Box>
            <Box minHeight="250px" 
                textAlign="center"
                bgcolor="#1c1e21">
                    <Container maxWidth="md ">
                            <Box pt={3}></Box>    
                        <UploadIcon imageTag="your Logo"/>
                            <Box color="#ffffff">
                            <h1>{businessName}</h1>
                            <p>Company Tag</p>
                        </Box>
                    </Container>    
            </Box>
            <Box textAlign="center">
               <Container maxWidth="sm">
                    <h1>About</h1>
                    <p style={{lineHeight: '25px',color: '#1a1a1a'}}>{businessDesc}</p>
               </Container>

               <Container maxWidth="sm" >
                   <Box bgcolor="#FFF1D2" p={2} borderRadius={10}>
                        <h1>Work with {businessName}</h1>
                        <p>Fill out the form below to get in touch!</p>
                        <ClientContact/>
                   </Box>

               </Container>
            </Box>
        </Box>

    );
};

export default Banner;