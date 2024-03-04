import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

import Apiconnect from '../../services/Apiconnect.js';
import { useData } from '../../Context/Pagecontxt.js';

const Header = () => {
    const { cartItmCount } = useData();

    const user_typ = localStorage.getItem('user_typ');
    const [utyp, setUtyp] = useState('');
    const [utyplink, setUtyplink] = useState('');
    const [CatList, setCatList] = useState([]);

    useEffect(() => {
        setUtyp(user_typ);
        getCatList();
    }, []);

    const getCatList = () => {
        Apiconnect.getData('cat/getAll').then((response) => {
            console.log("response", response)
            let _xtract = Apiconnect.decrypt_obj(response.data.data);
            setCatList(_xtract);
        });
    };

    return (
        <>
            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>

            <header>
                <div className="header__area header__shadow  white-bg" id="header-sticky">
                    <div
                        style={{ borderBottom: '1px solid #ccc', paddingBottom: 10, paddingTop: 10 }}
                        className="padded-container"
                    >
                        <div className="row align-items-center gap-8 py-3.5">
                            <div className="col-md-1">
                                <div className="logo">
                                    <a href="/">
                                        <img src="/assets/img/logo/logo.png" alt="logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div class="input-group">
                                    <input
                                        id="email"
                                        type="text"
                                        class="form-control"
                                        name="email"
                                        placeholder="search"
                                    />
                                    <span style={{ backgroundColor: '#5f3afc' }} class="btn btn-primary">
                                        <i class="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="header__action d-flex align-items-center justify-content-end">
                                    <div className="main-menu" style={{ float: 'left', marginRight: 20 }}>
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li>
                                                    <a href="/">Become Affiliate</a>
                                                </li>
                                                <li>
                                                    <a href="/seller_register">Start Selling</a>
                                                </li>
                                                <li>
                                                    <a href="/blog">Blog</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>

                                    <div className="header__login d-none d-sm-block">
                                        {utyp === 'User' ? (
                                            <a href="/users/">
                                                <i className="far fa-unlock"></i>User Dashboard
                                            </a>
                                        ) : utyp === 'Seller' ? (
                                            <a href="/seller/">
                                                <i className="far fa-unlock"></i>Seller Dashboard
                                            </a>
                                        ) : utyp === 'Admin' ? (
                                            <a href="/admin/">
                                                <i className="far fa-unlock"></i>Admin Dashboard
                                            </a>
                                        ) : (
                                            <a href="/login/">
                                                <i className="far fa-unlock"></i>Login
                                            </a>
                                        )}
                                    </div>
                                    <div className="header__cart d-none d-sm-block">
                                        {/* <a href="/cart" className="cart-toggle-btn">
                                            <i className="far fa-shopping-cart"></i>
                                            <span>{cartItmCount}</span>
                                        </a> */}

                                        <a
                                            href="/register"
                                            style={{ fontSize: 13, borderRadius: 6, padding: 6, fontWeight: 'bold' }}
                                            className="btn btn-sm btn-warning"
                                        >
                                            Signup
                                        </a>
                                    </div>
                                    <div className="sidebar__menu d-lg-none">
                                        <div className="sidebar-toggle-btn" id="sidebar-toggle">
                                            <span className="line"></span>
                                            <span className="line"></span>
                                            <span className="line"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-12 d-none d-lg-block">
                                <div className="main-menu lx">
                                    <nav id="mobile-menu ">
                                        <ul>
                                            {CatList.map((valz, keyz) => {
                                                return (
                                                    <li>
                                                        <a href={'/category/' + valz.url}>{valz.name}</a>
                                                    </li>
                                                );
                                            })}

                                            <li>
                                                <a href="/about">About</a>
                                            </li>

                                            <li>
                                                <a href="/contact">Contact</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
