import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FirestoreDatabase } from '../FirebaseConfig';
import { collection, getDocs} from 'firebase/firestore';

const Add_to_Cart = () => {

  // GetAddtoCart Table
    const [GetAddtoCartUser, setGetAddtoCartUser] = useState([]);

  // (Rule) FireStore Database-User
    const AddtoCartCollection= collection(FirestoreDatabase,"AddtoCart-User"); 

  // Get User AddtoCart FireStore Database
    useEffect(() => {
        GetAddtoCart();
    }, []);

    const GetAddtoCart = async () =>{
        const getaddtocartuser= await getDocs(AddtoCartCollection);

        console.log("GetAddtoCart-User++", getaddtocartuser.docs);

        const a= [];

        getaddtocartuser.forEach((i)=>{
            a.push({
                AddtoCartId : i.id,
                AddtoCartImage : i.data().addtocartimage,
                AddtoCartName : i.data().addtocartname,
                AddtoCartPrice : i.data().addtocartprice,
                AddtoCartQuantity : i.data().addtocartquantity
            })
        });

        setGetAddtoCartUser(a);
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
                                <div className="card-header">Add to Cart
                                    
                                </div>
                                <div className="table-responsive">
                                    <table className="table align-items-center table-flush table-borderless">
                                        <thead>
                                            <tr>
                                                <th>Product ID</th>
                                                <th>Image</th>
                                                <th>Product</th>
                                                <th>Quantity</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { 
                                                GetAddtoCartUser.map((i)=>{
                                                    return (
                                                        <tr key={i.AddtoCartId}>
                                                            <td>{i.AddtoCartId}</td>
                                                            <td>
                                                                <img src={i.AddtoCartImage} className="product-img" alt="product-img" />
                                                            </td>
                                                            <td>{i.AddtoCartName}</td>
                                                            <td>{i.AddtoCartQuantity}</td>
                                                            <td>$ {i.AddtoCartPrice}</td>
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

export default Add_to_Cart;
