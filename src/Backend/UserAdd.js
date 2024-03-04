import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Apiconnect from '../services/Apiconnect.js';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Useradd = () => {
    const navigate = useNavigate();
    const param = useParams();

    const [actn, setActn] = useState('');
    const [infoz, setInfoz] = useState({
        user_name: '',
        user_mname: '',
        user_lname: '',
        thumbnail: 'na.jpg',
        user_password: '',
        business_name: '',
        business_name_slug: '',
        business_address: 'rrrr',
        business_website: 'rrrr',
        user_email: '',
        phone: '',
        id: null,
    });
    const {
        user_name,
        user_mname,
        user_lname,
        thumbnail,
        user_password,
        business_name,
        business_name_slug,
        business_address,
        business_website,
        user_email,
        phone,
        id,
    } = infoz;

    useEffect(() => {
        if (param.id > 0) {
            setActn('Update');
            getinfo(param.id);
        } else {
            setActn('Add');
        }
    }, []);

    const getinfo = (id) => {
        Apiconnect.getData(`users/getuser/${id}`).then((response) => {
            setInfoz(response.data.data);
        });
    };

    const onInputChange = (e) => {
        setInfoz({ ...infoz, [e.target.name]: e.target.value });
        console.log(infoz);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (param.id > 0) {
            ///console.log('in edit function' +param.id);

            Apiconnect.postData(`users/updateuser/${param.id}`, infoz).then((response) => {
                toast(response.data.message);
                navigate('/admin/User');
            });
        } else {
            await Apiconnect.postData('users/createuser', infoz).then((response) => {
                setInfoz({ user_name: '', user_mname: '', user_lname: '', user_email: '', phone: '' });
                toast(response.data.message);
                navigate('/admin/User');
            });
        }
    };

    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className="card-body cbtop">
                        <h2>{actn} User</h2>
                        <a href="/admin/User" className="btn btn-success midbtn">
                            {' '}
                            <i className="fa fa-arrow-left"></i> Back
                        </a>
                    </div>

                    <div className="card-body">
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="row">
                                <div className="col-md-12">
                                    <label>First Name*</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="user_name"
                                        value={user_name}
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                </div>

                                <div className="col-md-12">
                                    <label>Middle Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="user_mname"
                                        value={user_mname}
                                        onChange={(e) => onInputChange(e)}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label>Last Name*</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="user_lname"
                                        value={user_lname}
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label>Business Name*</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="business_name"
                                        value={business_name}
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label>Business unique url slug*</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="business_name_slug"
                                        value={business_name_slug}
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                </div>

                                <div className="col-md-12">
                                    <label>Email*</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="user_email"
                                        value={user_email}
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                </div>

                                <div className="col-md-12">
                                    <label>Password*</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="user_password"
                                        value={user_password}
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                </div>

                                <div className="col-md-12">
                                    <label>Phone No*</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="phone"
                                        value={phone}
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                </div>

                                <div className="col-md-12">
                                    <button type="submit" className="btn btn-success">
                                        {actn}{' '}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    );
};

export default Useradd;
