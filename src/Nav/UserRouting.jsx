import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';

import Sidebar from '../Users/Sidebar';
import Topbar from '../Users/Topbar';
import Footer from '../Users/Footer';
import Dashboard from '../Users/Dashboard';

import Changepass from '../Users/Changepass';
import Logout from '../Users/Logout';

import Err from '../Users/Err';

import '../Users/App.css';

const UserRouting = () => {
    const navigate = useNavigate();
    const user_typ = localStorage.getItem('user_typ');

    useEffect(() => {
        console.log('--->' + user_typ);
        if (user_typ == 'User') {
        } else {
            navigate('/');
        }
    }, []);

    return (
        <>
            <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
                <Topbar />

                <div className="app-main">
                    <Sidebar />

                    <div className="app-main__outer">
                        <div className="app-main__inner">
                            <Routes>
                                <Route exact path="/" element={<Dashboard />} />
                                <Route exact path="/dashboard" element={<Dashboard />} />
                                <Route exact path="/change" element={<Changepass />} />
                                <Route exact path="/logout" element={<Logout />} />

                                <Route exact path="/*" element={<Err />} />
                            </Routes>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserRouting;
