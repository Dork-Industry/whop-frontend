import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import About from '../Pages/About';
import Home from '../Pages/Home';
import P404 from '../Pages/P404';

import Header from '../Pages/Header';
import Footer from '../Pages/Footer';

export default function RootRouter() {
    return (
        <>
            <div className="preload preload-container">
                <div className="middle">
                    <div className="bar bar1"></div>
                    <div className="bar bar2"></div>
                    <div className="bar bar3"></div>
                    <div className="bar bar4"></div>
                    <div className="bar bar5"></div>
                    <div className="bar bar6"></div>
                    <div className="bar bar7"></div>
                    <div className="bar bar8"></div>
                </div>
            </div>

            <div id="wrapper">
                <div id="page" className="pt-40">
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route exact path="/index" element={<Home />}></Route>
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/*" element={<P404 />} />
                    </Routes>
                    <Footer />
                </div>
            </div>

            <script src="%PUBLIC_URL%/assets/js/backToTop.js"></script>
        </>
    );
}
