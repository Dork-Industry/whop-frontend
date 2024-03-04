import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Apiconnect from '../services/Apiconnect.js';
// import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { useData } from '../Context/Pagecontxt.js';

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

const Product = () => {
    const { addToCart } = useData();
    const param = useParams();
    const [inf, setInf] = useState([]);
    const [selprice, setSelprice] = useState(22);

    const priceplan = [
        { name: 'Dad Bundle', info: '$35/Month', id: '22' },
        { name: 'Dad Cruzer', info: '$65/Month', id: '123' },
        { name: 'Premium Dad Pack', info: '$75/Month', id: '261' },
        { name: 'Tutor Mode', info: '$115/Month', id: '335' },
    ];

    const incld = [
        {
            name: 'Discord Access',
            info: 'Early access to Discord Community',
            thumb: 'http://localhost:3000/assets/iconz/discord.svg',
        },
        { name: 'Online Class', info: '1:1 online class', thumb: 'http://localhost:3000/assets/iconz/onlineclass.svg' },
        { name: 'Website link', info: 'Premium  Access', thumb: 'http://localhost:3000/assets/iconz/web.svg' },
        { name: 'Telegram access', info: 'Sniper Trades', thumb: 'http://localhost:3000/assets/iconz/telegram.svg' },
        {
            name: 'TradingView indicator',
            info: 'Dream Trading - EWO',
            thumb: 'http://localhost:3000/assets/iconz/tradeview.svg',
        },
    ];

    const featurz = [
        {
            name: 'Exclusive Analysts ',
            info: "Access to professional, best-in-class analysts that you can't find anywhere else.",
            emoji: '🤫',
        },
        {
            name: 'Real Time Trade Ideas ',
            info: 'Real-time ideas for stocks, options, crypto, sports-betting, and more.',
            emoji: '🚨',
        },
        {
            name: '24/7 Trading Signals!',
            info: 'Crypto trading signals from some of the Best traders in the world!',
            emoji: '📈',
        },
        {
            name: '1:1 Mentorship and Roadmap ',
            info: 'Personal mentor to guide you through our proprietary Roadmap™ system.',
            emoji: '🚗',
        },
        { name: 'TradingView indicator', info: 'Dream Trading - EWO', emoji: '💸' },

        {
            name: '30 Year Professional Trader',
            info: 'Get mentorship from a stock market trader with 30 years of experience in every market condition',
            emoji: '🔥',
        },
    ];

    const qna = [
        {
            question:
                'I see live trading in the stock dads discord. How much I have to pay additionally to join in the live trading?',
            answer: 'Hey there! Live trading is included with our Dad Bundle and Stock Dads subscription. It is not included with our Crypto Dads or Dad Bets subscription!',
            timeline: '3 days Ago',
        },
        {
            question: 'What is your winrate? ',
            answer: 'This varies week to week and month but most of our analysts maintain 70%-80% win rate consistently',
            timeline: '4 Weeks Ago',
        },
    ];

    useEffect(() => {
        getinfo(param.id);
    }, []);

    const handleAddToCart = () => {
        addToCart(inf.id);
    };
    const changepriceplan = (vv) => {
        setSelprice(vv);
    };

    const getinfo = (id) => {
        Apiconnect.getData(`product/getbycode/${id}`).then((response) => {
            var tt = Apiconnect.decrypt_obj(response.data.data);
            console.log(tt);
            setInf(tt);
        });
    };

    return (
        <>
            <div className="bg-shape">
                <img src="/assets/img/shape/shape-1.png" alt="" />
            </div>

            <section className="page__title-area  pt-20 pl-20">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="page__title-content mb-20">
                                {/* <h2 className="page__title">{inf.name}    </h2> */}
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="/">Home</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="/">Product</a>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product__area pb-115">
                <div className="container-fuid" style={{ padding: 20, paddingTop: 0 }}>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="product__details-thumb w-img mb-30">
                                {inf.thumbnail && (
                                    <img src={inf.thumbnail} crossorigin="anonymous" alt="product-details" />
                                )}
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="product__wrapper">
                                <div className="product__details-content">
                                    <div className="product__tab-content">
                                        <div className="tab-content" id="proTabContent">
                                            <div
                                                className="tab-pane fade show active"
                                                id="overview"
                                                role="tabpanel"
                                                aria-labelledby="overview-tab"
                                            >
                                                <div className="product__overview">
                                                    <h4 style={{ fontSize: 24 }} class="card-title h5 h4-sm">
                                                        {inf.thumbnail && (
                                                            <img
                                                                style={{ marginRight: 5 }}
                                                                className="rounded"
                                                                width="20"
                                                                height="20"
                                                                crossorigin="anonymous"
                                                                src={inf.thumbnail}
                                                            />
                                                        )}
                                                        {inf.name}{' '}
                                                        <i style={{ color: '#625bf6' }} class="fa fa-circle-check"></i>
                                                    </h4>

                                                    <a
                                                        href="/"
                                                        style={{
                                                            fontSize: 13,
                                                            float: 'left',
                                                            marginRight: 20,
                                                            borderRadius: 6,
                                                            padding: 6,
                                                            fontWeight: 'bold',
                                                        }}
                                                        className="btn btn-sm btn-warning"
                                                    >
                                                        #2 Top Charts
                                                    </a>
                                                    <p
                                                        style={{ marginBottom: 0, fontSize: 14, color: '#e0a008' }}
                                                        class="card-text"
                                                    >
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i style={{ color: '#ccc' }} class="fa fa-star"></i>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        <span style={{ color: '#999' }}> 4.8 (345) </span>
                                                    </p>
                                                    <br />
                                                    <p
                                                        style={{ marginBottom: 0, color: '#000', marginBottom: 20 }}
                                                        class="card-text"
                                                    >
                                                        {inf.prod_tagline}
                                                    </p>

                                                    <div className="row">
                                                        {priceplan.map((rcn, index) => (
                                                            <div class="col-md-6">
                                                                <div
                                                                    onClick={(e) => changepriceplan(rcn.id)}
                                                                    className={`card ${selprice == rcn.id ? 'activeprice' : ''}`}
                                                                    style={{
                                                                        marginBottom: 5,
                                                                        cursor: 'pointer',
                                                                        marginBottom: 10,
                                                                    }}
                                                                >
                                                                    <div
                                                                        class="card-body"
                                                                        style={{ padding: 4, paddingLeft: 8 }}
                                                                    >
                                                                        <div class="row">
                                                                            <div
                                                                                class="col-md-10"
                                                                                style={{ paddingLeft: 30 }}
                                                                            >
                                                                                <h5 style={{ marginBottom: 0 }}>
                                                                                    {rcn.name}
                                                                                </h5>
                                                                                <p style={{ marginBottom: 0 }}>
                                                                                    {rcn.info}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div dangerouslySetInnerHTML={{ __html: inf.prod_info }} />

                                                    <div className="product__features mt-40">
                                                        <h3 className="product__overview-title">Includes:</h3>

                                                        {incld.map((rcn, index) => (
                                                            <div
                                                                class="card"
                                                                style={{
                                                                    marginBottom: 5,
                                                                    boxShadow: 'none',
                                                                    borderColor: '#fff',
                                                                    marginBottom: 10,
                                                                }}
                                                            >
                                                                <div
                                                                    class="card-body"
                                                                    style={{
                                                                        padding: 4,
                                                                        boxShadow: 'none',
                                                                        paddingLeft: 8,
                                                                    }}
                                                                >
                                                                    <div class="row">
                                                                        <div class="col-md-1">
                                                                            <img
                                                                                width="42"
                                                                                style={{ borderRadius: 12 }}
                                                                                src={rcn.thumb}
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div
                                                                            class="col-md-10"
                                                                            style={{ paddingLeft: 30 }}
                                                                        >
                                                                            <h6 style={{ marginBottom: 0 }}>
                                                                                {rcn.name}
                                                                            </h6>
                                                                            <p style={{ marginBottom: 0 }}>
                                                                                {rcn.info}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="product__features mt-40">
                                                        <h3 className="product__overview-title">Features:</h3>

                                                        {featurz.map((rcn, index) => (
                                                            <div
                                                                class="card"
                                                                style={{
                                                                    marginBottom: 5,
                                                                    boxShadow: 'none',
                                                                    borderColor: '#fff',
                                                                    marginBottom: 10,
                                                                }}
                                                            >
                                                                <div
                                                                    class="card-body"
                                                                    style={{
                                                                        padding: 4,
                                                                        boxShadow: 'none',
                                                                        paddingLeft: 8,
                                                                    }}
                                                                >
                                                                    <div class="row">
                                                                        <div class="col-md-1">
                                                                            {/* <img width="42" style={{borderRadius:12}} src={rcn.thumb} alt="" /> */}
                                                                            <div
                                                                                style={{
                                                                                    width: 60,
                                                                                    height: 60,
                                                                                    borderRadius: 12,
                                                                                    fontSize: 30,
                                                                                    display: 'flex',
                                                                                    alignItems: 'center',
                                                                                    justifyContent: 'center',
                                                                                    background: '#ccc',
                                                                                }}
                                                                            >
                                                                                {rcn.emoji}
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            class="col-md-10"
                                                                            style={{ paddingLeft: 30 }}
                                                                        >
                                                                            <h5 style={{ marginBottom: 0 }}>
                                                                                {rcn.name}
                                                                            </h5>
                                                                            <p style={{ marginBottom: 0 }}>
                                                                                {rcn.info}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="product__features mt-40">
                                                        <h3 className="product__overview-title">
                                                            Customer question & answers:
                                                        </h3>

                                                        {qna.map((rcn, index) => (
                                                            <div
                                                                class="card"
                                                                style={{
                                                                    marginBottom: 5,
                                                                    boxShadow: 'none',
                                                                    borderColor: '#fff',
                                                                    marginBottom: 10,
                                                                }}
                                                            >
                                                                <div
                                                                    class="card-body"
                                                                    style={{
                                                                        padding: 4,
                                                                        boxShadow: 'none',
                                                                        paddingLeft: 8,
                                                                    }}
                                                                >
                                                                    <div class="row">
                                                                        <div
                                                                            class="col-md-10"
                                                                            style={{ paddingLeft: 30 }}
                                                                        >
                                                                            <h5 style={{ marginBottom: 0 }}>
                                                                                Question: {rcn.question}
                                                                            </h5>
                                                                            <br />
                                                                            <p style={{ marginBottom: 0 }}>
                                                                                <b>Answer: </b>
                                                                                {rcn.answer}
                                                                            </p>
                                                                            <br />
                                                                            <p style={{ marginBottom: 0 }}>
                                                                                <b>
                                                                                    <i class="fa fa-calendar"></i>
                                                                                </b>{' '}
                                                                                Answered {rcn.timeline}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="product__social m-social grey-bg-2">
                                                        <h4 className="product__social-title">Follow us</h4>
                                                        <ul>
                                                            <li>
                                                                <a href="/" className="fb">
                                                                    <i className="fab fa-facebook-f"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/" className="tw">
                                                                    <i className="fab fa-twitter"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/" className="pin">
                                                                    <i className="fab fa-pinterest-p"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/" className="link">
                                                                    <i className="fab fa-linkedin-in"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="product__details-sidebar ml-30">
                                <div className="product__proprietor white-bg mb-30">
                                    <div className="product__proprietor-head mb-25">
                                        <div className="product__prorietor-info mb-20 d-flex justify-content-between">
                                            <div className="product__proprietor-avater d-flex align-items-center">
                                                <div className="product__proprietor-thumb">
                                                    <img
                                                        crossorigin="anonymous"
                                                        src="https://ik.imagekit.io/xhbquqapb/v1.jpg?updatedAt=1703839159052"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="product__proprietor-name">
                                                    <h5>
                                                        <a href="/">{inf.seller_name}</a>
                                                    </h5>
                                                    <a href="/">{inf.business_name}</a>
                                                </div>
                                            </div>
                                            <div className="product__proprietor-price">
                                                {/* <span className="d-flex align-items-start"><span>$</span>{inf.base_price}</span> */}
                                            </div>
                                        </div>
                                        <div className="product__proprietor-text">
                                            <p>{inf.prod_tagline}</p>
                                        </div>
                                    </div>
                                    <div className="product__proprietor-body fix">
                                        <ul className="mb-10 fix">
                                            <li>
                                                <h6>Downloads:</h6>
                                                <span>44</span>
                                            </li>

                                            <li>
                                                <h6>Created On :</h6>
                                                <span> 12 Dec 2023</span>
                                            </li>
                                        </ul>
                                        <div className="row">
                                            {priceplan.map((rcn, index) => (
                                                <div class="col-md-12">
                                                    <div
                                                        onClick={(e) => changepriceplan(rcn.id)}
                                                        className={`card ${selprice == rcn.id ? 'activeprice' : ''}`}
                                                        style={{ marginBottom: 5, cursor: 'pointer', marginBottom: 10 }}
                                                    >
                                                        <div class="card-body" style={{ padding: 4, paddingLeft: 8 }}>
                                                            <div class="row">
                                                                <div
                                                                    class="col-md-10"
                                                                    style={{ padding: 12, paddingLeft: 25 }}
                                                                >
                                                                    <h5 style={{ marginBottom: 0 }}>{rcn.info}</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <button
                                            onClick={(e) => handleAddToCart(e)}
                                            className=" btn btn-warning   w-100 mb-20"
                                        >
                                            {' '}
                                            <span></span> Subscribe{' '}
                                        </button>
                                    </div>

                                    <div className="product__proprietor-body fix">
                                        <div class="card">
                                            <div class="card-header">
                                                <h5>Recent activity</h5>
                                            </div>
                                            <div class="card-body" style={{ maxHeight: 450, overflowY: 'scroll' }}>
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
                                                                    <h6 style={{ marginBottom: 0, fontSize: 12 }}>
                                                                        {rcn.name}
                                                                    </h6>
                                                                    <p style={{ fontSize: 10 }}>{rcn.event}</p>
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
                        </div>
                    </div>
                </div>
            </section>

            <ToastContainer />
        </>
    );
};

export default Product;
