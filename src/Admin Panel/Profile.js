import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {


    return (
        <div>

            <div className="clearfix" />
            <div className="content-wrapper">
                <div className="container-fluid">
                    <div className="row mt-3">
                        <div className="col-lg-4">
                            <div className="card profile-card-2">
                                <div className="card-img-block">
                                    <img className="img-fluid" src="https://via.placeholder.com/800x500" alt="Card image cap" />
                                </div>
                                <div className="card-body pt-5">
                                    <img src="https://via.placeholder.com/110x110" alt="profile-image" className="profile" />
                                    <h5 className="card-title">Mark Stern</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                        card's content.</p>
                                    <div className="icon-block">
                                        <Link to="javascript:void();"><i className="fa fa-facebook bg-facebook text-white" /></Link>
                                        <Link to="javascript:void();"> <i className="fa fa-twitter bg-twitter text-white" /></Link>
                                        <Link to="javascript:void();"> <i className="fa fa-google-plus bg-google-plus text-white" /></Link>
                                    </div>
                                </div>
                                <div className="card-body border-top border-light">
                                    <div className="media align-items-center">
                                        <div>
                                            <img src="assets/images/timeline/html5.svg" className="skill-img" alt="skill img" />
                                        </div>
                                        <div className="media-body text-left ml-3">
                                            <div className="progress-wrapper">
                                                <p>HTML5 <span className="float-right">65%</span></p>
                                                <div className="progress" style={{ height: 5 }}>
                                                    <div className="progress-bar" style={{ width: '65%' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="media align-items-center">
                                        <div><img src="assets/images/timeline/bootstrap-4.svg" className="skill-img" alt="skill img" /></div>
                                        <div className="media-body text-left ml-3">
                                            <div className="progress-wrapper">
                                                <p>Bootstrap 4 <span className="float-right">50%</span></p>
                                                <div className="progress" style={{ height: 5 }}>
                                                    <div className="progress-bar" style={{ width: '50%' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="media align-items-center">
                                        <div><img src="assets/images/timeline/angular-icon.svg" className="skill-img" alt="skill img" /></div>
                                        <div className="media-body text-left ml-3">
                                            <div className="progress-wrapper">
                                                <p>AngularJS <span className="float-right">70%</span></p>
                                                <div className="progress" style={{ height: 5 }}>
                                                    <div className="progress-bar" style={{ width: '70%' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="media align-items-center">
                                        <div><img src="assets/images/timeline/react.svg" className="skill-img" alt="skill img" /></div>
                                        <div className="media-body text-left ml-3">
                                            <div className="progress-wrapper">
                                                <p>React JS <span className="float-right">35%</span></p>
                                                <div className="progress" style={{ height: 5 }}>
                                                    <div className="progress-bar" style={{ width: '35%' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <ul className="nav nav-tabs nav-tabs-primary top-icon nav-justified">
                                        <li className="nav-item">
                                            <Link to="javascript:void();" data-target="#profile" data-toggle="pill" className="nav-link active"><i className="icon-user" /> <span className="hidden-xs">Profile</span></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="javascript:void();" data-target="#messages" data-toggle="pill" className="nav-link"><i className="icon-envelope-open" /> <span className="hidden-xs">Messages</span></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="javascript:void();" data-target="#edit" data-toggle="pill" className="nav-link"><i className="icon-note" /> <span className="hidden-xs">Edit</span></Link>
                                        </li>
                                    </ul>
                                    <div className="tab-content p-3">
                                        <div className="tab-pane active" id="profile">
                                            <h5 className="mb-3">User Profile</h5>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <h6>About</h6>
                                                    <p>
                                                        Web Designer, UI/UX Engineer
                                                    </p>
                                                    <h6>Hobbies</h6>
                                                    <p>
                                                        Indie music, skiing and hiking. I love the great outdoors.
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <h6>Recent badges</h6>
                                                    <Link to="javascript:void();" className="badge badge-dark badge-pill">html5</Link>
                                                    <Link to="javascript:void();" className="badge badge-dark badge-pill">react</Link>
                                                    <Link to="javascript:void();" className="badge badge-dark badge-pill">codeply</Link>
                                                    <Link to="javascript:void();" className="badge badge-dark badge-pill">angularjs</Link>
                                                    <Link to="javascript:void();" className="badge badge-dark badge-pill">css3</Link>
                                                    <Link to="javascript:void();" className="badge badge-dark badge-pill">jquery</Link>
                                                    <Link to="javascript:void();" className="badge badge-dark badge-pill">bootstrap</Link>
                                                    <Link to="javascript:void();" className="badge badge-dark badge-pill">responsive-design</Link>
                                                    <hr />
                                                    <span className="badge badge-primary"><i className="fa fa-user" /> 900 Followers</span>
                                                    <span className="badge badge-success"><i className="fa fa-cog" /> 43 Forks</span>
                                                    <span className="badge badge-danger"><i className="fa fa-eye" /> 245 Views</span>
                                                </div>
                                                <div className="col-md-12">
                                                    <h5 className="mt-2 mb-3"><span className="fa fa-clock-o ion-clock float-right" /> Recent Activity
                                                    </h5>
                                                    <div className="table-responsive">
                                                        <table className="table table-hover table-striped">
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <strong>Abby</strong> joined ACME Project Team in <strong>`Collaboration`</strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <strong>Gary</strong> deleted My Board1 in <strong>`Discussions`</strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <strong>Kensington</strong> deleted MyBoard3 in <strong>`Discussions`</strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <strong>John</strong> deleted My Board1 in <strong>`Discussions`</strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <strong>Skell</strong> deleted his post Look at Why this is.. in
                                                                        <strong>`Discussions`</strong>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*/row*/}
                                        </div>
                                        <div className="tab-pane" id="messages">
                                            <div className="alert alert-info alert-dismissible" role="alert">
                                                <button type="button" className="close" data-dismiss="alert">×</button>
                                                <div className="alert-icon">
                                                    <i className="icon-info" />
                                                </div>
                                                <div className="alert-message">
                                                    <span><strong>Info!</strong> Lorem Ipsum is simply dummy text.</span>
                                                </div>
                                            </div>
                                            <div className="table-responsive">
                                                <table className="table table-hover table-striped">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <span className="float-right font-weight-bold">3 hrs ago</span> Here is your Link link to the
                                                                latest summary report from the..
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span className="float-right font-weight-bold">Yesterday</span> There has been Link request on
                                                                your account since that was..
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span className="float-right font-weight-bold">9/10</span> Porttitor vitae ultrices quis,
                                                                dapibus id dolor. Morbi venenatis lacinia rhoncus.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span className="float-right font-weight-bold">9/4</span> Vestibulum tincidunt ullamcorper
                                                                eros eget luctus.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span className="float-right font-weight-bold">9/4</span> Maxamillion ais the fix for tibulum
                                                                tincidunt ullamcorper eros.
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="edit">
                                            <form>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label">First name</label>
                                                    <div className="col-lg-9">
                                                        <input className="form-control" type="text" defaultValue="Mark" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label">Last name</label>
                                                    <div className="col-lg-9">
                                                        <input className="form-control" type="text" defaultValue="Jhonsan" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label">Email</label>
                                                    <div className="col-lg-9">
                                                        <input className="form-control" type="email" defaultValue="mark@example.com" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label">Change profile</label>
                                                    <div className="col-lg-9">
                                                        <input className="form-control" type="file" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label">Website</label>
                                                    <div className="col-lg-9">
                                                        <input className="form-control" type="url" defaultValue />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label">Address</label>
                                                    <div className="col-lg-9">
                                                        <input className="form-control" type="text" defaultValue placeholder="Street" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label" />
                                                    <div className="col-lg-6">
                                                        <input className="form-control" type="text" defaultValue placeholder="City" />
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <input className="form-control" type="text" defaultValue placeholder="State" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label">Username</label>
                                                    <div className="col-lg-9">
                                                        <input className="form-control" type="text" defaultValue="jhonsanmark" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label">Password</label>
                                                    <div className="col-lg-9">
                                                        <input className="form-control" type="password" defaultValue={11111122333} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label">Confirm password</label>
                                                    <div className="col-lg-9">
                                                        <input className="form-control" type="password" defaultValue={11111122333} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label" />
                                                    <div className="col-lg-9">
                                                        <input type="reset" className="btn btn-secondary" defaultValue="Cancel" />
                                                        <input type="button" className="btn btn-primary" defaultValue="Save Changes" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default Profile;
