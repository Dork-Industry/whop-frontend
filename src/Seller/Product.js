import React, { useState, useEffect } from 'react';
import Apiconnect from '../services/Apiconnect.js';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Seller = () => {
    useEffect(() => {
        getInfoList();
    }, []);
    const [List, setList] = useState([]);

    const getInfoList = () => {
        Apiconnect.getData('product/getAllSeller').then((response) => {
            let _xtract = Apiconnect.decrypt_obj(response.data.data);
            setList(_xtract.reverse());
        });
    };

    const ondlt = (id) => {
        confirmAlert({
            title: 'Are you sure to Delete?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => deleteItem(id),
                },
                {
                    label: 'No',
                },
            ],
        });
    };

    const deleteItem = (id) => {
        console.log(id);
        Apiconnect.getData(`product/delete/${id}`).then((response) => {
            getInfoList();
            toast(response.data.message);
        });
    };

    return (
        <>
            <div className="card-body cbtop">
                <h2>Product List</h2>
                <Link to="/seller/product/add" className="btn btn-success midbtn">
                    <i className="fa fa-plus"></i> Add
                </Link>
            </div>
            <div className="card-body">
                <table className="table table-hover">
                    <thead>
                        <tr className="tbl_head">
                            <th>#</th>
                            <th>Product Code</th>
                            <th>Product Name</th>
                            <th>Tagline</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {List.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{key + 1}</td>
                                    <td>{val.prod_code}</td>
                                    <td>{val.name}</td>
                                    <td>{val.prod_tagline}</td>
                                    <td>
                                        <Link to={`/seller/product/edit/${val.id}`} className="btn btn-primary mybtn">
                                            <i className="fa fa-pencil" aria-hidden="true"></i>
                                        </Link>
                                        <button
                                            className="btn btn-danger mybtn"
                                            onClick={() => {
                                                ondlt(val.id);
                                            }}
                                        >
                                            <i className="fa fa-times"></i>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Seller;
