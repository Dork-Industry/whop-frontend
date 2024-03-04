import React from 'react';

const Dashboard = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                        <div className="widget-content">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left pr-2 fsize-1">
                                        <div className="widget-numbers mt-0 fsize-3 text-danger">71%</div>
                                    </div>
                                    <div className="widget-content-right w-100">
                                        <div className="progress-bar-xs progress">
                                            <div
                                                className="progress-bar bg-danger"
                                                role="progressbar"
                                                aria-valuenow="71"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                style={{ width: '71%' }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-content-left fsize-1">
                                    <div className="text-muted opacity-6">Income Target</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card-shadow-success mb-3 widget-chart widget-chart2 text-left card">
                        <div className="widget-content">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left pr-2 fsize-1">
                                        <div className="widget-numbers mt-0 fsize-3 text-success">54%</div>
                                    </div>
                                    <div className="widget-content-right w-100">
                                        <div className="progress-bar-xs progress">
                                            <div
                                                className="progress-bar bg-success"
                                                role="progressbar"
                                                aria-valuenow="54"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                style={{ width: '54%' }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-content-left fsize-1">
                                    <div className="text-muted opacity-6">Expenses Target</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card-shadow-warning mb-3 widget-chart widget-chart2 text-left card">
                        <div className="widget-content">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left pr-2 fsize-1">
                                        <div className="widget-numbers mt-0 fsize-3 text-warning">32%</div>
                                    </div>
                                    <div className="widget-content-right w-100">
                                        <div className="progress-bar-xs progress">
                                            <div
                                                className="progress-bar bg-warning"
                                                role="progressbar"
                                                aria-valuenow="32"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                style={{ width: '32%' }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-content-left fsize-1">
                                    <div className="text-muted opacity-6">Spendings Target</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card-shadow-info mb-3 widget-chart widget-chart2 text-left card">
                        <div className="widget-content">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left pr-2 fsize-1">
                                        <div className="widget-numbers mt-0 fsize-3 text-info">89%</div>
                                    </div>
                                    <div className="widget-content-right w-100">
                                        <div className="progress-bar-xs progress">
                                            <div
                                                className="progress-bar bg-info"
                                                role="progressbar"
                                                aria-valuenow="89"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                style={{ width: '89%' }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-content-left fsize-1">
                                    <div className="text-muted opacity-6">Totals Target</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row" style={{ display: 'none' }}>
                <div className="col-md-12">
                    <div className="main-card mb-3 card">
                        <div className="card-header">Active Users</div>
                        <div className="table-responsive">
                            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th className="text-center">#</th>
                                        <th>Name</th>
                                        <th className="text-center">City</th>
                                        <th className="text-center">Status</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center text-muted">#345</td>
                                        <td>
                                            <div className="widget-content p-0">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left mr-3">
                                                        <div className="widget-content-left">
                                                            <img
                                                                width="40"
                                                                className="rounded-circle"
                                                                src="assets/images/avatars/4.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="widget-content-left flex2">
                                                        <div className="widget-heading">John Doe</div>
                                                        <div className="widget-subheading opacity-7">Web Developer</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">Madrid</td>
                                        <td className="text-center">
                                            <div className="badge badge-warning">Pending</div>
                                        </td>
                                        <td className="text-center">
                                            <button
                                                type="button"
                                                id="PopoverCustomT-1"
                                                className="btn btn-primary btn-sm"
                                            >
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center text-muted">#347</td>
                                        <td>
                                            <div className="widget-content p-0">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left mr-3">
                                                        <div className="widget-content-left">
                                                            <img
                                                                width="40"
                                                                className="rounded-circle"
                                                                src="assets/images/avatars/3.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="widget-content-left flex2">
                                                        <div className="widget-heading">Ruben Tillman</div>
                                                        <div className="widget-subheading opacity-7">
                                                            Etiam sit amet orci eget
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">Berlin</td>
                                        <td className="text-center">
                                            <div className="badge badge-success">Completed</div>
                                        </td>
                                        <td className="text-center">
                                            <button
                                                type="button"
                                                id="PopoverCustomT-2"
                                                className="btn btn-primary btn-sm"
                                            >
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center text-muted">#321</td>
                                        <td>
                                            <div className="widget-content p-0">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left mr-3">
                                                        <div className="widget-content-left">
                                                            <img
                                                                width="40"
                                                                className="rounded-circle"
                                                                src="assets/images/avatars/2.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="widget-content-left flex2">
                                                        <div className="widget-heading">Elliot Huber</div>
                                                        <div className="widget-subheading opacity-7">
                                                            Lorem ipsum dolor sic
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">London</td>
                                        <td className="text-center">
                                            <div className="badge badge-danger">In Progress</div>
                                        </td>
                                        <td className="text-center">
                                            <button
                                                type="button"
                                                id="PopoverCustomT-3"
                                                className="btn btn-primary btn-sm"
                                            >
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center text-muted">#55</td>
                                        <td>
                                            <div className="widget-content p-0">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left mr-3">
                                                        <div className="widget-content-left">
                                                            <img
                                                                width="40"
                                                                className="rounded-circle"
                                                                src="assets/images/avatars/1.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="widget-content-left flex2">
                                                        <div className="widget-heading">Vinnie Wagstaff</div>
                                                        <div className="widget-subheading opacity-7">UI Designer</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">Amsterdam</td>
                                        <td className="text-center">
                                            <div className="badge badge-info">On Hold</div>
                                        </td>
                                        <td className="text-center">
                                            <button
                                                type="button"
                                                id="PopoverCustomT-4"
                                                className="btn btn-primary btn-sm"
                                            >
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
