import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FirestoreDatabase } from '../FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const WishList = () => {

  // GetWishList Table
    const [GetWishListUser, setGetWishListUser] = useState([]);

  // (Rule) FireStore Database-User
    const WishListCollection= collection(FirestoreDatabase,"WishList-User");

  // Get User WishList FireStore Database
    useEffect(() => {
        GetWishList();
    }, []);

    const GetWishList = async () =>{
        const getwishlistuser= await getDocs(WishListCollection);

        console.log("GetWishList-User++", getwishlistuser.docs);

        const a= [];

        getwishlistuser.forEach((i)=>{
            a.push({
                WishListId : i.id,
                WishListImage : i.data().wishlistimage,
                WishListName : i.data().wishlistname,
                WishListPrice : i.data().wishlistprice
            })
        });

        setGetWishListUser(a);
    }




    return (
        <div>

            <div className="clearfix" />
            <div className="content-wrapper">
                <div className="container-fluid">
                    {/*Start Dashboard Content*/}

                    <div className="row mt-3">
                        <div className="col-12 col-lg-12">
                            <div className="card">
                                <div className="card-header">Wish List

                                </div>
                                <div className="table-responsive">
                                    <table className="table align-items-center table-flush table-borderless">
                                        <thead>
                                            <tr>
                                                <th>Product ID</th>
                                                <th>Image</th>
                                                <th>Product</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                GetWishListUser.map((i) => {
                                                    return (
                                                        <tr key={i.WishListId}>
                                                            <td>{i.WishListId}</td>
                                                            <td>
                                                                <img src={i.WishListImage} className="product-img" alt="product-img" />
                                                            </td>
                                                            <td>{i.WishListName}</td>
                                                            <td>$ {i.WishListPrice}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
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

export default WishList;
