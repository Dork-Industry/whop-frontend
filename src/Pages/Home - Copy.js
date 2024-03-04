import React from 'react';

const Home = () => {
    return (
        <>
            <section
                className="hero__area hero__height grey-bg-3 d-flex align-items-center"
                style={{ minHeight: 350, overflow: 'hidden' }}
            >
                <div className="hero__shape">
                    <img className="circle" src="assets/img/icon/hero/hero-circle.png" alt="circle" />
                    <img className="circle-2" src="assets/img/icon/hero/hero-circle-2.png" alt="circle" />
                    <img className="square" src="assets/img/icon/hero/hero-square.png" alt="circle" />
                    <img className="square-2" src="assets/img/icon/hero/hero-square-2.png" alt="circle" />
                    <img className="dot" src="assets/img/icon/hero/hero-dot.png" alt="circle" />
                    <img className="triangle" src="assets/img/icon/hero/hero-triangle.png" alt="circle" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-8">
                            <div className="hero__content">
                                <h2 className="hero__title" style={{ fontSize: 35 }}>
                                    <span>Marketplace for</span> <br></br>
                                    cool internet products.
                                </h2>
                                <p>Communities & software to help you earn online.</p>
                                <div className="hero__search">
                                    <form action="#">
                                        <div className="hero__search-inner d-xl-flex">
                                            <div className="hero__search-input">
                                                <span>
                                                    <i className="far fa-search"></i>
                                                </span>
                                                <input type="text" placeholder="Search anything" />
                                            </div>
                                            <button type="submit" className="m-btn mt-0 ml-20">
                                                {' '}
                                                <span></span> search
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                            {/* <div className="hero__thumb-wrapper scene ml-70">
                        <div className="hero__thumb one d-none d-lg-block">
                           <img className="layer" data-depth="0.2" src="assets/img/hero/hero-1.jpg" alt="" />
                        </div>
                        
                     </div> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="category__area pt-30 pb-30" style={{ background: '#9aa0a0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h4 class="text-center">$0123456789</h4>
                            <p class="text-center">Total Purchased on Whop</p>
                        </div>
                        <div className="col-md-4">
                            <h4 class="text-center">4589032</h4>
                            <p class="text-center">Total Members</p>
                        </div>
                        <div className="col-md-4">
                            <h4 class="text-center">4589</h4>
                            <p class="text-center">Total Available Products</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="category__area pt-60 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="section__title-wrapper text-center mb-60">
                                <h2 className="section__title">Popular Categories</h2>
                                <p>Find over 7000 cool stuff.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-md-6 col-sm-6">
                            <div
                                className="category__item transition-3 text-center white-bg mb-30 wow fadeInUp"
                                data-wow-delay=".3s"
                            >
                                <div className="category__icon mb-25">
                                    <a href="/">
                                        <img src="assets/img/icon/catagory/cat-1.png" alt="" />
                                    </a>
                                </div>
                                <div className="category__content">
                                    <h3 className="category__title">
                                        <a href="/">SAMPLE CATEGORY</a>
                                    </h3>
                                    <a href="product.html" className="link-btn">
                                        <i className="far fa-long-arrow-right"></i>
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-md-6 col-sm-6">
                            <div
                                className="category__item transition-3 text-center white-bg mb-30 wow fadeInUp"
                                data-wow-delay=".5s"
                            >
                                <div className="category__icon mb-25">
                                    <a href="/">
                                        <img src="assets/img/icon/catagory/cat-2.png" alt="" />
                                    </a>
                                </div>
                                <div className="category__content">
                                    <h3 className="category__title">
                                        <a href="product.html">SAMPLE CATEGORY</a>
                                    </h3>
                                    <a href="product.html" className="link-btn">
                                        <i className="far fa-long-arrow-right"></i>
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-md-6 col-sm-6">
                            <div
                                className="category__item transition-3 text-center white-bg mb-30 wow fadeInUp"
                                data-wow-delay=".7s"
                            >
                                <div className="category__icon mb-25">
                                    <a href="/">
                                        <img src="assets/img/icon/catagory/cat-3.png" alt="" />
                                    </a>
                                </div>
                                <div className="category__content">
                                    <h3 className="category__title">
                                        <a href="product.html">SAMPLE CATEGORY</a>
                                    </h3>
                                    <a href="product.html" className="link-btn">
                                        <i className="far fa-long-arrow-right"></i>
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-md-6 col-sm-6">
                            <div
                                className="category__item transition-3 text-center white-bg mb-30 wow fadeInUp"
                                data-wow-delay=".9s"
                            >
                                <div className="category__icon mb-25">
                                    <a href="/">
                                        <img src="assets/img/icon/catagory/cat-4.png" alt="" />
                                    </a>
                                </div>
                                <div className="category__content">
                                    <h3 className="category__title">
                                        <a href="product.html">SAMPLE CATEGORY</a>
                                    </h3>
                                    <a href="product.html" className="link-btn">
                                        <i className="far fa-long-arrow-right"></i>
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="category__more mt-30 text-center">
                                <a href="product.html" className="m-btn m-btn-2">
                                    {' '}
                                    <span></span> View all categories
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="trending__area pt-50 pb-50 grey-bg">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-xxl-6 col-xl-6 col-lg col-md-8">
                            <div className="section__title-wrapper mb-50">
                                <h2 className="section__title">Trending Products</h2>
                                <p>Exiciting offers inside.</p>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg col-md-4">
                            <div className="trending__more d-flex justify-content-md-end  mb-50">
                                <a href="product.html" className="m-btn m-btn-border">
                                    <span></span>Explore All Offers
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                            <div className="trending__item d-sm-flex white-bg mb-30 wow fadeInUp" data-wow-delay=".3s">
                                <div className="trending__thumb mr-25">
                                    <div className="trending__thumb-inner fix">
                                        <a href="product-details.html">
                                            <img src="assets/img/trending/tren-1.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="trending__content">
                                    <h3 className="trending__title">
                                        <a href="product-details.html">Zibber WP Theme</a>
                                    </h3>
                                    <p>Knees up arse blimey say happy days.</p>
                                    <div className="trending__meta d-flex justify-content-between">
                                        <div className="trending__tag">
                                            <a href="/">Business</a>
                                        </div>
                                        <div className="trending__price">
                                            <span>$39</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                            <div className="trending__item d-sm-flex white-bg mb-30 wow fadeInUp" data-wow-delay=".5s">
                                <div className="trending__thumb mr-25">
                                    <div className="trending__thumb-inner fix">
                                        <a href="product-details.html">
                                            <img src="assets/img/trending/tren-2.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="trending__content">
                                    <h3 className="trending__title">
                                        <a href="product-details.html">React App Landing</a>
                                    </h3>
                                    <p>Knees up arse blimey say happy days.</p>
                                    <div className="trending__meta d-flex justify-content-between">
                                        <div className="trending__tag">
                                            <a href="/">Technology</a>
                                        </div>
                                        <div className="trending__price">
                                            <span className="old-price">$29</span>
                                            <span>$25</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                            <div className="trending__item d-sm-flex white-bg mb-30 wow fadeInUp" data-wow-delay=".7s">
                                <div className="trending__thumb mr-25">
                                    <div className="trending__thumb-inner fix">
                                        <a href="product-details.html">
                                            <img src="assets/img/trending/tren-3.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="trending__content">
                                    <h3 className="trending__title">
                                        <a href="product-details.html">Digital Marketing</a>
                                    </h3>
                                    <p>Knees up arse blimey say happy days.</p>
                                    <div className="trending__meta d-flex justify-content-between">
                                        <div className="trending__tag">
                                            <a href="/">marketing</a>
                                        </div>
                                        <div className="trending__price">
                                            <span>$16</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                            <div className="trending__item d-sm-flex white-bg mb-30 wow fadeInUp" data-wow-delay=".3s">
                                <div className="trending__thumb mr-25">
                                    <div className="trending__thumb-inner fix">
                                        <a href="product-details.html">
                                            <img src="assets/img/trending/tren-4.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="trending__content">
                                    <h3 className="trending__title">
                                        <a href="product-details.html">Ad Manager Admin</a>
                                    </h3>
                                    <p>Knees up arse blimey say happy days.</p>
                                    <div className="trending__meta d-flex justify-content-between">
                                        <div className="trending__tag">
                                            <a href="/">software</a>
                                        </div>
                                        <div className="trending__price">
                                            <span>$29</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                            <div className="trending__item d-sm-flex white-bg mb-30 wow fadeInUp" data-wow-delay=".5s">
                                <div className="trending__thumb mr-25">
                                    <div className="trending__thumb-inner fix">
                                        <a href="product-details.html">
                                            <img src="assets/img/trending/tren-5.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="trending__content">
                                    <h3 className="trending__title">
                                        <a href="product-details.html">UI Template</a>
                                    </h3>
                                    <p>Knees up arse blimey say happy days.</p>
                                    <div className="trending__meta d-flex justify-content-between">
                                        <div className="trending__tag">
                                            <a href="/">UI kit</a>
                                        </div>
                                        <div className="trending__price">
                                            <span>$44</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                            <div className="trending__item d-sm-flex white-bg mb-30 wow fadeInUp" data-wow-delay=".7s">
                                <div className="trending__thumb mr-25">
                                    <div className="trending__thumb-inner fix">
                                        <a href="product-details.html">
                                            <img src="assets/img/trending/tren-6.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="trending__content">
                                    <h3 className="trending__title">
                                        <a href="product-details.html">Email Template</a>
                                    </h3>
                                    <p>Knees up arse blimey say happy days.</p>
                                    <div className="trending__meta d-flex justify-content-between">
                                        <div className="trending__tag">
                                            <a href="/">manager</a>
                                        </div>
                                        <div className="trending__price">
                                            <span>$14</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                            <div className="trending__item d-sm-flex white-bg mb-30 wow fadeInUp" data-wow-delay=".3s">
                                <div className="trending__thumb mr-25">
                                    <div className="trending__thumb-inner fix">
                                        <a href="product-details.html">
                                            <img src="assets/img/trending/tren-7.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="trending__content">
                                    <h3 className="trending__title">
                                        <a href="product-details.html">Multipurpose Store</a>
                                    </h3>
                                    <p>Knees up arse blimey say happy days.</p>
                                    <div className="trending__meta d-flex justify-content-between">
                                        <div className="trending__tag">
                                            <a href="/">marketing</a>
                                        </div>
                                        <div className="trending__price">
                                            <span>$55</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                            <div className="trending__item d-sm-flex white-bg mb-30 wow fadeInUp" data-wow-delay=".5s">
                                <div className="trending__thumb mr-25">
                                    <div className="trending__thumb-inner fix">
                                        <a href="product-details.html">
                                            <img src="assets/img/trending/tren-8.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="trending__content">
                                    <h3 className="trending__title">
                                        <a href="product-details.html">Responsive Agency</a>
                                    </h3>
                                    <p>Knees up arse blimey say happy days.</p>
                                    <div className="trending__meta d-flex justify-content-between">
                                        <div className="trending__tag">
                                            <a href="/">agency</a>
                                        </div>
                                        <div className="trending__price">
                                            <span>$22</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                            <div className="trending__item d-sm-flex white-bg mb-30 wow fadeInUp" data-wow-delay=".7s">
                                <div className="trending__thumb mr-25">
                                    <div className="trending__thumb-inner fix">
                                        <a href="product-details.html">
                                            <img src="assets/img/trending/tren-9.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="trending__content">
                                    <h3 className="trending__title">
                                        <a href="product-details.html">Admin Dashboard</a>
                                    </h3>
                                    <p>Knees up arse blimey say happy days.</p>
                                    <div className="trending__meta d-flex justify-content-between">
                                        <div className="trending__tag">
                                            <a href="/">application</a>
                                        </div>
                                        <div className="trending__price">
                                            <span>$49</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                style={{ background: '#6e36fb', backgroundImage: 'url(/assets/img/bg/subscribe-bg.jpg)' }}
                className="subscribe__area p-relative pt-50 pb-40"
            >
                <div className="subscribe__icon">
                    <img className="ps" src="/assets/img/icon/subscribe/ps.png" alt="" />
                    <img className="wp" src="/assets/img/icon/subscribe/wp.png" alt="" />
                    <img className="html" src="/assets/img/icon/subscribe/html.png" alt="" />
                    <img className="f" src="/assets/img/icon/subscribe/f.png" alt="" />
                    <img className="man" src="/assets/img/icon/subscribe/man.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="subscribe__content text-center wow fadeInUp" data-wow-delay=".5s">
                                <h3 className="subscribe__title">Get in touch with us.</h3>
                                <p>Try our any product for FREE!</p>
                                <div className="subscribe__form wow fadeInUp" data-wow-delay=".7s">
                                    <form action="#">
                                        <input type="email" placeholder="Email Address" />
                                        <button type="submit" className="m-btn m-btn-black">
                                            <span></span> subscribe{' '}
                                        </button>
                                    </form>
                                    <p>Join 20,000+ other creators in our community.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product__area pt-50 pb-50 grey-bg-2">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="section__title-wrapper text-center mb-60">
                                <h2 className="section__title">Premium Products</h2>
                                <p>From multipurpose themes to niche templates</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
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
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
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
                                        <a
                                            href="https://themeforest.net/item/zibber-business-consulting-wordpress-theme/30120392"
                                            className="m-btn m-btn-7"
                                        >
                                            Preview Project
                                        </a>
                                    </div>
                                </div>
                                <div className="product__content">
                                    <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                                        <div className="product__tag">
                                            <a href="product-details.html">corporate</a>
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
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
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
                                        <a
                                            href="https://themeforest.net/item/zibber-business-consulting-wordpress-theme/30120392"
                                            className="m-btn m-btn-7"
                                        >
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
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
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
                                        <a
                                            href="https://themeforest.net/item/zibber-business-consulting-wordpress-theme/30120392"
                                            className="m-btn m-btn-7"
                                        >
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
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
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
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
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
                    </div>
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="product__more text-center mt-30">
                                <a href="product.html" className="m-btn m-btn-2">
                                    {' '}
                                    <span></span> Explore Premium
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
