import React from 'react';
//import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Sregister from '../Pages/Sregister';
import Srthanks from '../Pages/Srthanks';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Tnc from '../Pages/Tnc';
import Privacy from '../Pages/Privacy';
import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact';
import Category from '../Pages/Category';
import Size from '../Pages/Size';
import Product from '../Pages/Product';
import Cart from '../Pages/Cart';
import Trancomplete from '../Pages/Trancomplete';

import P404 from '../Pages/P404';
import Header from '../Pages/inc/Header';
import Footer from '../Pages/inc/Footer';

export default function RootRouter() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/index" element={<Home />}></Route>
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/tnc" element={<Tnc />} />
                    <Route exact path="/privacy" element={<Privacy />} />
                    <Route exact path="/blog" element={<Blog />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/category" element={<Category />} />
                    <Route exact path="/size" element={<Size />} />
                    <Route exact path="/category/:slug" element={<Category />} />
                    <Route exact path="/product" element={<Product />} />
                    <Route exact path="/product/:id" element={<Product />} />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/trancomplete" element={<Trancomplete />} />

                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/seller_register" element={<Sregister />} />
                    <Route exact path="/Srthanks" element={<Srthanks />} />

                    <Route exact path="/*" element={<P404 />} />
                </Routes>
            </main>
            <Footer />

            {/* <Helmet>
                    <script src="/assets/js/backToTop.js"></script>  
                  </Helmet> */}
        </>
    );
}
