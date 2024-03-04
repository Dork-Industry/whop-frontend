import React from 'react';

const Banner = () => {
    const imageUrl = 'sutracode/bg1.jpg';

    return (
        <>
            <section className="banner-section" style={{ height: 500 }}>
                <div
                    className="background-layer"
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                ></div>

                <div className="auto-container">
                    <div className="content-box">
                        <div className="upper-heading">
                            <h3>
                                Discover Top
                                <span className="typed-words"></span>
                            </h3>
                            <p>Find top Salons & services .</p>
                        </div>

                        <div className="listing-search-tabs tabs-box">
                            <div className="tabs-content">
                                <div className="tab active-tab" id="tab1">
                                    <div className="listing-search-form">
                                        <form method="post" action="index.html">
                                            <div className="row">
                                                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                                    <input
                                                        type="text"
                                                        name="listing-search"
                                                        placeholder="What are you looking for?"
                                                    />
                                                </div>

                                                <div className="form-group col-lg-3 col-md-6 col-sm-12 location">
                                                    <input type="text" name="listing-search" placeholder="Location" />
                                                    <span
                                                        className="icon flaticon-placeholder"
                                                        data-text="Type and hit enter"
                                                    ></span>
                                                </div>

                                                <div className="form-group col-lg-3 col-md-6 col-sm-12">
                                                    <select className="chosen-select">
                                                        <option>All Categories</option>
                                                        <option>Salons</option>
                                                    </select>
                                                </div>

                                                <div className="form-group col-lg-2 col-md-6 col-sm-12 text-right">
                                                    <button type="submit" className="theme-btn btn-style-two">
                                                        Search
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
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

export default Banner;
