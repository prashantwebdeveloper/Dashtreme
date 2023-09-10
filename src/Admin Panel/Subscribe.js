import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FirestoreDatabase } from '../FirebaseConfig';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';

const Subscribe = () => {

  // GetContact Table
    const [GetSubscribeUser, setGetSubscribeUser] = useState([]);

  // (Rule) FireStore Database   
  const SubscribeCollection= collection(FirestoreDatabase,"Subscribe-User");

  // Get User Subscribe FireStore Database
    useEffect(() => {
        GetSubscribe();
    }, []);

    const GetSubscribe = async () =>{
        const getcontactuser= await getDocs(SubscribeCollection);

        console.log("GetSubscribe-User++", getcontactuser.docs);

        const a= [];

        getcontactuser.forEach((i)=>{
            a.push({
                SubscribeId : i.id,
                SubscribeEmail : i.data().email
            })
        });

        setGetSubscribeUser(a);
    }

  // Delete User Subscribe FireStore Database
    const DeleteSubscribe = async (id) =>{
        const deletecontactuser= doc(FirestoreDatabase,"Subscribe-User", id);

        await deleteDoc(deletecontactuser);

        // alert("User Subscribe Deleted SuccessFully");

        toast.success("User Subscribe Deleted SuccessFully", {
            position: "top-center",
            autoClose: 4000
        });

        GetSubscribe();
    }




    return (
        <div>

            <div className="clearfix" />
            <div className="content-wrapper">
                <div className="container-fluid">
                    {/*Start Dashboard Content*/}

                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="card">
                                <div className="card-header">Subscribe

                                </div>
                                <div className="table-responsive">
                                    <table className="table align-items-center table-flush table-borderless">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Email</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                GetSubscribeUser.map((i) => {
                                                    return (
                                                        <tr key={i.SubscribeId}>
                                                            <td>{i.SubscribeId}</td>
                                                            <td>{i.SubscribeEmail}</td>
                                                            <td>
                                                                <FaTrashAlt size={19} className='ml cp' onClick={() => DeleteSubscribe(i.SubscribeId)} />
                                                                <ToastContainer />
                                                            </td>
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

export default Subscribe;
