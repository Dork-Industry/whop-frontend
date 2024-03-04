import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    //   const { logout } = useContext(AuthContext);
    //   const navigate  = useNavigate();

    //   const getlogout = (e) => {
    //     //e.preventDefault();
    //     //localStorage.removeItem("token");
    //     //localStorage.removeItem("user_typ");

    //     ///logout();
    //     //navigate('/login');

    //     console.log('call for all----------');
    // };

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
                                <a href="/admin/dashboard" className="mm-active">
                                    <i className="metismenu-icon pe-7s-rocket"></i>
                                    Dashboard
                                </a>
                            </li>
                            <li className="app-sidebar__heading">Biz Updates</li>

                            <li>
                                <a href="#">
                                    <i class="metismenu-icon pe-7s-display2"></i>Seller Management
                                    <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="/admin/seller">
                                            <i class="metismenu-icon"></i>Seller
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/admin/">
                                            <i class="metismenu-icon"></i>Product Report
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/admin/">
                                            <i class="metismenu-icon"></i>Payouts
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/admin/">
                                            <i class="metismenu-icon"></i>Support Tickets
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="#">
                                    <i class="metismenu-icon pe-7s-display2"></i>Customer Management
                                    <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="/admin/user">
                                            <i class="metismenu-icon"></i>Customers
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/admin/">
                                            <i class="metismenu-icon"></i>Booking History
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/admin/">
                                            <i class="metismenu-icon"></i>Support Tickets
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="#">
                                    <i class="metismenu-icon pe-7s-display2"></i>Team Management
                                    <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="/admin/team">
                                            <i class="metismenu-icon"></i>Team List
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/admin/">
                                            <i class="metismenu-icon"></i>User Role
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="app-sidebar__heading">Master Seups</li>
                            <li>
                                <a href="#">
                                    <i className="metismenu-icon pe-7s-diamond"></i>Configs
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="/admin/category">Category</a>
                                    </li>
                                    <li>
                                        <a href="/admin/country">Country</a>
                                    </li>
                                    <li>
                                        <a href="/admin/state">State</a>
                                    </li>
                                    <li>
                                        <a href="/admin/city">City</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="metismenu-icon pe-7s-diamond"></i>Seo Setups
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="/admin/category">On Page Seo</a>
                                    </li>
                                    <li>
                                        <a href="/admin/country">Analytics</a>
                                    </li>
                                    <li>
                                        <a href="/admin/state">Robots Txt</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/admin/settings">
                                    <i className="metismenu-icon pe-7s-diamond"></i> Site Settings
                                </a>
                            </li>

                            <li>
                                {' '}
                                <a className="btn btn-warning" style={{ marginTop: 90 }} href="/admin/logout">
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
