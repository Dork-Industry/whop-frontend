import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const Blog = () => {
    return (
        <>
            <div className="bg-shape newbgmin" style={{ backgroundImage: 'url(/assets/bgmg.jpg)' }}>
                <img src="/assets/img/shape/shape-1.png" alt="" />
            </div>

            <section class="page__title-area   ">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-12">
                            <div class="page__title-content mb-50">
                                <h2 class="page__title">Latest From The Blog</h2>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item">
                                            <a href="/">Home</a>
                                        </li>
                                        <li class="breadcrumb-item active" aria-current="page">
                                            Blog
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="postbox__area pb-120">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-8 col-xl-8 col-lg-8">
                            <div class="postbox__wrapper">
                                <article class="postbox__item format-image fix mb-50 wow fadeInUp" data-wow-delay=".2s">
                                    <div class="postbox__thumb">
                                        <a href="blog-details.html" class="w-img">
                                            <img src="assets/img/blog/blog-1.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div class="postbox__content">
                                        <div class="postbox__meta d-flex mb-10">
                                            <div class="postbox__tag mr-20">
                                                <a href="#">marketing</a>
                                            </div>
                                            <div class="postbox__date">
                                                <span>
                                                    <i class="fal fa-clock"></i> October 15, 2023
                                                </span>
                                            </div>
                                        </div>
                                        <h3 class="postbox__title mb-15">
                                            <a href="blog-details.html">Why we decide to build this platform?</a>
                                        </h3>
                                        <div class="postbox__text mb-20">
                                            <p>
                                                The little rotter absolutely bladdered wind up victoria sponge starkers
                                                cack posh jolly good lost the plot nancy boy bonnet plastered.
                                            </p>
                                        </div>
                                        <div class="postbox__author d-flex align-items-center">
                                            <div class="postbox__author-thumb mr-15">
                                                <img src="assets/img/blog/author/blog-author-1.jpg" alt="" />
                                            </div>
                                            <h5>
                                                Post by <a href="#">Jatin Das</a>{' '}
                                            </h5>
                                        </div>
                                    </div>
                                </article>

                                <article class="postbox__item format-image fix mb-50 wow fadeInUp" data-wow-delay=".2s">
                                    <div class="postbox__thumb">
                                        <a href="blog-details.html" class="w-img">
                                            <img src="assets/img/blog/blog-1.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div class="postbox__content">
                                        <div class="postbox__meta d-flex mb-10">
                                            <div class="postbox__tag mr-20">
                                                <a href="#">marketing</a>
                                            </div>
                                            <div class="postbox__date">
                                                <span>
                                                    <i class="fal fa-clock"></i> October 15, 2023
                                                </span>
                                            </div>
                                        </div>
                                        <h3 class="postbox__title mb-15">
                                            <a href="blog-details.html">Why we decide to build this platform?</a>
                                        </h3>
                                        <div class="postbox__text mb-20">
                                            <p>
                                                The little rotter absolutely bladdered wind up victoria sponge starkers
                                                cack posh jolly good lost the plot nancy boy bonnet plastered.
                                            </p>
                                        </div>
                                        <div class="postbox__author d-flex align-items-center">
                                            <div class="postbox__author-thumb mr-15">
                                                <img src="assets/img/blog/author/blog-author-1.jpg" alt="" />
                                            </div>
                                            <h5>
                                                Post by <a href="#">Jatin Das</a>{' '}
                                            </h5>
                                        </div>
                                    </div>
                                </article>

                                <article class="postbox__item format-image fix mb-50 wow fadeInUp" data-wow-delay=".2s">
                                    <div class="postbox__thumb">
                                        <a href="blog-details.html" class="w-img">
                                            <img src="assets/img/blog/blog-1.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div class="postbox__content">
                                        <div class="postbox__meta d-flex mb-10">
                                            <div class="postbox__tag mr-20">
                                                <a href="#">marketing</a>
                                            </div>
                                            <div class="postbox__date">
                                                <span>
                                                    <i class="fal fa-clock"></i> October 15, 2023
                                                </span>
                                            </div>
                                        </div>
                                        <h3 class="postbox__title mb-15">
                                            <a href="blog-details.html">Why we decide to build this platform?</a>
                                        </h3>
                                        <div class="postbox__text mb-20">
                                            <p>
                                                The little rotter absolutely bladdered wind up victoria sponge starkers
                                                cack posh jolly good lost the plot nancy boy bonnet plastered.
                                            </p>
                                        </div>
                                        <div class="postbox__author d-flex align-items-center">
                                            <div class="postbox__author-thumb mr-15">
                                                <img src="assets/img/blog/author/blog-author-1.jpg" alt="" />
                                            </div>
                                            <h5>
                                                Post by <a href="#">Jatin Das</a>{' '}
                                            </h5>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div class="mt-200 pt-100 col-xxl-4 col-xl-4 col-lg-4">
                            <div class="blog__sidebar-wrapper  ml-30">
                                <div class="blog__sidebar mb-30">
                                    <div class="sidebar__widget mb-30">
                                        <div class="sidebar__widget-content">
                                            <div class="sidebar__search-wrapper">
                                                <form action="#">
                                                    <input type="text" placeholder="Search ..." />
                                                    <button type="submit">
                                                        <i class="fal fa-search"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sidebar__widget mb-30">
                                        <div class="sidebar__widget-title">
                                            <h3>Recent News</h3>
                                        </div>
                                        <div class="sidebar__widget-content">
                                            <div class="rc__post-wrapper">
                                                <div class="rc__post d-flex align-items-center">
                                                    <div class="rc__thumb mr-15">
                                                        <a href="blog-details.html">
                                                            <img src="assets/img/blog/sm/blog-sm-1.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div class="rc__content">
                                                        <div class="rc__meta">
                                                            <span>October 15, 2021</span>
                                                        </div>
                                                        <h6 class="rc__title">
                                                            <a href="blog-details.html">Communication Between Teams</a>
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div class="rc__post d-flex align-items-center">
                                                    <div class="rc__thumb mr-15">
                                                        <a href="blog-details.html">
                                                            <img src="assets/img/blog/sm/blog-sm-2.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div class="rc__content">
                                                        <div class="rc__meta">
                                                            <span>March 26, 2021</span>
                                                        </div>
                                                        <h6 class="rc__title">
                                                            <a href="blog-details.html">How to build outside links</a>
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div class="rc__post d-flex align-items-center">
                                                    <div class="rc__thumb mr-15">
                                                        <a href="blog-details.html">
                                                            <img src="assets/img/blog/sm/blog-sm-3.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div class="rc__content">
                                                        <div class="rc__meta">
                                                            <span>October 15, 2021</span>
                                                        </div>
                                                        <h6 class="rc__title">
                                                            <a href="blog-details.html">
                                                                20 creative ways to decorate puja pandel
                                                            </a>
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sidebar__widget mb-30">
                                        <div class="sidebar__widget-title">
                                            <h3>Categories</h3>
                                        </div>
                                        <div class="sidebar__widget-content">
                                            <div class="sidebar__catagory">
                                                <ul>
                                                    <li>
                                                        <a href="/blog">Social (6)</a>
                                                    </li>
                                                    <li>
                                                        <a href="/blog"> Creative (14)</a>
                                                    </li>
                                                    <li>
                                                        <a href="/blog">Odia Literature (12)</a>
                                                    </li>
                                                    <li>
                                                        <a href="/blog">Innovative Ideas (10)</a>
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
            </section>
        </>
    );
};

export default Blog;
