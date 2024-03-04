import React, { useState, useEffect, useContext } from 'react';

import Apiconnect from '../services/Apiconnect.js';
import { useData } from '../Context/Pagecontxt.js';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    useEffect(() => {
        getInfoList();
    }, []);
    const [List, setList] = useState([]);

    const getInfoList = () => {
        Apiconnect.postData('product/cart').then((response) => {
            let _xtract = response.data.data;
            setList(_xtract.reverse());
            console.log(_xtract);
        });
    };

    const doCheckout = async (e) => {
        await Apiconnect.postData('product/purchase').then((response) => {
            console.log(response);
            navigate('/trancomplete');
        });
    };

    return (
        <>
            <div className="bg-shape newbgmin" style={{ backgroundImage: 'url(/assets/bgmg.jpg)' }}>
                <img src="/assets/img/shape/shape-1.png" alt="" />
            </div>

            <section className="about__area pt-100 ">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1">
                            <div className="about__wrapper  ">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="card" style={{ marginBottom: 50 }}>
                                            <div class="card-body">
                                                <h5>List of Items in cart</h5>
                                                <table className="table table-hover table-bordered">
                                                    <thead>
                                                        <tr style={{ backgroundColor: '#11bac3', fontWeight: 'bold' }}>
                                                            <td>#</td>
                                                            <td>Product</td>
                                                            <td>Price</td>
                                                            <td></td>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {List.map((val, key) => {
                                                            return (
                                                                <tr key={key}>
                                                                    <td>{key + 1}</td>
                                                                    <td>{val.prod_name}</td>
                                                                    <td>${val.price}</td>

                                                                    <td></td>
                                                                </tr>
                                                            );
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-5">
                                        <div className="card" style={{ marginBottom: 50 }}>
                                            <div class="card-body">
                                                <h5>Proceed to checkout</h5>

                                                <div class="form-check">
                                                    <input
                                                        class="form-check-input"
                                                        type="checkbox"
                                                        id="check1"
                                                        name="option1"
                                                        value="something"
                                                        checked
                                                    />
                                                    <label class="form-check-label">Cash On Delivery</label>
                                                </div>

                                                <div class="form-check">
                                                    <input
                                                        class="form-check-input"
                                                        type="checkbox"
                                                        id="check1"
                                                        name="option1"
                                                        value="something"
                                                        disabled
                                                    />
                                                    <label class="form-check-label">Pay with PhonePay</label>
                                                </div>

                                                <br />

                                                <a onClick={(e) => doCheckout(e)} className="btn btn-warning">
                                                    Checkout
                                                </a>
                                            </div>
                                        </div>
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

export default Cart;
