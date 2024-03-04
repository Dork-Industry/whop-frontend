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
                                <a href="/admin/dashboard" className="mm-active">
                                    <i className="metismenu-icon pe-7s-rocket"></i>
                                    Dashboard
                                </a>
                            </li>
                            <li className="app-sidebar__heading">My Activity</li>

                            <li>
                                <a href="/users/">
                                    <i class="metismenu-icon pe-7s-display2"></i>Order History{' '}
                                </a>
                                <a href="/users/">
                                    <i class="metismenu-icon pe-7s-display2"></i>Recent Orders{' '}
                                </a>
                            </li>

                            <li className="app-sidebar__heading">Account Settings</li>

                            <li>
                                <a href="/users/settings">
                                    <i className="metismenu-icon pe-7s-diamond"></i>Support Tickets
                                </a>
                            </li>
                            <li>
                                <a href="/users/settings">
                                    <i className="metismenu-icon pe-7s-diamond"></i> Edit Profile
                                </a>
                            </li>
                            <li>
                                <a href="/users/settings">
                                    <i className="metismenu-icon pe-7s-diamond"></i> Change Password
                                </a>
                            </li>

                            <li>
                                {' '}
                                <a className="btn btn-warning" style={{ marginTop: 90 }} href="/users/logout">
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
