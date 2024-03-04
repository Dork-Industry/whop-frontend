import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const About = () => {
    return (
        <>
            <div class="bg-shape newbgmin" style={{ backgroundImage: 'url(/assets/bgmg.jpg)' }}>
                <img src="/assets/img/shape/shape-1.png" alt="" />
            </div>

            <section class="about__area pt-100 ">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1">
                            <div class="about__wrapper mt-80">
                                <h3 class="about__title">
                                    Our
                                    <br /> Terms & conditions.
                                </h3>

                                <div class="about__count pt-50 pb-15 wow fadeInUp" data-wow-delay=".5s"></div>
                                <div class="about__content">
                                    <p class="about__text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt
                                        ultricies dignissim. Phasellus sit amet purus condimentum.
                                    </p>
                                    <p class="about__sub-text">
                                        Suscipit felis non, posuere mauris. Morbi iaculis, arcu quis varius fermentum,
                                        velit lectus dignissim enim, eget vulputate sapien erat eget mauris. Aenean
                                        tortor odio, faucibus a enim sed, porttitor luctus lacus. Interdum et malesuada
                                        fames ac ante ipsum primis in faucibus. Pellentesque metus risus, gravida
                                        consequat elementum non, euismod eget turpis. Proin vulputate ligula nec nibh
                                        finibus pretium et sit amet enim. Vestibulum accumsan arcu erat, nec feugiat
                                        ligula pretium non. Aenean sit amet ultricies diam, vel semper enim. Morbi
                                        aliquet est ut metus feugiat, a suscipit nulla luctus. Nulla consectetur
                                        consectetur tincidunt.
                                        <br />
                                        <br />
                                        Sed varius vel lacus a placerat. Praesent congue finibus arcu, nec elementum
                                        odio rhoncus in. Mauris finibus nibh sit amet pulvinar malesuada. Suspendisse
                                        semper enim urna, id aliquam justo viverra nec. Nunc ac lorem vitae nulla dictum
                                        tempus. Cras faucibus mi erat, non semper ipsum condimentum ut. In sapien odio,
                                        finibus sit amet metus eget, pharetra condimentum turpis. Nullam quis ultrices
                                        elit, vel porta nunc. Aliquam erat volutpat. Donec fermentum posuere arcu non
                                        aliquet. Nam vulputate urna et rutrum volutpat. Curabitur ut imperdiet mi, in
                                        congue erat. Sed et risus ipsum. Vestibulum quis enim ac metus pellentesque
                                        ultricies. Duis a euismod lorem. Duis luctus leo pretium, imperdiet erat et,
                                        pulvinar purus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
