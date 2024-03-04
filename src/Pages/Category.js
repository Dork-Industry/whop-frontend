import React, { useState, useEffect } from 'react';
import Apiconnect from '../services/Apiconnect.js';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import helper from '../services/HelperCodebase.js';

const Category = () => {
    const navigate = useNavigate();
    const param = useParams();

    useEffect(() => {
        getInfoList();
        getCatList();
    }, []);
    const [List, setList] = useState([]);
    const [Maincat, setMaincat] = useState([]);
    const [CatList, setCatList] = useState([]);

    const getInfoList = () => {
        Apiconnect.getData('product/getAll?limit=10').then((response) => {
            let _xtract = Apiconnect.decrypt_obj(response.data.data);
            setList(_xtract);
        });
    };

    const getCatList = () => {
        Apiconnect.getData('cat/getAll').then((response) => {
            let _xtract = Apiconnect.decrypt_obj(response.data.data);
            setCatList(_xtract);

            var ttx = helper.array_search_multidim('url', param.slug, _xtract);

            setMaincat(ttx[0]);
        });
    };

    const golink = (ln) => {
        navigate(ln);
    };

    return (
        <>
            <div className="bg-shape">
                <img src="/assets/img/shape/shape-1.png" alt="" />
            </div>

            <section className="product__area po-rel-z1 pt-50 pb-115 grey-bg">
                <div className="container-fluid">
                    <div className="row">
                        <h2>
                            {Maincat.name} <span style={{ fontSize: 12 }}>{Maincat.info}</span>
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-3 order-lg-first order-last">
                            <div className="product__sidebar mr-30">
                                <div className="product__sidebar-widget  white-bg mb-30">
                                    <div className="sidebar__widget mb-20">
                                        <form action="#">
                                            <div className="sidebar__widget-head d-flex align-items-center justify-content-between">
                                                <h4 className="sidebar__widget-title">Category</h4>
                                                <button type="submit" className="sidebar__clear-btn">
                                                    <i className="fal fa-repeat"></i>Clear
                                                </button>
                                            </div>
                                            <div className="sidebar__widget-content">
                                                <div className="sidebar__check-wrapper">
                                                    <ul>
                                                        {CatList.map((valz, keyz) => {
                                                            return (
                                                                <li className="d-flex justify-content-between align-items-center">
                                                                    <div className="sidebar__check d-flex align-items-center">
                                                                        <input
                                                                            className="m-check-input"
                                                                            type="checkbox"
                                                                            id="m-wp"
                                                                        />
                                                                        <label className="m-check-label" for="m-wp">
                                                                            {valz.name}
                                                                        </label>
                                                                    </div>
                                                                    <span> </span>
                                                                </li>
                                                            );
                                                        })}
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
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                <h4> 4 Products</h4>

                                {List.map((val, key) => {
                                    return (
                                        <>
                                            <div
                                                class="card flex-row"
                                                style={{
                                                    paddingLeft: 0,
                                                    marginBottom: 20,
                                                    borderColor: '#f7f7f9',
                                                    backgroundColor: '#f7f7f9',
                                                    boxShadow: 'none',
                                                }}
                                            >
                                                {val.thumbnail && (
                                                    <img
                                                        style={{ cursor: 'pointer' }}
                                                        className="card-img-left"
                                                        onClick={(e) => golink('/product/' + val.prod_code)}
                                                        crossorigin="anonymous"
                                                        src={val.thumbnail}
                                                    />
                                                )}

                                                <div
                                                    class="card-body"
                                                    style={{
                                                        borderColor: '#ededed',
                                                        backgroundColor: '#ededed',
                                                        position: 'relative',
                                                        boxShadow: 'none',
                                                    }}
                                                >
                                                    <h4 style={{ fontSize: 16 }} class="card-title h5 h4-sm">
                                                        <a href={'/product/' + val.prod_code}>
                                                            {val.thumbnail && (
                                                                <img
                                                                    style={{ marginRight: 5 }}
                                                                    className="rounded"
                                                                    width="20"
                                                                    height="20"
                                                                    crossorigin="anonymous"
                                                                    src={val.thumbnail}
                                                                />
                                                            )}
                                                            {val.name}{' '}
                                                            <i
                                                                style={{ color: '#625bf6' }}
                                                                class="fa fa-circle-check"
                                                            ></i>
                                                        </a>{' '}
                                                    </h4>
                                                    <p
                                                        style={{ marginBottom: 0, fontSize: 11, color: '#e0a008' }}
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
                                                    <p style={{ marginBottom: 0 }} class="card-text">
                                                        {val.prod_tagline}
                                                    </p>
                                                    <p class="card-text">{val.short_info}</p>

                                                    <div style={{ position: 'absolute', top: 10, right: 10 }}>
                                                        <b>${val.base_price}</b>/month
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                            <div className="row" style={{ display: 'none' }}>
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

export default Category;
