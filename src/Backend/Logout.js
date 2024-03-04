import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        getlogout();
    }, []);

    const getlogout = () => {
        //e.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('user_typ');

        logout();
        navigate('/login');

        console.log('call for all----------');
    };

    return <>Logout . Logout ....</>;
};

export default Logout;
