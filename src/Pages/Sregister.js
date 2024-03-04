import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Apiconnect from '../services/Apiconnect.js';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Container, Image } from 'react-bootstrap';
// import hero_image from "../../public/assets/img/hero/hero.avif";

const Register = () => {
    const navigate = useNavigate();
    const param = useParams();
    const [actn, setActn] = useState('');
    const [infoz, setInfoz] = useState({
        user_name: '',
        user_mname: '',
        user_lname: '',
        thumbnail: '',
        user_email: '',
        user_password: '',
        phone: '',
        business_name: '',
        business_name_slug: '',
        business_address: '',
        business_website: '',
    });

    const {
        user_name,
        user_mname,
        user_lname,
        thumbnail,
        user_email,
        user_password,
        phone,
        business_name,
        business_name_slug,
        business_address,
        business_website,
    } = infoz;

    const urlmaker = (text) => {
        // Replace spaces and special characters with hyphens
        const transformed = text.replace(/[\s\W]+/g, '-');
        return transformed;
    };

    const onInputChange = (e) => {
        setInfoz({ ...infoz, [e.target.name]: e.target.value });
        // if(business_name !=""){
        //     const urlSafe = urlmaker(business_name);
        //     setInfoz({ ...infoz, 'business_name_slug': urlSafe });
        //     console.log(business_name);
        //     console.log(urlSafe);
        // }
        console.log(infoz);
    };

    const handleKeyPress = (event) => {
        // Allow only numeric input
        if (!/^[0-9]$/i.test(event.key)) {
            event.preventDefault();
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        await Apiconnect.postData('users/createseller', infoz).then((response) => {
            console.log(response);
            setInfoz({
                user_name: '',
                user_mname: '',
                user_lname: '',
                thumbnail: '',
                user_email: '',
                phone: '',
                business_name: '',
                business_name_slug: '',
                business_address: '',
                business_website: '',
                user_password: '',
            });
            toast(response.data.message);
            navigate('/srthanks');
        });
    };

    return (
        <>
            {/* <div className="bg-shape">
                <img src="/assets/img/shape/shape-1.png" alt="" />
            </div>

            <section class="signup__area po-rel-z1 pt-100 pb-145">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
                            <div class="page__title-wrapper text-center mb-55">
                                <h2 class="page__title-2">Become a Seller | Register Now!</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                            <div class="sign__wrapper white-bg">
                                <div class="sign__form">
                                    <form onSubmit={(e) => onSubmit(e)}>
                                        <div class="row">
                                            <div class="sign__input-wrapper mb-25 col-md-6">
                                                <h5>First Name</h5>
                                                <div class="sign__input">
                                                    <input
                                                        type="text"
                                                        placeholder="First name"
                                                        name="user_name"
                                                        value={user_name}
                                                        onChange={(e) => onInputChange(e)}
                                                    />
                                                    <i class="fal fa-user"></i>
                                                </div>
                                            </div>

                                            <div class="sign__input-wrapper mb-25 col-md-6">
                                                <h5>Last Name</h5>
                                                <div class="sign__input">
                                                    <input
                                                        type="text"
                                                        placeholder="Last name"
                                                        name="user_lname"
                                                        value={user_lname}
                                                        onChange={(e) => onInputChange(e)}
                                                    />
                                                    <i class="fal fa-user"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="sign__input-wrapper mb-25 col-md-6">
                                                <h5>Phone</h5>
                                                <div class="sign__input">
                                                    <input
                                                        type="text"
                                                        placeholder="Phone"
                                                        maxLength={10}
                                                        onKeyPress={(e) => handleKeyPress(e)}
                                                        name="phone"
                                                        value={phone}
                                                        onChange={(e) => onInputChange(e)}
                                                    />
                                                    <i class="fal fa-phone"></i>
                                                </div>
                                            </div>

                                            <div class="sign__input-wrapper mb-25 col-md-6">
                                                <h5>Business Name</h5>
                                                <div class="sign__input">
                                                    <input
                                                        type="text"
                                                        placeholder="Business name"
                                                        name="business_name"
                                                        onChange={(e) => onInputChange(e)}
                                                        value={business_name}
                                                    />
                                                    <i class="fal fa-building"></i>
                                                </div>
                                            </div>

                                            <div class="sign__input-wrapper mb-25 col-md-12">
                                                <h5>Business Address</h5>
                                                <div class="sign__input">
                                                    <input
                                                        type="text"
                                                        placeholder="Address"
                                                        name="business_address"
                                                        value={business_address}
                                                        onChange={(e) => onInputChange(e)}
                                                    />
                                                    <i class="fal fa-building"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="sign__input-wrapper mb-25">
                                            <h5>Email</h5>
                                            <div class="sign__input">
                                                <input
                                                    type="text"
                                                    placeholder="e-mail address"
                                                    name="user_email"
                                                    value={user_email}
                                                    onChange={(e) => onInputChange(e)}
                                                />
                                                <i class="fal fa-envelope"></i>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="sign__input-wrapper mb-25 col-md-6">
                                                <h5>Password</h5>
                                                <div class="sign__input">
                                                    <input
                                                        type="password"
                                                        placeholder="Password"
                                                        name="user_password"
                                                        value={user_password}
                                                        onChange={(e) => onInputChange(e)}
                                                    />
                                                    <i class="fal fa-lock"></i>
                                                </div>
                                            </div>
                                            <div class="sign__input-wrapper mb-10 col-md-6">
                                                <h5>Re-Password</h5>
                                                <div class="sign__input">
                                                    <input
                                                        type="password"
                                                        placeholder="Re-Password"
                                                        name="user_password2"
                                                    />
                                                    <i class="fal fa-lock"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="sign__action d-flex justify-content-between mb-30">
                                            <div class="sign__agree d-flex align-items-center">
                                                <input class="m-check-input" type="checkbox" id="m-agree" />
                                                <label class="m-check-label" for="m-agree">
                                                    I agree to the <a href="/">Terms & Conditions</a>
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit" class="m-btn m-btn-4 w-100">
                                            {' '}
                                            <span></span> Sign Up
                                        </button>
                                        <div class="sign__new text-center mt-20">
                                            <p>
                                                Already a user ? <a href="/login"> Sign In</a>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ToastContainer /> */}
            <div className='sell bg-black'>
                <Container>
                    <div className='overflow-hidden pt-5'>
                        <div className='mx-auto'>
                            <div className='sell_heading'>
                                <div className='sell_heading-1 mx-auto'>
                                    <h1 className='text-center text-white'>People like you make over $1M per year</h1>
                                    <p className='text-center mt-4 mx-auto text-shark-gray-300 text-lg'>Join the next generation of internet entrepreneurs building their businesses on Whop’s all-in-one platform.‌‍‌‌‌‍‌‌</p>
                                    <div className='mt-8 sell_heading-1--buttons'>
                                        <Link className='bg-orange-button outline-brand rounded-md text-xs py-2 px-3 shadow-orange-button-shadow outline-2 outline-offset-2 rounded-md text-off-white'>Start Selling</Link>
                                        <Link className='bg-video-button text-off-white py-2 px-3 text-xs'>
                                            <svg class="-my-1" xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                <mask id="path-1-outside-1_468_98188" maskUnits="userSpaceOnUse" x="0.5" y="0" width="28" height="28" fill="black">
                                                    <rect fill="white" x="0.5" width="28" height="28"></rect>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 24C20.0228 24 24.5 19.5228 24.5 14C24.5 8.47715 20.0228 4 14.5 4C8.97715 4 4.5 8.47715 4.5 14C4.5 19.5228 8.97715 24 14.5 24ZM12.2236 10.3618C11.8912 10.1956 11.5 10.4373 11.5 10.809V17.191C11.5 17.5627 11.8912 17.8044 12.2236 17.6382L18.6056 14.4472C18.9741 14.263 18.9741 13.737 18.6056 13.5528L12.2236 10.3618Z"></path>
                                                </mask>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 24C20.0228 24 24.5 19.5228 24.5 14C24.5 8.47715 20.0228 4 14.5 4C8.97715 4 4.5 8.47715 4.5 14C4.5 19.5228 8.97715 24 14.5 24ZM12.2236 10.3618C11.8912 10.1956 11.5 10.4373 11.5 10.809V17.191C11.5 17.5627 11.8912 17.8044 12.2236 17.6382L18.6056 14.4472C18.9741 14.263 18.9741 13.737 18.6056 13.5528L12.2236 10.3618Z" fill="#FBFBFC"></path>
                                                <path d="M12.2236 10.3618L14.0125 6.78409L14.0125 6.78409L12.2236 10.3618ZM12.2236 17.6382L10.4348 14.0605H10.4348L12.2236 17.6382ZM18.6056 14.4472L20.3944 18.0249L20.3944 18.0249L18.6056 14.4472ZM18.6056 13.5528L20.3944 9.97508L20.3944 9.97508L18.6056 13.5528ZM20.5 14C20.5 17.3137 17.8137 20 14.5 20V28C22.232 28 28.5 21.732 28.5 14H20.5ZM14.5 8C17.8137 8 20.5 10.6863 20.5 14H28.5C28.5 6.26801 22.232 0 14.5 0V8ZM8.5 14C8.5 10.6863 11.1863 8 14.5 8V0C6.76801 0 0.5 6.26801 0.5 14H8.5ZM14.5 20C11.1863 20 8.5 17.3137 8.5 14H0.5C0.5 21.732 6.76801 28 14.5 28V20ZM15.5 10.809C15.5 13.4109 12.7619 15.1031 10.4348 13.9395L14.0125 6.78409C11.0204 5.28807 7.5 7.4638 7.5 10.809H15.5ZM15.5 17.191V10.809H7.5V17.191H15.5ZM10.4348 14.0605C12.7619 12.8969 15.5 14.5892 15.5 17.191H7.5C7.5 20.5362 11.0204 22.7119 14.0125 21.2159L10.4348 14.0605ZM16.8167 10.8695L10.4348 14.0605L14.0125 21.2159L20.3944 18.0249L16.8167 10.8695ZM16.8167 17.1305C14.2371 15.8407 14.237 12.1594 16.8167 10.8695L20.3944 18.0249C23.7111 16.3666 23.7111 11.6334 20.3944 9.97508L16.8167 17.1305ZM10.4348 13.9395L16.8167 17.1305L20.3944 9.97508L14.0125 6.78409L10.4348 13.9395Z" fill="white" mask="url(#path-1-outside-1_468_98188)" class="shadow"></path>
                                            </svg>
                                            <span>Watch Video</span></Link>
                                    </div>
                                </div>
                                <div className='sell_heading-2'>
                                    <div>
                                        <Image src={'/assets/img/hero/hero.avif'} style={{width: 'auto', height:'auto', maxWidth:'100%'}}></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className='sell_count'>
                        <div className='bg-gradient-prototype'></div>
                        <div className='mx-auto relative'></div>
                    </section>
                </Container>

            </div>
        </>
    );
};

export default Register;
