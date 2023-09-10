import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FirestoreDatabase } from '../FirebaseConfig';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';

const Contact = () => {

  // GetContact Table
    const [GetContactUser, setGetContactUser] = useState([]);

  // (Rule) FireStore Database   
    const ContactCollection= collection(FirestoreDatabase,"Contact-User");

  // Get User Message FireStore Database
    useEffect(() => {
        GetContact();
    }, []);

    const GetContact = async () =>{
        const getcontactuser= await getDocs(ContactCollection);

        console.log("GetContact-User++", getcontactuser.docs);

        const a= [];

        getcontactuser.forEach((i)=>{
            a.push({
                ContactId : i.id,
                ContactName : i.data().name,
                ContactEmail : i.data().email,
                ContactPhone : i.data().phone,
                ContactSubject : i.data().subject,
                ContactMessage : i.data().message
            })
        });

        setGetContactUser(a);
    }

  // Delete User Message FireStore Database
    const DeleteContact = async (id) =>{
        const deletecontactuser= doc(FirestoreDatabase,"Contact-User", id);

        await deleteDoc(deletecontactuser);

        // alert("User Message Deleted SuccessFully");

        toast.success("User Message Deleted SuccessFully", {
            position: "top-center",
            autoClose: 4000
        });

        GetContact();
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
                                <div className="card-header">Contact 
                                    
                                </div>
                                <div className="table-responsive">
                                    <table className="table align-items-center table-flush table-borderless">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Subject</th>
                                                <th>Message</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                GetContactUser.map((i)=>{
                                                    return (
                                                        <tr key={i.ContactId}>
                                                            <td>{i.ContactId}</td>
                                                            <td>{i.ContactName}</td>
                                                            <td>{i.ContactEmail}</td>
                                                            <td>{i.ContactPhone}</td>
                                                            <td>{i.ContactSubject}</td>
                                                            <td>{i.ContactMessage}</td>
                                                            <td>
                                                                <FaTrashAlt size={19} className='ml cp' onClick={()=> DeleteContact(i.ContactId)} />
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

export default Contact;
