import React from 'react';
import { FaArrowTrendUp } from 'react-icons/fa6';

const ExploreItem = ({ valz }) => {
    return (
        <div className="col-xxl-3 col-xl-3 col-md-6 col-sm-6 hover:shadow-lg md:p-8">
            <div className="category__item transition-3 text-center white-bg mb-30 wow fadeInUp" data-wow-delay=".3s">
                <div className="category__content">
                    <div className="category__icon">
                        <FaArrowTrendUp />
                    </div>
                    <h3 className="category__title">
                        <a href="/">{valz.name}</a>
                    </h3>
                    {/* <a href={'/category/' + valz.url} className="link-btn">
                        <i className="far fa-long-arrow-right"></i>
                        View Listing
                    </a> */}
                    <div className="categeory_description text-whop-dark-gray  text-whop-dark-gray hidden text-center md:block">
                        Learn how to make money reselling various items online.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreItem;
