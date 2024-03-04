import React, { useState, useEffect } from 'react';

import Apiconnect from '../services/Apiconnect.js';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Category = () => {
    useEffect(() => {
        getCatList();
    }, []);
    const [List, setCatList] = useState([]);

    const getCatList = () => {
        Apiconnect.getData('cat/getAll').then((response) => {
            let _xtract = Apiconnect.decrypt_obj(response.data.data);
            setCatList(_xtract.reverse());
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
        Apiconnect.getData(`cat/delete/${id}`).then((response) => {
            getCatList();
            toast(response.data.message);
        });
    };

    return (
        <>
            <div className="card-body cbtop">
                <h2>List Of Category</h2>
                <a href="/admin/category/add" className="btn btn-success midbtn">
                    {' '}
                    <i className="fa fa-plus"></i> Add Category
                </a>
            </div>
            <div className="card-body">
                <table className="table   table-hover">
                    <thead>
                        <tr className="tbl_head">
                            <th># </th>
                            <th>Name</th>
                            <th>URL (Slug)</th>
                            <th>Title(Meta)</th>
                            <th>Taxable</th>
                            <th>Tax %</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {List.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{key + 1}</td>
                                    <td>{val.name}</td>
                                    <td>{val.url}</td>
                                    <td>{val.meta_title}</td>
                                    <td>
                                        <i className="fa fa-cog"></i> {val.is_tax}
                                    </td>

                                    <td>
                                        {' '}
                                        <span className="btn btn-warning btn-sm">{val.tax}</span>
                                    </td>
                                    <td>
                                        <Link to={`/admin/category/edit/${val.id}`} className="btn btn-primary mybtn">
                                            <i className="fa fa-pencil" aria-hidden="true"></i>
                                        </Link>

                                        <button
                                            className="btn btn-danger mybtn"
                                            onClick={() => {
                                                ondlt(val.id);
                                            }}
                                        >
                                            <i className="fa fa-times"></i>{' '}
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </>
    );
};

export default Category;
