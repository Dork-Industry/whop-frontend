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
        Apiconnect.getData('users/sellerlist').then((response) => {
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
        Apiconnect.getData(`users/deleteseller/${id}`).then((response) => {
            getInfoList();
            toast(response.data.message);
        });
    };

    return (
        <>
            <div className="card-body cbtop">
                <h2>Seller List</h2>
                <Link to="/admin/seller/add" className="btn btn-success midbtn">
                    <i className="fa fa-plus"></i> Add Seller
                </Link>
            </div>
            <div className="card-body">
                <table className="table table-hover">
                    <thead>
                        <tr className="tbl_head">
                            <th>#</th>
                            <th>Firstname</th>
                            <th>MiddleName</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>business_website</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {List.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{key + 1}</td>
                                    <td>{val.user_name}</td>
                                    <td>{val.user_mname}</td>
                                    <td>{val.user_lname}</td>
                                    <td>{val.user_email}</td>
                                    <td>{val.Phone}</td>
                                    <td>{val.business_address}</td>
                                    <td>{val.business_website}</td>
                                    <td>
                                        <Link to={`/admin/seller/edit/${val.id}`} className="btn btn-primary mybtn">
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
