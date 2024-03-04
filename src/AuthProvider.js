import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    //const [userId, setUserId] = useState('');
    //const [userToken, setUserToken] = useState('');

    const login = (userId) => {
        setIsAuthenticated(true);
        //setUserId(userId);
        //console.log(userId+'-----------');
    };

    const logout = () => {
        // Perform logout logic, e.g., clear session
        setIsAuthenticated(false);
        //setUserId('');
    };

    return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
