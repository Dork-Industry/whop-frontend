import React, { useState, useEffect } from 'react';
import Apiconnect from '../services/Apiconnect.js';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    useEffect(() => {
        getInfoList();
    }, []);
    const [List, setList] = useState([]);

    const getInfoList = () => {
        Apiconnect.getData('order/getAlluser').then((response) => {
            let _xtract = Apiconnect.decrypt_obj(response.data.data);
            setList(_xtract.reverse());
        });
    };

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="main-card mb-3 card">
                        <div className="card-header">Recent Purchases</div>
                        <div className="table-responsive">
                            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th className="text-center">#</th>
                                        <th>Name</th>
                                        <th className="text-center">Price</th>
                                        <th className="text-center">Seller</th>
                                        <th className="text-center">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {List.map((val, key) => {
                                        return (
                                            <tr key={key}>
                                                <td className="text-center text-muted">#{key + 1}</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">{val.name}</div>
                                                                <div className="widget-subheading opacity-7">
                                                                    Web Developer
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">${val.sell_price}</td>
                                                <td className="text-center">
                                                    <div className="badge badge-primary">--NA--</div>
                                                </td>
                                                <td className="text-center">
                                                    <button
                                                        type="button"
                                                        id="PopoverCustomT-1"
                                                        className="btn btn-warning btn-sm"
                                                    >
                                                        Pending
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-midnight-bloom">
                        <div className="widget-content-wrapper text-white">
                            <div className="widget-content-left">
                                <div className="widget-heading">Total Orders</div>
                                <div className="widget-subheading">Last year expenses</div>
                            </div>
                            <div className="widget-content-right">
                                <div className="widget-numbers text-white">
                                    <span>{List.length}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
