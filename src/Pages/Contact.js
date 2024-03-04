import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const Contact = () => {
    return (
        <>
            <div className="bg-shape newbgmin" style={{ backgroundImage: 'url(/assets/bgmg.jpg)' }}>
                <img src="/assets/img/shape/shape-1.png" alt="" />
            </div>

            <section className="contact__area  pb-145">
                <div className="contact__shape">
                    <img className="man-1" src="assets/img/icon/sign/man-1.png" alt="" />
                    <img className="circle" src="assets/img/icon/sign/circle.png" alt="" />
                    <img className="zigzag" src="assets/img/icon/sign/zigzag.png" alt="" />
                    <img className="dot" src="assets/img/icon/sign/dot.png" alt="" />
                    <img className="bg" src="assets/img/icon/sign/sign-up.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="page__title-wrapper mb-55 mt-80">
                                <h2 style={{ marginTop: 180 }} className="page__title-2">
                                    {' '}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-7 col-xl-7">
                            <div className="contact__wrapper  white-bg">
                                <div className="contact__form">
                                    <h6>
                                        If you like to share your experience please email us the information. You can
                                        remain anonymous.
                                    </h6>
                                    <br />

                                    <form action="assets/mail.php" method="POST">
                                        <div className="row">
                                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact__input-wrapper mb-25">
                                                    <h5>Full Name</h5>
                                                    <div className="contact__input">
                                                        <input type="text" placeholder="Full name" name="name" />
                                                        <i className="fal fa-user"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact__input-wrapper mb-25">
                                                    <h5>Email</h5>
                                                    <div className="contact__input">
                                                        <input type="text" placeholder="Email Address" name="email" />
                                                        <i className="fal fa-envelope"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                                                <div className="contact__input-wrapper mb-25">
                                                    <h5>Phone</h5>
                                                    <div className="contact__input">
                                                        <input type="text" placeholder="Phone Number" name="subject" />
                                                        <i className="fal fa-phone"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xxl-12">
                                                <div className="contact__input-wrapper mb-25">
                                                    <h5>Message</h5>
                                                    <div className="contact__input textarea">
                                                        <textarea
                                                            placeholder="Tell us something"
                                                            name="message"
                                                        ></textarea>
                                                        <i className="fal fa-comment"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xxl-12">
                                                <button type="submit" className="m-btn m-btn-4">
                                                    {' '}
                                                    <span></span> submit{' '}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ display: 'none' }} className="contact__info pt-20 pb-120">
                <div className="contact__info-shape">
                    <img src="assets/img/icon/contact/contact-bg.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="page__title-wrapper text-center mb-55">
                                <h2 className="page__title-2">
                                    We would love to <br /> hear from you
                                </h2>
                                <p>Stay in touch with us</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div className="contact__item text-center white-bg mb-30 transition-3">
                                <div className="contact__icon mb-30 d-flex justify-content-center align-items-center">
                                    <img src="assets/img/icon/contact/office.png" alt="" />
                                </div>
                                <div className="contact__content">
                                    <h4 className="contact__content-title">Austin Texas, 7 Avenue,</h4>
                                    <h4 className="contact__content-title">New York, 4223</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div className="contact__item text-center white-bg mb-30 transition-3">
                                <div className="contact__icon mb-30 d-flex justify-content-center align-items-center">
                                    <img src="assets/img/icon/contact/mail.png" alt="" />
                                </div>
                                <div className="contact__content">
                                    <h4 className="contact__content-title">
                                        <a href="/cdn-cgi/l/email-protection#5625232626392422163b37243d3f227835393b">
                                            <span
                                                className="__cf_email__"
                                                data-cfemail="91e2e4e1e1fee3e5d1fcf0e3faf8e5bff2fefc"
                                            >
                                                [email&#160;protected]
                                            </span>
                                        </a>
                                    </h4>
                                    <h4 className="contact__content-title">
                                        <a href="/cdn-cgi/l/email-protection#7a13141c153a171b0811130e54191517">
                                            <span
                                                className="__cf_email__"
                                                data-cfemail="5a33343c351a373b2831332e74393537"
                                            >
                                                [email&#160;protected]
                                            </span>
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div className="contact__item text-center white-bg mb-30 transition-3">
                                <div className="contact__icon mb-30 d-flex justify-content-center align-items-center">
                                    <img src="assets/img/icon/contact/phone.png" alt="" />
                                </div>
                                <div className="contact__content">
                                    <h4 className="contact__content-title">
                                        <a href="tel:+(624)-7600-96">+(624) 7600 96</a>{' '}
                                    </h4>
                                    <h4 className="contact__content-title">
                                        <a href="tel:+(420)-244-26">+(420) 244 26</a>{' '}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
