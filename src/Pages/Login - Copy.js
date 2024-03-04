import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { useNavigate } from 'react-router-dom';

import Apiconnect from '../services/Apiconnect.js';

//import axios from "axios";
//const Login_url = "https://napi.pharostec.pw/api/users/login";

const Login = () => {
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.warn(email);
        console.warn(password);

        var indata = {
            email: email,
            password: password,
        };

        // axios.post(Login_url, indata)
        //    .then(response => {
        //       // if (response.data.accessToken) {
        //       //    localStorage.setItem("user", JSON.stringify(response.data));
        //       // }
        //       // return response.data;

        //       console.warn(response.data);
        //       var resz = response.data;
        //       console.warn(resz.status);

        //       if (response.data.accessToken) {
        //             localStorage.setItem('token', resz.accessToken);
        //             localStorage.setItem('user_typ', resz.user_typ);

        //             login(1);
        //             // Reset form fields
        //             setEmail('');
        //             setPassword('');

        //             if(resz.user_typ==='Admin'){
        //                navigate('/admin/dashboard');
        //             }
        //             else if(resz.user_typ==='User'){
        //                navigate('/users/dashboard');
        //             }
        //             else if(resz.user_typ==='Seller'){
        //                navigate('/seller/dashboard');
        //             }

        //       }else{
        //          alert(response.data.message);
        //       }
        //    });

        Apiconnect.postDataNoauth('users/login', indata).then((response) => {
            console.warn(response.data);
            var resz = response.data;
            console.warn(resz.status);
            if (response.data.accessToken) {
                localStorage.setItem('token', resz.accessToken);
                localStorage.setItem('user_typ', resz.user_typ);

                login(1);
                // Reset form fields
                setEmail('');
                setPassword('');

                if (resz.user_typ === 'Admin') {
                    navigate('/admin/dashboard');
                } else if (resz.user_typ === 'User') {
                    navigate('/users/dashboard');
                } else if (resz.user_typ === 'Seller') {
                    navigate('/seller/dashboard');
                }
            } else {
                alert(response.data.message);
            }
        });
    };

    return (
        <>
            <div className="bg-shape">
                <img src="/assets/img/shape/shape-1.png" alt="" />
            </div>

            <section className="signup__area po-rel-z1 pt-100 pb-145">
                <div className="sign__shape">
                    <img className="man-1" src="assets/img/icon/sign/man-1.png" alt="" />
                    <img className="man-2" src="assets/img/icon/sign/man-2.png" alt="" />
                    <img className="circle" src="assets/img/icon/sign/circle.png" alt="" />
                    <img className="zigzag" src="assets/img/icon/sign/zigzag.png" alt="" />
                    <img className="dot" src="assets/img/icon/sign/dot.png" alt="" />
                    <img className="bg" src="assets/img/icon/sign/sign-up.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
                            <div className="page__title-wrapper text-center mb-55">
                                <h2 className="page__title-2">Login </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="sign__wrapper white-bg">
                                <div className="sign__form">
                                    <form onSubmit={handleSubmit}>
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Your email</h5>
                                            <div className="sign__input">
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                    placeholder="e-mail address"
                                                />
                                                <i className="fal fa-envelope"></i>
                                            </div>
                                        </div>
                                        <div className="sign__input-wrapper mb-10">
                                            <h5>Password</h5>
                                            <div className="sign__input">
                                                <input
                                                    type="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                    placeholder="Password"
                                                />
                                                <i className="fal fa-lock"></i>
                                            </div>
                                        </div>
                                        <div className="sign__action d-sm-flex justify-content-between mb-30">
                                            <div className="sign__forgot">
                                                <a href="/">Forgot your password?</a>
                                            </div>
                                        </div>
                                        <button type="submit" className="m-btn m-btn-4 w-100">
                                            {' '}
                                            <span></span> Sign In
                                        </button>
                                        <div className="sign__new text-center mt-20">
                                            <p>
                                                New to our website? <a href="/register">Sign Up</a>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
