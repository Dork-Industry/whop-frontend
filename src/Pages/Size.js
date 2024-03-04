import React, { useEffect } from 'react';

const Size = () => {
    useEffect(() => {
        document.title = 'WhopCart | Product Size..';
    }, []);

    return (
        <>
            <div className="bg-shape">
                <img src="/assets/img/shape/shape-1.png" alt="" />
            </div>

            <section className="product__area po-rel-z1 pt-100 pb-115 grey-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 order-lg-first order-last">
                            <div className="product__sidebar mr-30">
                                <div className="product__sidebar-widget  white-bg mb-30">
                                    <div className="sidebar__widget mb-20">
                                        <form action="#">
                                            <div className="sidebar__widget-head d-flex align-items-center justify-content-between">
                                                <h4 className="sidebar__widget-title">Size</h4>
                                                <button type="submit" className="sidebar__clear-btn">
                                                    <i className="fal fa-repeat"></i>Clear
                                                </button>
                                            </div>
                                            <div className="sidebar__widget-content">
                                                <div className="sidebar__check-wrapper">
                                                    <ul>
                                                        <li className="d-flex justify-content-between align-items-center">
                                                            <div className="sidebar__check d-flex align-items-center">
                                                                <input
                                                                    className="m-check-input"
                                                                    type="checkbox"
                                                                    id="m-wp"
                                                                />
                                                                <label className="m-check-label" for="m-wp">
                                                                    WordPress
                                                                </label>
                                                            </div>
                                                            <span>76</span>
                                                        </li>
                                                        <li className="d-flex justify-content-between align-items-center">
                                                            <div className="sidebar__check d-flex align-items-center">
                                                                <input
                                                                    className="m-check-input"
                                                                    type="checkbox"
                                                                    id="m-marketing"
                                                                />
                                                                <label className="m-check-label" for="m-marketing">
                                                                    Marketing
                                                                </label>
                                                            </div>
                                                            <span>24</span>
                                                        </li>
                                                        <li className="d-flex justify-content-between align-items-center">
                                                            <div className="sidebar__check d-flex align-items-center">
                                                                <input
                                                                    className="m-check-input"
                                                                    type="checkbox"
                                                                    id="m-kit"
                                                                />
                                                                <label className="m-check-label" for="m-kit">
                                                                    Interface Kit
                                                                </label>
                                                            </div>
                                                            <span>27</span>
                                                        </li>
                                                        <li className="d-flex justify-content-between align-items-center">
                                                            <div className="sidebar__check d-flex align-items-center">
                                                                <input
                                                                    className="m-check-input"
                                                                    type="checkbox"
                                                                    id="m-templates"
                                                                />
                                                                <label className="m-check-label" for="m-templates">
                                                                    Templates
                                                                </label>
                                                            </div>
                                                            <span>44</span>
                                                        </li>
                                                        <li className="d-flex justify-content-between align-items-center">
                                                            <div className="sidebar__check d-flex align-items-center">
                                                                <input
                                                                    className="m-check-input"
                                                                    type="checkbox"
                                                                    id="m-ecommerce"
                                                                />
                                                                <label className="m-check-label" for="m-ecommerce">
                                                                    eCommerce
                                                                </label>
                                                            </div>
                                                            <span>16</span>
                                                        </li>
                                                        <li className="d-flex justify-content-between align-items-center">
                                                            <div className="sidebar__check d-flex align-items-center">
                                                                <input
                                                                    className="m-check-input"
                                                                    type="checkbox"
                                                                    id="m-component"
                                                                />
                                                                <label className="m-check-label" for="m-component">
                                                                    Component
                                                                </label>
                                                            </div>
                                                            <span>12</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="sidebar__widget">
                                        <form action="#">
                                            <div className="sidebar__widget-head d-flex align-items-center justify-content-between">
                                                <h4 className="sidebar__widget-title">Tags</h4>
                                                <button type="submit" className="sidebar__clear-btn">
                                                    <i className="fal fa-repeat"></i>Clear
                                                </button>
                                            </div>
                                            <div className="sidebar__widget-content">
                                                <div className="sidebar__check-wrapper sidebar__tag">
                                                    <ul>
                                                        <li className="d-flex justify-content-between align-items-center">
                                                            <div className="sidebar__check d-flex align-items-center">
                                                                <input
                                                                    className="m-check-input"
                                                                    type="checkbox"
                                                                    id="m-marketplace"
                                                                />
                                                                <label className="m-check-label" for="m-marketplace">
                                                                    Marketplace
                                                                </label>
                                                            </div>
                                                            <span>28</span>
                                                        </li>
                                                        <li className="d-flex justify-content-between align-items-center">
                                                            <div className="sidebar__check d-flex align-items-center">
                                                                <input
                                                                    className="m-check-input"
                                                                    type="checkbox"
                                                                    id="m-fashion"
                                                                />
                                                                <label className="m-check-label" for="m-fashion">
                                                                    Fashion
                                                                </label>
                                                            </div>
                                                            <span>13</span>
                                                        </li>
                                                        <li className="d-flex justify-content-between align-items-center">
                                                            <div className="sidebar__check d-flex align-items-center">
                                                                <input
                                                                    className="m-check-input"
                                                                    type="checkbox"
                                                                    id="m-responsive"
                                                                />
                                                                <label className="m-check-label" for="m-responsive">
                                                                    Responsive
                                                                </label>
                                                            </div>
                                                            <span>26</span>
                                                        </li>
                                                        <li className="d-flex justify-content-between align-items-center">
                                                            <div className="sidebar__check d-flex align-items-center">
                                                                <input
                                                                    className="m-check-input"
                                                                    type="checkbox"
                                                                    id="m-education"
                                                                />
                                                                <label className="m-check-label" for="m-education">
                                                                    Education
                                                                </label>
                                                            </div>
                                                            <span>05</span>
                                                        </li>
                                                        <li className="d-flex justify-content-between align-items-center">
                                                            <div className="sidebar__check d-flex align-items-center">
                                                                <input
                                                                    className="m-check-input"
                                                                    type="checkbox"
                                                                    id="m-shop"
                                                                />
                                                                <label className="m-check-label" for="m-shop">
                                                                    Shop
                                                                </label>
                                                            </div>
                                                            <span>07</span>
                                                        </li>
                                                        <li className="d-flex justify-content-between align-items-center">
                                                            <div className="sidebar__check d-flex align-items-center">
                                                                <input
                                                                    className="m-check-input"
                                                                    type="checkbox"
                                                                    id="m-furniture"
                                                                />
                                                                <label className="m-check-label" for="m-furniture">
                                                                    Furniture
                                                                </label>
                                                            </div>
                                                            <span>10</span>
                                                        </li>
                                                        <li className="d-flex justify-content-between align-items-center">
                                                            <div className="sidebar__check d-flex align-items-center">
                                                                <input
                                                                    className="m-check-input"
                                                                    type="checkbox"
                                                                    id="m-multipurpose"
                                                                />
                                                                <label className="m-check-label" for="m-multipurpose">
                                                                    Multipurpose
                                                                </label>
                                                            </div>
                                                            <span>32</span>
                                                        </li>
                                                        <li className="d-flex justify-content-between align-items-center">
                                                            <div className="sidebar__check d-flex align-items-center">
                                                                <input
                                                                    className="m-check-input"
                                                                    type="checkbox"
                                                                    id="m-store"
                                                                />
                                                                <label className="m-check-label" for="m-store">
                                                                    Store
                                                                </label>
                                                            </div>
                                                            <span>20</span>
                                                        </li>
                                                        <li className="d-flex justify-content-between align-items-center">
                                                            <div className="sidebar__check d-flex align-items-center">
                                                                <input
                                                                    className="m-check-input"
                                                                    type="checkbox"
                                                                    id="m-agency"
                                                                />
                                                                <label className="m-check-label" for="m-agency">
                                                                    Agency
                                                                </label>
                                                            </div>
                                                            <span>83</span>
                                                        </li>
                                                        <li className="d-flex justify-content-between align-items-center">
                                                            <div className="sidebar__check d-flex align-items-center">
                                                                <input
                                                                    className="m-check-input"
                                                                    type="checkbox"
                                                                    id="m-portfolio"
                                                                />
                                                                <label className="m-check-label" for="m-portfolio">
                                                                    Portfolio
                                                                </label>
                                                            </div>
                                                            <span>45</span>
                                                        </li>
                                                        <li className="d-flex justify-content-between align-items-center">
                                                            <div className="sidebar__check d-flex align-items-center">
                                                                <input
                                                                    className="m-check-input"
                                                                    type="checkbox"
                                                                    id="m-construction"
                                                                />
                                                                <label className="m-check-label" for="m-construction">
                                                                    Construction
                                                                </label>
                                                            </div>
                                                            <span>25</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div
                                    className="sidebar__banner"
                                    style={{
                                        background: '#6e36fb',
                                        backgroundRepeat: 'none',
                                        backgroundImage: 'url(/assets/img/banner/sidebar-banner.jpg)',
                                    }}
                                >
                                    <h4 className="sidebar__banner-title">
                                        Check Out <br />
                                        Our free Templates
                                    </h4>
                                    <a href="product.html" className="m-btn m-btn-white">
                                        {' '}
                                        <span></span> free template
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                            <div className="row">
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="product__item white-bg mb-30 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="product__thumb">
                                            <div className="product__thumb-inner fix w-img">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-1.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="product__thumb-btn transition-3">
                                                <a href="/" className="m-btn m-btn-6 mb-15">
                                                    Buy Now
                                                </a>
                                                <a href="/" className="m-btn m-btn-7">
                                                    Preview Project
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product__content">
                                            <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                                                <div className="product__tag">
                                                    <a href="/">Business</a>
                                                </div>
                                                <div className="product__price">
                                                    <span>$49</span>
                                                </div>
                                            </div>
                                            <h3 className="product__title">
                                                <a href="product-details.html">Zibber - Business Consulting...</a>
                                            </h3>
                                            <p className="product__author">
                                                by <a href="/">Theme Pure</a> in <a href="/">Templates</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="product__item white-bg mb-30 wow fadeInUp" data-wow-delay=".5s">
                                        <div className="product__thumb">
                                            <div className="product__thumb-inner fix w-img">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-2.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="product__thumb-btn transition-3">
                                                <a href="/" className="m-btn m-btn-6 mb-15">
                                                    Buy Now
                                                </a>
                                                <a href="/" className="m-btn m-btn-7">
                                                    Preview Project
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product__content">
                                            <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                                                <div className="product__tag">
                                                    <a href="/">corporate</a>
                                                </div>
                                                <div className="product__price">
                                                    <span>$23</span>
                                                </div>
                                            </div>
                                            <h3 className="product__title">
                                                <a href="product-details.html">Pixen - Printing Services Company..</a>
                                            </h3>
                                            <p className="product__author">
                                                by <a href="/">Theme Pure</a> in <a href="/">Templates</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="product__item white-bg mb-30 wow fadeInUp" data-wow-delay=".7s">
                                        <div className="product__thumb">
                                            <div className="product__thumb-inner fix w-img">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-3.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="product__thumb-btn transition-3">
                                                <a href="/" className="m-btn m-btn-6 mb-15">
                                                    Buy Now
                                                </a>
                                                <a href="/" className="m-btn m-btn-7">
                                                    Preview Project
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product__content">
                                            <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                                                <div className="product__tag">
                                                    <a href="/">listing</a>
                                                </div>
                                                <div className="product__price">
                                                    <span>$12</span>
                                                </div>
                                            </div>
                                            <h3 className="product__title">
                                                <a href="product-details.html">Findup - Directory & Listing PSD...</a>
                                            </h3>
                                            <p className="product__author">
                                                by <a href="/">Theme Pure</a> in <a href="/">Templates</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="product__item white-bg mb-30 wow fadeInUp" data-wow-delay=".9s">
                                        <div className="product__thumb">
                                            <div className="product__thumb-inner fix w-img">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-4.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="product__thumb-btn transition-3">
                                                <a href="/" className="m-btn m-btn-6 mb-15">
                                                    Buy Now
                                                </a>
                                                <a href="/" className="m-btn m-btn-7">
                                                    Preview Project
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product__content">
                                            <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                                                <div className="product__tag">
                                                    <a href="/">e-commerce</a>
                                                </div>
                                                <div className="product__price">
                                                    <span>$59</span>
                                                </div>
                                            </div>
                                            <h3 className="product__title">
                                                <a href="product-details.html">Agota - Clean Minimal eCommerce.</a>
                                            </h3>
                                            <p className="product__author">
                                                by <a href="/">Theme Pure</a> in <a href="/">Templates</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="product__item white-bg mb-30 wow fadeInUp" data-wow-delay="1.2s">
                                        <div className="product__thumb">
                                            <div className="product__thumb-inner fix w-img">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-5.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="product__thumb-btn transition-3">
                                                <a href="/" className="m-btn m-btn-6 mb-15">
                                                    Buy Now
                                                </a>
                                                <a href="/" className="m-btn m-btn-7">
                                                    Preview Project
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product__content">
                                            <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                                                <div className="product__tag">
                                                    <a href="/">Business</a>
                                                </div>
                                                <div className="product__price">
                                                    <span>$49</span>
                                                </div>
                                            </div>
                                            <h3 className="product__title">
                                                <a href="product-details.html">BngTech - IT Solutions WordPress...</a>
                                            </h3>
                                            <p className="product__author">
                                                by <a href="/">Theme Pure</a> in <a href="/">Templates</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="product__item white-bg mb-30 wow fadeInUp" data-wow-delay="1.5s">
                                        <div className="product__thumb">
                                            <div className="product__thumb-inner fix w-img">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-6.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="product__thumb-btn transition-3">
                                                <a href="/" className="m-btn m-btn-6 mb-15">
                                                    Buy Now
                                                </a>
                                                <a href="/" className="m-btn m-btn-7">
                                                    Preview Project
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product__content">
                                            <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                                                <div className="product__tag">
                                                    <a href="/">Construction</a>
                                                </div>
                                                <div className="product__price">
                                                    <span>$49</span>
                                                </div>
                                            </div>
                                            <h3 className="product__title">
                                                <a href="product-details.html">BildPress - Construction WordPres.</a>
                                            </h3>
                                            <p className="product__author">
                                                by <a href="/">Theme Pure</a> in <a href="/">Templates</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="product__item white-bg mb-30 wow fadeInUp" data-wow-delay="1.5s">
                                        <div className="product__thumb">
                                            <div className="product__thumb-inner fix w-img">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-7.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="product__thumb-btn transition-3">
                                                <a href="/" className="m-btn m-btn-6 mb-15">
                                                    Buy Now
                                                </a>
                                                <a href="/" className="m-btn m-btn-7">
                                                    Preview Project
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product__content">
                                            <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                                                <div className="product__tag">
                                                    <a href="/">E-commerce</a>
                                                </div>
                                                <div className="product__price">
                                                    <span>$15</span>
                                                </div>
                                            </div>
                                            <h3 className="product__title">
                                                <a href="product-details.html">Retbo - eCommerce PSD Template</a>
                                            </h3>
                                            <p className="product__author">
                                                by <a href="/">Theme Pure</a> in <a href="/">Templates</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="product__item white-bg mb-30 wow fadeInUp" data-wow-delay="1.5s">
                                        <div className="product__thumb">
                                            <div className="product__thumb-inner fix w-img">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-8.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="product__thumb-btn transition-3">
                                                <a href="/" className="m-btn m-btn-6 mb-15">
                                                    Buy Now
                                                </a>
                                                <a href="/" className="m-btn m-btn-7">
                                                    Preview Project
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product__content">
                                            <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                                                <div className="product__tag">
                                                    <a href="/">Medical</a>
                                                </div>
                                                <div className="product__price">
                                                    <span>$29</span>
                                                </div>
                                            </div>
                                            <h3 className="product__title">
                                                <a href="product-details.html">Sycho - Psychology and Counseling.</a>
                                            </h3>
                                            <p className="product__author">
                                                by <a href="/">Theme Pure</a> in <a href="/">Templates</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xxl-12">
                                    <div
                                        className="basic-pagination wow fadeInUp text-center mt-20"
                                        data-wow-delay=".2s"
                                    >
                                        <ul>
                                            <li>
                                                <a href="product.html">
                                                    <i className="arrow_left"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <span>1</span>
                                                </a>
                                            </li>
                                            <li className="active">
                                                <a href="product.html">
                                                    <span>2</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product.html">
                                                    <span>3</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product.html">
                                                    <i className="fal fa-ellipsis-h"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product.html">
                                                    <span>30</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product.html">
                                                    <i className="arrow_right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Size;
