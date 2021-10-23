import { Box } from '@material-ui/core';
import React, { useState } from 'react';
import Fade from '@material-ui/core/Fade';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

const Modal = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(true);

    function handleModal() {
        setIsModalOpen(!isModalOpen);
        console.log((props.open || isModalOpen));
    }

    console.log(props);
    return (
        <>
        {(props.open) && 
        <Box  bgcolor="rgb(204 204 204 / 91%)" 
            display="flex" 
            justifyContent="center" 
            position="fixed" 
            zIndex="9999"
            width="100vw"
            height="100vh"
            top="-100px"
            paddingTop="100px"
            right="0">
            <Fade in={true}>
                <>             
                    <Box width="400px" bgcolor="#ffffff" marginTop="40px">
                    {props.children}
                    </Box>
                    <Box pl={2}  marginTop="40px" onClick={handleModal}>
                        <CancelOutlinedIcon style={{color: '#ffffff',  width:"40px", height:"40px"}} />
                    </Box>
                    
                </>
            </Fade>

            
           
        </Box>
    }   
        </>
    );
};

export default Modal;