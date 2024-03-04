import React from 'react';

const SizeAdd = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className="card-body cbtop">
                        <h2>Add Size</h2>
                        <a href="/admin/category" className="btn btn-success midbtn">
                            {' '}
                            <i className="fa fa-arrow-left"></i> Back
                        </a>
                    </div>

                    <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="col-md-12">
                                    <label>Category Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-12">
                                    <label>Short Info</label>
                                    <textarea style={{ minHeight: 200 }} className="form-control"></textarea>
                                </div>

                                <div className="col-md-12">
                                    <button className="btn btn-success">Add </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SizeAdd;
