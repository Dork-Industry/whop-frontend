import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const P404 = () => {
    return (
        <>
            <div class="bg-shape newbgmin" style={{ backgroundImage: 'url(/assets/bgmg.jpg)' }}>
                <img src="/assets/img/shape/shape-1.png" alt="" />
            </div>

            <section class="about__area pt-100 ">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1">
                            <div class="about__wrapper  ">
                                <h1> Congrats! </h1>
                                <p>Your transaction is complete. Our Support team will be in touch with you soon. </p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />

                                <div class="about__content"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default P404;
