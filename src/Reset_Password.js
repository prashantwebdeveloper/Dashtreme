import React from 'react';
import { Link } from 'react-router-dom';

const Reset_Password = () => {


    return (
        <div>

            <div className="height-100v d-flex align-items-center justify-content-center">
                <div className="card card-authentication1 mb-0">
                    <div className="card-body">
                        <div className="card-content p-2">
                            <div className="card-title text-uppercase pb-2">Reset Password</div>
                            <p className="pb-2">Please enter your email address. You will receive a link to create a new password via email.
                            </p>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmailAddress" className>Email Address</label>
                                    <div className="position-relative has-icon-right">
                                        <input type="text" id="exampleInputEmailAddress" className="form-control input-shadow" placeholder="Email Address" />
                                        <div className="form-control-position">
                                            <i className="icon-envelope-open" />
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-light btn-block mt-3">Reset Password</button>
                            </form>
                        </div>
                    </div>
                    <div className="card-footer text-center py-3">
                        <p className="text-warning mb-0">Return to the <Link to="/Login"> Sign In</Link></p>
                    </div>
                </div>
            </div>
            {/*Start Back To Top Button*/}
            <Link to="javaScript:void();" className="back-to-top"><i className="fa fa-angle-double-up" /> </Link>
            {/*End Back To Top Button*/}

        </div>
    );
}

export default Reset_Password;
