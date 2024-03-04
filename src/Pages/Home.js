import React, { useState, useEffect } from 'react';
import Apiconnect from '../services/Apiconnect.js';
import Itembox from './comp/Itembox.js';
import CountUp from 'react-countup';
import ExploreItem from './comp/explore-item.js';

const Home = () => {
    const [List, setList] = useState([]);
    const [CatList, setCatList] = useState([]);

    const recentz = [
        {
            name: 'Praveen Dagga',
            event: 'Purchased 2 min ago',
            thumb: 'http://localhost:3000/assets/img/testimonial/testi-1.jpg',
        },
        {
            name: 'Pratik Mishra',
            event: 'Added a comment 5 min ago',
            thumb: 'http://localhost:3000/assets/img/testimonial/testi-2.jpg',
        },
        {
            name: 'Binod Patel',
            event: 'Added a comment 15 min ago',
            thumb: 'http://localhost:3000/assets/img/testimonial/testi-3.jpg',
        },
        {
            name: 'Mathew Das',
            event: 'Purchased 22 min ago',
            thumb: 'http://localhost:3000/assets/img/testimonial/testi-4.jpg',
        },
        {
            name: 'Jane Smith',
            event: 'Added a comment 25 min ago',
            thumb: 'http://localhost:3000/assets/img/testimonial/testi-2.jpg',
        },
        {
            name: 'Bob Johnson',
            event: 'Added a comment 40 min ago',
            thumb: 'http://localhost:3000/assets/img/testimonial/testi-3.jpg',
        },
        {
            name: 'John Doe',
            event: 'Purchased 42 min ago',
            thumb: 'http://localhost:3000/assets/img/testimonial/testi-1.jpg',
        },
        {
            name: 'Jane Smith',
            event: 'Added a comment 1 hr ago',
            thumb: 'http://localhost:3000/assets/img/testimonial/testi-2.jpg',
        },
        {
            name: 'Bob Johnson',
            event: 'Added a comment 3 hr ago',
            thumb: 'http://localhost:3000/assets/img/testimonial/testi-3.jpg',
        },
    ];

    useEffect(() => {
        getInfoList();
        getCatList();
    }, []);

    const getInfoList = () => {
        // console.log('---XXXX--->>call start 11');
        Apiconnect.getData('product/getAll?limit=3').then((response) => {
            //console.log(response);
            let _xtract = Apiconnect.decrypt_obj(response.data.data);
            setList([..._xtract, ..._xtract, ..._xtract]);
        });
    };

    const getCatList = () => {
        Apiconnect.getData('cat/getAll').then((response) => {
            let _xtract = Apiconnect.decrypt_obj(response.data.data);
            setCatList(_xtract);
        });
    };

    return (
        <>
            {/* ==========================BANNER  */}
            <section
                className="hero__area hero__height  d-flex align-items-center"
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
                <div className="container-fluid m-md-5 m-sm-1 ">
                    <div className="row home__hero_image_row_container gap-sm-2d-block d-sm-flex">
                        <div className="col-lg-6 col-md-8 col-sm-8">
                            <div className="hero__content">
                                <h2 className="hero__title" style={{ fontSize: 35 }}>
                                    <span>Marketplace for</span> <br></br>
                                    cool internet products.
                                </h2>
                                <p>Communities & software to help you earn online.</p>
                                <div className="hero__search">
                                    <form action="/search">
                                        <div className="hero__search-inner d-xl-flex">
                                            <div className="hero__search-input">
                                                <span>
                                                    <i className="far fa-search"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="Search anything"
                                                    className="flex w-full border-none bg-transparent px-5 py-3 outline-none"
                                                />
                                            </div>
                                            {/* <button type="submit" className="m-btn mt-0 ml-20">
                                                {' '}
                                                <span></span> search
                                            </button> */}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                            <div class="card">
                                <div class="card-header">
                                    <h5>Recent activity</h5>
                                </div>
                                <div class="card-body" style={{ maxHeight: 250, overflowY: 'scroll' }}>
                                    {recentz.map((rcn, index) => (
                                        <div class="card" style={{ marginBottom: 5 }}>
                                            <div class="card-body" style={{ padding: 4, paddingLeft: 8 }}>
                                                <div class="row">
                                                    <div class="col-md-1">
                                                        <img
                                                            width="42"
                                                            className="rounded-circle"
                                                            src={rcn.thumb}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="col-md-10" style={{ paddingLeft: 30 }}>
                                                        <h6 style={{ marginBottom: 0 }}>{rcn.name}</h6>
                                                        <p style={{ marginBottom: 0 }}>{rcn.event}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==========================NUMERICS  */}
            <section className="counter__area" style={{ background: '#f6f6f6' }}>
                {/* <div className="container">
                    <div className="row"> */}
                <div className="col-md-3 col-sm-12">
                    <h4 class="text-center">
                        $ <CountUp start={0} end={123456789} duration={3} />
                    </h4>
                    <p class="text-center">Total Purchased on Whop</p>
                </div>
                <div className="col-md-3 col-sm-12">
                    <h4 class="text-center">
                        <CountUp start={0} end={456789} duration={3} />
                    </h4>
                    <p class="text-center">Total Members</p>
                </div>
                <div className="col-md-3 col-sm-12">
                    <h4 class="text-center">
                        <CountUp start={0} end={6789} duration={3} />
                    </h4>
                    <p class="text-center">Total Available Products</p>
                </div>
            </section>

            {/* ==========================TRENDING ADDED PROD  */}
            <section className="trending_product pt-10 pb-10">
                <div className="col-12">
                    <div className="section__title-wrapper mb-10">
                        <h2 style={{ fontSize: 28 }} className="section__title">
                            Trending Products
                        </h2>
                    </div>
                    <div className="trending_product_Item_all overflow-x-auto">
                        {List.map((val, key) => {
                            return <Itembox val={val} key={key} />;
                        })}
                    </div>
                </div>
            </section>

            {/* ==========================Explore the Marketplace  */}
            <section className="category__area pt-60 pb-50">
                <div className="padded-container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="section__title-wrapper mb-60">
                                <h2 style={{ fontSize: 28 }} className="section__title">
                                    Explore the Marketplace
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {CatList.map((valz, keyz) => {
                            return (
                                <>
                                    <ExploreItem valz={valz} />
                                </>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ==========================NEWLY ADDED PROD */}
            <section className="product__area pt-50 pb-50 grey-bg-2">
                <div className="padded-container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="section__title-wrapper mb-10">
                                <h2 style={{ fontSize: 28 }} className="section__title">
                                    Newly Added Products
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="trending_product_Item_all">
                        {List.map((val, key) => {
                            return <Itembox val={val} key={key} />;
                        })}
                    </div>
                </div>
            </section>

            {/* ==========================free trial PROD */}
            <section className="product__area pt-50 pb-50 grey-bg-2">
                <div className="padded-container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="section__title-wrapper mb-10">
                                <h2 style={{ fontSize: 28 }} className="section__title">
                                    Free Trials
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="trending_product_Item_all">
                        {List.map((val, key) => {
                            return <Itembox val={val} key={key} />;
                        })}
                    </div>
                </div>
            </section>

            {/* ==========================REVIEW  */}
            <div class="testimonial__area pt-50 pb-115 fix">
                <div class="padded-container">
                    <div className="section__title-wrapper mb-10">
                        <h2 style={{ fontSize: 28 }} className="section__title">
                            Recent Reviews
                        </h2>
                    </div>
                    <div class="testimonial__inner p-relative ">
                        <div class="row testimonial__slider flex-nowrap overflow-auto">
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(() => (
                                <div class="col-md-3 trending_product_Item_all">
                                    <div class="testimonial__item white-bg">
                                        <div class="testimonial__person d-flex mb-20">
                                            <div class="testimonial__avater">
                                                <img src="assets/img/testimonial/testi-1.jpg" calt="" />
                                            </div>
                                            <div class="testimonial__info ml-15">
                                                <h5>Justin Case</h5>
                                                <span>@justin</span>
                                            </div>
                                        </div>
                                        <div class="testimonial__text">
                                            <p>
                                                Tomfoolery chimney pot loo easy peasy twit he lost his bottle lavatory
                                                excuse my French up the duff cup of char bender fantastic arse.!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ==========================WHOP PICKS PROD */}
            <section className="product__area pt-50 pb-50 grey-bg-2">
                <div className="padded-container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="section__title-wrapper mb-10">
                                <h2 style={{ fontSize: 28 }} className="section__title">
                                    Whop Top Picks for you!
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="trending_product_Item_all">
                        {List.map((val, key) => {
                            return <Itembox val={val} key={key} />;
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
