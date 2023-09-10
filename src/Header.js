import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaShoppingCart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { IoBagCheck } from "react-icons/io5";
import { BiSolidMessageDetail } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Header = () => {




    return (
        <div>

            <div>
                {/*Start sidebar-wrapper*/}
                <div id="sidebar-wrapper" data-simplebar data-simplebar-auto-hide="true">
                    <div className="brand-logo">
                        <Link to="/">
                            <img src="assets/images/logo-icon.png" className="logo-icon" alt="logo icon" />
                            <h5 className="logo-text">Dashtreme Admin</h5>
                        </Link>
                    </div>

                    <ul className="sidebar-menu do-nicescrol">
                        <li className="sidebar-header">MAIN NAVIGATION</li>
                        <li>
                            <Link to="/">
                                <i className="zmdi zmdi-view-dashboard" /> <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Order">
                                <i className="zmdi"><IoBagCheck /></i> <span>Order</span>
                            </Link>
                        </li>

                        <li className="sidebar-header">ADMIN</li>
                        <li>
                            <Link to="/Add_Product">
                                <i className="zmdi"><FaCartPlus /></i> <span>Add Product</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Profile">
                                <i className="zmdi zmdi-face" /> <span>Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Login" target="_blank">
                                <i className="zmdi zmdi-lock" /> <span>Login</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Register" target="_blank">
                                <i className="zmdi zmdi-account-circle" /> <span>Registration</span>
                            </Link>
                        </li>

                        <li className="sidebar-header">USER</li>
                        <li>
                            <Link to="/Add_to_Cart">
                                <i className="zmdi"><FaShoppingCart /></i> <span>Add to Cart</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/WishList">
                                <i className="zmdi"><IoMdHeart /></i> <span>WishList</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Contact">
                                <i className="zmdi"><BiSolidMessageDetail /></i> <span>Contact</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Subscribe">
                                <i className="zmdi"><MdEmail /></i> <span>Subscribe</span>
                            </Link>
                        </li>
                        
                        {/**<li className="sidebar-header">LABELS</li>
                        <li><Link href="javaScript:void();"><i className="zmdi zmdi-coffee text-danger" /> <span>Important</span></Link></li>
                        <li><Link href="javaScript:void();"><i className="zmdi zmdi-chart-donut text-success" /> <span>Warning</span></Link></li>
                        <li><Link href="javaScript:void();"><i className="zmdi zmdi-share text-info" /> <span>Information</span></Link></li>**/}
                    </ul>
                </div>
                {/*End sidebar-wrapper*/}
                {/*Start topbar header*/}
                <header className="topbar-nav">
                    <nav className="navbar navbar-expand fixed-top">
                        <ul className="navbar-nav mr-auto align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link toggle-menu" to="javascript:void();">
                                    <i className="icon-menu menu-icon" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                {/**<form className="search-bar">**/}
                                    <div className='search-bar'>
                                        <input type="text" className="form-control" placeholder="Enter keywords" />
                                        <Link to="javascript:void();"><i className="icon-magnifier" /></Link>
                                    </div>
                                {/**</form>**/}
                            </li>
                        </ul>
                        <ul className="navbar-nav align-items-center right-nav-link">
                            <li className="nav-item dropdown-lg">
                                <Link className="nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect" data-toggle="dropdown" to="javascript:void();">
                                    <i className="fa fa-envelope-open-o" /></Link>
                            </li>
                            <li className="nav-item dropdown-lg">
                                <Link className="nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect" data-toggle="dropdown" to="javascript:void();">
                                    <i className="fa fa-bell-o" /></Link>
                            </li>
                            <li className="nav-item language">
                                <Link className="nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect" data-toggle="dropdown" to="javascript:void();"><i className="fa fa-flag" /></Link>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li className="dropdown-item"> <i className="flag-icon flag-icon-gb mr-2" /> English</li>
                                    <li className="dropdown-item"> <i className="flag-icon flag-icon-fr mr-2" /> French</li>
                                    <li className="dropdown-item"> <i className="flag-icon flag-icon-cn mr-2" /> Chinese</li>
                                    <li className="dropdown-item"> <i className="flag-icon flag-icon-de mr-2" /> German</li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown" to="javascript:void();">
                                    <span className="user-profile"><img src="https://via.placeholder.com/110x110" className="img-circle" alt="user avatar" /></span>
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li className="dropdown-item user-details">
                                        <Link to="javaScript:void();">
                                            <div className="media">
                                                <div className="avatar"><img className="align-self-start mr-3" src="https://via.placeholder.com/110x110" alt="user avatar" /></div>
                                                <div className="media-body">
                                                    <h6 className="mt-2 user-title">Sarajhon Mccoy</h6>
                                                    <p className="user-subtitle">mccoy@example.com</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="dropdown-divider" />
                                    <li className="dropdown-item"><i className="icon-envelope mr-2" /> Inbox</li>
                                    <li className="dropdown-divider" />
                                    <li className="dropdown-item"><i className="icon-wallet mr-2" /> Account</li>
                                    <li className="dropdown-divider" />
                                    <li className="dropdown-item"><i className="icon-settings mr-2" /> Setting</li>
                                    <li className="dropdown-divider" />
                                    <li className="dropdown-item"><i className="icon-power mr-2" /> Logout</li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/*End topbar header*/}
            </div>

        </div>
    );
}

export default Header;
