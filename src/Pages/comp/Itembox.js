import React from 'react';
import { Rating } from 'react-simple-star-rating';

const MyComponent = (props) => {
    const { val } = props;

    return (
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6" style={{ minWidth: '300px' }}>
            <div className="product__item white-bg mb-30 wow fadeInUp" data-wow-delay=".3s">
                <div className="product__thumb">
                    <div className="product__thumb-inner fix w-img">
                        <a href={'/product/' + val.prod_code}>
                            {val.thumbnail && (
                                <img
                                    className="img-fluid"
                                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                    crossOrigin="anonymous"
                                    src={val.thumbnail}
                                    alt={val.name}
                                />
                            )}
                        </a>
                    </div>
                    {/* <div className="product__thumb-btn transition-3">
                        <a href={'/product/' + val.prod_code} className="m-btn m-btn-7">
                            View More
                        </a>
                    </div> */}
                </div>
                <div className="flex gap-2 p-3 row">
                    {/* <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                        <div className="product__tag">
                            <a href={'/product/' + val.prod_code}>Business</a>
                        </div>
                        <div className="product__price">
                            <span>${val.base_price}</span>
                        </div>
                    </div> */}
                    {val.thumbnail && (
                        <img
                            className="img-fluid"
                            style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                            crossOrigin="anonymous"
                            src={val.thumbnail}
                            alt={val.name}
                        />
                    )}
                    <div className="col-10">
                        <div className="d-flex justify-content-between px-1">
                            <div className="col-10 no-padding">
                                <div className="subtitle1 overflow-hidden text-ellipsis whitespace-nowrap product__title">
                                    <a href={'/product/' + val.prod_code}>{val.name}</a>
                                </div>
                            </div>
                            <div className="col-2 no-padding">
                                <div className="product_price"> $4.00</div>
                            </div>
                        </div>
                        <div className="product_description overflow-hidden text-ellipsis whitespace-nowrap">
                            Learn To Trade From Proven Analysts And WallSt. Traders
                        </div>
                        {/* rating */}
                        <div className="d-flex flex-col align-items-center">
                            {/* star */}
                            <div className="custom-rating-wrapper d-flex align-items-center">
                                <Rating onClick={() => {}} initialValue={1} iconsCount={1} /> &nbsp;&nbsp;
                                <div className="rating-text d-inline">4.9 (96)</div>
                            </div>
                            <div className="d-flex overflow-hidden text-ellipsis whitespace-nowrap">
                                {[0, 1, 2, 3, 4, 55, 5].map(() => {
                                    return (
                                        <div className="d-flex trending_card_topic">
                                            &nbsp;<div>•</div>&nbsp;
                                            <div class="whitespace-nowrap">Trading</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        {/* <h3 className="product__title">
                            <a href={'/product/' + val.prod_code}>{val.name}</a>
                        </h3>
                        <p className="product__author">
                            by <a href="/">Theme Pure</a> in <a href="/">Templates</a>
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
