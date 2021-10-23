import { Box } from '@material-ui/core';
import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import MainLayout from '../../Layout/MainLayout';
import Member  from '../../Components/Team/Member';

const Team = () => {
    return (
        <Box display="flex">
        <NavBar />
  
        <MainLayout>
            <Member/>
            </MainLayout>
            </Box>
    );
};

export default Team;