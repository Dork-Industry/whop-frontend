import React from 'react';

const Sidebar = () => {
    return (
        <>
            <div className="app-sidebar sidebar-shadow">
                <div className="app-header__logo">
                    <div className="logo-src"></div>
                    <div className="header__pane ml-auto">
                        <div>
                            <button
                                type="button"
                                className="hamburger close-sidebar-btn hamburger--elastic"
                                data-class="closed-sidebar"
                            >
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="app-header__mobile-menu">
                    <div>
                        <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="app-header__menu">
                    <span>
                        <button
                            type="button"
                            className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
                        >
                            <span className="btn-icon-wrapper">
                                <i className="fa fa-ellipsis-v fa-w-6"></i>
                            </span>
                        </button>
                    </span>
                </div>

                <div className="scrollbar-sidebar">
                    <div className="app-sidebar__inner">
                        <ul className="vertical-nav-menu">
                            <li className="app-sidebar__heading"> </li>
                            <li>
                                <a href="/seller/dashboard" className="mm-active">
                                    <i className="metismenu-icon pe-7s-rocket"></i>
                                    Dashboard
                                </a>
                            </li>

                            <li className="app-sidebar__heading">Business</li>

                            <li>
                                <a href="#">
                                    <i class="metismenu-icon pe-7s-display2"></i>Product
                                    <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="/seller/product">
                                            <i class="metismenu-icon"></i>Product List
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/seller/product/add">
                                            <i class="metismenu-icon"></i>Product Add
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="#">
                                    <i class="metismenu-icon pe-7s-display2"></i>Sales
                                    <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="/seller/">
                                            <i class="metismenu-icon"></i>Order List
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/seller/">
                                            <i class="metismenu-icon"></i>Pending Orders
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="#">
                                    <i class="metismenu-icon pe-7s-display2"></i>Customers
                                    <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="/seller/">
                                            <i class="metismenu-icon"></i>Customer List
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/seller/">
                                            <i class="metismenu-icon"></i>Booking History
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="#">
                                    <i class="metismenu-icon pe-7s-display2"></i>Support Requests
                                    <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="/seller/">
                                            <i class="metismenu-icon"></i>Query List
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="app-sidebar__heading">Settings</li>
                            <li>
                                <a href="/seller">
                                    <i className="metismenu-icon pe-7s-diamond"></i> My Profile
                                </a>
                            </li>
                            <li>
                                <a href="/seller">
                                    <i className="metismenu-icon pe-7s-diamond"></i> Change Password
                                </a>
                            </li>

                            <li>
                                {' '}
                                <a className="btn btn-warning" style={{ marginTop: 90 }} href="/seller/logout">
                                    Logout{' '}
                                </a>{' '}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
