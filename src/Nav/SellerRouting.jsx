import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';

import Sidebar from '../Seller/Sidebar';
import Topbar from '../Seller/Topbar';
import Footer from '../Seller/Footer';
import Dashboard from '../Seller/Dashboard';

import Product from '../Seller/Product';
import ProductForm from '../Seller/ProductForm';

import Changepass from '../Seller/Changepass';
import Logout from '../Seller/Logout';
import Err from '../Seller/Err';

import '../Seller/App.css';

const SellerRouting = () => {
    const navigate = useNavigate();
    const user_typ = localStorage.getItem('user_typ');

    useEffect(() => {
        console.log('--->' + user_typ);
        if (user_typ == 'Seller') {
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

                                <Route exact path="/product" element={<Product />} />
                                <Route exact path="/product/add" element={<ProductForm />} />
                                <Route exact path="/product/edit/:id" element={<ProductForm />} />

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

export default SellerRouting;
