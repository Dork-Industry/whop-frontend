import React from 'react';

const Topbar = () => {
    return (
        <>
            <div className="app-header header-shadow">
                <div className="app-header__logo">
                    <h3>CONTROL</h3>
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
                <div className="app-header__content">
                    <div className="app-header-right">
                        <div className="header-btn-lg pr-0">
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left">
                                        <div className="btn-group">
                                            <a
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                className="p-0 btn"
                                            >
                                                <img
                                                    width="42"
                                                    className="rounded-circle"
                                                    src="/assets/img/testimonial/testi-1.jpg"
                                                    alt=""
                                                />
                                                <b> HI Lokanath </b> <i className="fa fa-angle-down ml-2 opacity-8"></i>
                                            </a>
                                            <div
                                                tabIndex="-1"
                                                role="menu"
                                                aria-hidden="true"
                                                className="dropdown-menu dropdown-menu-right"
                                            >
                                                <button type="button" tabIndex="0" className="dropdown-item">
                                                    User Account
                                                </button>
                                                <button type="button" tabIndex="0" className="dropdown-item">
                                                    Settings
                                                </button>

                                                <div tabIndex="-1" className="dropdown-divider"></div>
                                                <a href="/" className="dropdown-item">
                                                    Log Out
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Topbar;
