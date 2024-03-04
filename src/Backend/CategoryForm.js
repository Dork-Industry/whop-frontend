import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Apiconnect from '../services/Apiconnect.js';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Category = () => {
    const navigate = useNavigate();
    const param = useParams();

    const [actn, setActn] = useState('');
    const [infoz, setInfoz] = useState({ name: '', url: '', info: '', id: null });
    const { name, url, info, id } = infoz;

    useEffect(() => {
        if (param.id > 0) {
            setActn('Update');
            getinfo(param.id);
        } else {
            setActn('Add');
        }
    }, []);

    const getinfo = (id) => {
        Apiconnect.getData(`cat/get/${id}`).then((response) => {
            setInfoz(response.data.data);
        });
    };

    const onInputChange = (e) => {
        setInfoz({ ...infoz, [e.target.name]: e.target.value });
        //console.log(infoz);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (param.id > 0) {
            ///console.log('in edit function' +param.id);

            Apiconnect.postData(`cat/update/${param.id}`, infoz).then((response) => {
                toast(response.data.message);
                navigate('/admin/category');
            });
        } else {
            await Apiconnect.postData('cat/create', infoz).then((response) => {
                setInfoz({ name: '', info: '', url: '' });
                toast(response.data.message);
                navigate('/admin/category');
            });
        }
    };

    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className="card-body cbtop">
                        <h2>{actn} Category</h2>
                        <a href="/admin/category" className="btn btn-success midbtn">
                            {' '}
                            <i className="fa fa-arrow-left"></i> Back
                        </a>
                    </div>

                    <div className="card-body">
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="row">
                                <div className="col-md-12">
                                    <label>Category Name*</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={name}
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                </div>

                                <div className="col-md-12">
                                    <label>Url (Slug)*</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="url"
                                        value={url}
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                </div>

                                <div className="col-md-12">
                                    <label>Short Info</label>
                                    <textarea
                                        style={{ minHeight: 200 }}
                                        onChange={(e) => onInputChange(e)}
                                        name="info"
                                        value={info}
                                        className="form-control"
                                    ></textarea>
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

export default Category;
