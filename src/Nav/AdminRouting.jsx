import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';

import Sidebar from '../Components/Sidebar';
import Topbar from '../Components/Topbar';
import Footer from '../Components/Footer';

import Dashboard from '../Backend/Dashboard';
import Category from '../Backend/Category';
import CategoryForm from '../Backend/CategoryForm';
import Staff from '../Backend/Staff';
import StaffAdd from '../Backend/StaffAdd';
import Userrole from '../Backend/Userrole';
import UserroleAdd from '../Backend/UserroleAdd';

import Seller from '../Backend/Seller';
import SellerAdd from '../Backend/SellerAdd';

import User from '../Backend/User';
import UserAdd from '../Backend/UserAdd';

import Changepass from '../Backend/Changepass';
import Logout from '../Backend/Logout';

import Err from '../Backend/Err';

import '../Backend/App.css';

const AdminRouting = () => {
    const navigate = useNavigate();
    const user_typ = localStorage.getItem('user_typ');

    useEffect(() => {
        if (user_typ == 'Admin') {
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

                                <Route exact path="/category" element={<Category />} />
                                <Route exact path="/category/add" element={<CategoryForm />} />
                                <Route exact path="/category/edit/:id" element={<CategoryForm />} />

                                <Route exact path="/userrole" element={<Userrole />} />
                                <Route exact path="/userrole/add" element={<UserroleAdd />} />

                                <Route exact path="/user" element={<User />} />
                                <Route exact path="/user/add" element={<UserAdd />} />
                                <Route exact path="/user/edit/:id" element={<SellerAdd />} />

                                <Route exact path="/team" element={<Staff />} />
                                <Route exact path="/team/add" element={<StaffAdd />} />
                                <Route exact path="/team/edit/:id" element={<StaffAdd />} />

                                <Route exact path="/seller" element={<Seller />} />
                                <Route exact path="/seller/add" element={<SellerAdd />} />
                                <Route exact path="/seller/edit/:id" element={<SellerAdd />} />

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

export default AdminRouting;
