import React, { useContext, useEffect } from 'react';
import AuthContext from '../../Context/auth/authContext'

const NavBar = () => {
    const authContext = useContext(AuthContext)
    const {loadUser} = authContext;

    useEffect(()=>{
        loadUser();
    },[])
    return (
        <div>
            Navbar
        </div>
    );
};

export default NavBar;