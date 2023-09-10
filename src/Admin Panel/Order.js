import React from 'react';
import { Link } from 'react-router-dom';

const Order = () => {




    return (
        <div>

            <div className="clearfix" />
            <div className="content-wrapper">
                <div className="container-fluid">
                    {/*Start Dashboard Content*/}
                    <div className="row mt-3">
                        <div className="col-12 col-lg-12">
                            <div className="card">
                                <div className="card-header">User Order
                                    <div className="card-action">
                                        <div className="dropdown">
                                            <Link to="javascript:void();" className="dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown">
                                                <i className="icon-options" />
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="javascript:void();">Action</Link>
                                                <Link className="dropdown-item" to="javascript:void();">Another action</Link>
                                                <Link className="dropdown-item" to="javascript:void();">Something else here</Link>
                                                <div className="dropdown-divider" />
                                                <Link className="dropdown-item" to="javascript:void();">Separated link</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table align-items-center table-flush table-borderless">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Photo</th>
                                                <th>Product ID</th>
                                                <th>Amount</th>
                                                <th>Date</th>
                                                <th>Shipping</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Iphone 5</td>
                                                <td><img src="https://via.placeholder.com/110x110" className="product-img" alt="product img" /></td>
                                                <td>#9405822</td>
                                                <td>$ 1250.00</td>
                                                <td>03 Aug 2017</td>
                                                <td>
                                                    <div className="progress shadow" style={{ height: 3 }}>
                                                        <div className="progress-bar" role="progressbar" style={{ width: '90%' }} />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Earphone GL</td>
                                                <td><img src="https://via.placeholder.com/110x110" className="product-img" alt="product img" /></td>
                                                <td>#9405820</td>
                                                <td>$ 1500.00</td>
                                                <td>03 Aug 2017</td>
                                                <td>
                                                    <div className="progress shadow" style={{ height: 3 }}>
                                                        <div className="progress-bar" role="progressbar" style={{ width: '60%' }} />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>HD Hand Camera</td>
                                                <td><img src="https://via.placeholder.com/110x110" className="product-img" alt="product img" /></td>
                                                <td>#9405830</td>
                                                <td>$ 1400.00</td>
                                                <td>03 Aug 2017</td>
                                                <td>
                                                    <div className="progress shadow" style={{ height: 3 }}>
                                                        <div className="progress-bar" role="progressbar" style={{ width: '70%' }} />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Clasic Shoes</td>
                                                <td><img src="https://via.placeholder.com/110x110" className="product-img" alt="product img" /></td>
                                                <td>#9405825</td>
                                                <td>$ 1200.00</td>
                                                <td>03 Aug 2017</td>
                                                <td>
                                                    <div className="progress shadow" style={{ height: 3 }}>
                                                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }} />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Hand Watch</td>
                                                <td><img src="https://via.placeholder.com/110x110" className="product-img" alt="product img" /></td>
                                                <td>#9405840</td>
                                                <td>$ 1800.00</td>
                                                <td>03 Aug 2017</td>
                                                <td>
                                                    <div className="progress shadow" style={{ height: 3 }}>
                                                        <div className="progress-bar" role="progressbar" style={{ width: '40%' }} />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Clasic Shoes</td>
                                                <td><img src="https://via.placeholder.com/110x110" className="product-img" alt="product img" /></td>
                                                <td>#9405825</td>
                                                <td>$ 1200.00</td>
                                                <td>03 Aug 2017</td>
                                                <td>
                                                    <div className="progress shadow" style={{ height: 3 }}>
                                                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }} />
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>{/*End Row*/}
                    {/*End Dashboard Content*/}
                    {/*start overlay*/}
                    <div className="overlay toggle-menu" />
                    {/*end overlay*/}
                </div>
                {/* End container-fluid*/}
            </div>{/*End content-wrapper*/}
            {/*Start Back To Top Button*/}
            <Link to="javaScript:void();" className="back-to-top"><i className="fa fa-angle-double-up" /> </Link>
            {/*End Back To Top Button*/}
            {/*Start footer*/}
            <footer className="footer">
                <div className="container">
                    <div className="text-center">
                        Copyright © 2018 Dashtreme Admin
                    </div>
                </div>
            </footer>
            {/*End footer*/}

        </div>
    );
}

export default Order;