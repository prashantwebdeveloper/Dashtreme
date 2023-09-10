import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {


    return (
        <div>

            <div className="loader-wrapper">
                <div className="lds-ring">
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
            <div className="card card-authentication1 mx-auto my-5">
                <div className="card-body">
                    <div className="card-content p-2">
                        <div className="text-center">
                            <img src="assets/images/logo-icon.png" alt="logo icon" />
                        </div>
                        <div className="card-title text-uppercase text-center py-3">Sign In</div>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername" className="sr-only">Username</label>
                                <div className="position-relative has-icon-right">
                                    <input type="text" id="exampleInputUsername" className="form-control input-shadow" placeholder="Enter Username" />
                                    <div className="form-control-position">
                                        <i className="icon-user" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword" className="sr-only">Password</label>
                                <div className="position-relative has-icon-right">
                                    <input type="password" id="exampleInputPassword" className="form-control input-shadow" placeholder="Enter Password" />
                                    <div className="form-control-position">
                                        <i className="icon-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-6">
                                    <div className="icheck-material-white">
                                        <input type="checkbox" id="user-checkbox" defaultChecked />
                                        <label htmlFor="user-checkbox">Remember me</label>
                                    </div>
                                </div>
                                <div className="form-group col-6 text-right">
                                    <Link to="/Reset_Password">Reset Password</Link>
                                </div>
                            </div>
                            <button type="button" className="btn btn-light btn-block">Sign In</button>
                            <div className="text-center mt-3">Sign In With</div>
                            <div className="form-row mt-4">
                                <div className="form-group mb-0 col-6">
                                    <button type="button" className="btn btn-light btn-block"><i className="fa fa-facebook-square" />
                                        Facebook</button>
                                </div>
                                <div className="form-group mb-0 col-6 text-right">
                                    <button type="button" className="btn btn-light btn-block"><i className="fa fa-twitter-square" />
                                        Twitter</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card-footer text-center py-3">
                    <p className="text-warning mb-0">Do not have an account? <Link to="/Register"> Sign Up here</Link></p>
                </div>
            </div>
            {/*Start Back To Top Button*/}
            <Link to="javaScript:void();" className="back-to-top"><i className="fa fa-angle-double-up" /> </Link>
            {/*End Back To Top Button*/}

        </div>
    );
}

export default Login;
