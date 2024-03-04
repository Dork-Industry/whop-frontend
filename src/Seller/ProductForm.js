import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Apiconnect from '../services/Apiconnect.js';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Axios from 'axios';

const Seller = () => {
    const user_id = localStorage.getItem('user_id');
    const navigate = useNavigate();
    const param = useParams();
    const [actn, setActn] = useState('');
    const [infoz, setInfoz] = useState({
        prod_code: '',
        cat_id: '',
        seller_id: '',
        name: '',
        prod_tagline: '',
        prod_info: '',
        thumbnail: '',
        meta_title: '',
        meta_keyword: '',
        meta_description: '',
    });

    const {
        prod_code,
        cat_id,
        seller_id,
        name,
        prod_tagline,
        prod_info,
        thumbnail,
        meta_title,
        meta_keyword,
        meta_description,
    } = infoz;
    const [catList, setCat] = useState([]);

    //////////////////////IMAGE////////////////

    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        // Assuming only one file is selected
        const selectedImage = e.target.files[0];

        if (selectedImage) {
            // Display the selected image (optional)
            const reader = new FileReader();
            reader.onloadend = () => {
                // Set the image in the state
                setImage(reader.result);
            };
            reader.readAsDataURL(selectedImage);

            // Call API using Axios
            const formData = new FormData();
            formData.append('image', selectedImage);
            console.log(formData);

            Axios.post('https://whopapi.huepixel.com//upload/prodz', formData)
                .then((response) => {
                    // Handle the API response as needed
                    var vv = response.data;
                    setInfoz({ ...infoz, thumbnail: vv.imageUrl });
                    console.log(response.data);
                    console.log(infoz);
                })
                .catch((error) => {
                    // Handle errors
                    console.error('Error uploading image:', error);
                });
        }
    };

    //////////////////////IMAGE////////////////

    useEffect(() => {
        if (param.id > 0) {
            setActn('Update');
            getcat();
            getinfo(param.id);
        } else {
            setActn('Add');
            getcat();
        }

        setInfoz({ ...infoz, seller_id: user_id });
    }, []);

    const getinfo = (id) => {
        Apiconnect.getData(`product/get/${id}`).then((response) => {
            var tt = Apiconnect.decrypt_obj(response.data.data);
            console.log(tt);
            setInfoz(tt);
        });
    };

    const getcat = (id) => {
        Apiconnect.getData(`cat/getAll`).then((response) => {
            let _xtract = Apiconnect.decrypt_obj(response.data.data);
            //console.log(_xtract);
            setCat(_xtract);
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

            Apiconnect.postData(`product/update/${param.id}`, infoz).then((response) => {
                toast(response.data.message);
                navigate('/seller/product');
            });
        } else {
            await Apiconnect.postData('product/create', infoz).then((response) => {
                console.log(response);
                setInfoz({
                    prod_code: '',
                    cat_id: '',
                    seller_id: '',
                    name: '',
                    prod_tagline: '',
                    prod_info: '',
                    thumbnail: '',
                    meta_title: '',
                    meta_keyword: '',
                    meta_description: '',
                });
                toast(response.data.message);
                navigate('/seller/product');
            });
        }
    };

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="card-body cbtop">
                        <h2>{actn} Product</h2>
                        <a href="/seller/product" className="btn btn-success midbtn">
                            {' '}
                            <i className="fa fa-arrow-left"></i> Back
                        </a>
                    </div>

                    <div className="card-body">
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="row">
                                <div className="col-md-3">
                                    <label>Category*</label>
                                    <select
                                        className="form-control"
                                        required
                                        name="cat_id"
                                        value={cat_id}
                                        onChange={(e) => onInputChange(e)}
                                    >
                                        <option value="">Select</option>
                                        {catList.map((val, key) => {
                                            return (
                                                <option key={key} value={val.id}>
                                                    {val.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>

                                <div className="col-md-3">
                                    <label>Product Name*</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={name}
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                </div>
                                <div className="col-md-3">
                                    <label>Product Code*</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="prod_code"
                                        value={prod_code}
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                </div>

                                <div className="col-md-3">
                                    <label>TagLine*</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="prod_tagline"
                                        value={prod_tagline}
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <label>Product Info*</label>
                                    <textarea
                                        style={{ height: 280 }}
                                        className="form-control"
                                        name="prod_info"
                                        value={prod_info}
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <label>Thumbnail*</label>
                                    <br />
                                    {/* <input type="file" name="thumb_img" required /> */}

                                    <input type="file" accept="image/*" onChange={handleImageChange} />
                                    <div className="col-md-4" style={{ marginTop: 30, overflow: 'hidden' }}>
                                        {image && (
                                            <img
                                                src={image}
                                                crossorigin="anonymous"
                                                style={{ maxWidth: '100%', maxHeight: '200px' }}
                                            />
                                        )}
                                        {thumbnail && (
                                            <img
                                                crossorigin="anonymous"
                                                src={thumbnail}
                                                style={{ maxWidth: '100%', maxHeight: '200px' }}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
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

export default Seller;
