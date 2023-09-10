import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaTrashAlt } from "react-icons/fa";
import { BiSolidEdit } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { FirestoreDatabase } from '../FirebaseConfig';
import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore';

const Add_Product = () => {

  // AddProduct From input
    const [ProductImage, setProductImage] = useState("");
    const [ProductName, setProductName] = useState("");
    const [ProductPrice, setProductPrice] = useState("");

  // GetProduct Table
    const [GetProductAdmin, setGetProductAdmin] = useState([]);

    
  // (Rule) FireStore Database
    const ProductCollection= collection(FirestoreDatabase,"AddProduct-Admin");

  // Add Admin AddProduct FireStore Database
    const AddProduct = async () =>{
        if(ProductImage && ProductName && ProductPrice){
            const admin= await addDoc(ProductCollection, {
                productimage : ProductImage,
                productname : ProductName,
                productprice : ProductPrice
            });

            console.log("AddProduct-Admin++", admin);

            // alert("Product Added SuccessFully");

            toast.success("Product Added SuccessFully", {
                position: "top-center",
                autoClose: 4000
            });

            GetProduct();

            setProductImage("");
            setProductName("");
            setProductPrice("");
        }
        else{
            // alert("Please enter the Product Value");

            toast.error("Please enter the Product Value", {
                position: "top-center",
                autoClose: 4000
            });
        }
    }

  // Get Admin AddProduct FireStore Database
    useEffect(() => {
        GetProduct();
    }, []);

    const GetProduct = async () =>{
        const getadmin= await getDocs(ProductCollection);
        
        console.log("GetProduct-Admin++", getadmin.docs);

        const a= [];

        getadmin.forEach((i)=>{
            a.push({
                ProductId : i.id,
                ProductImage : i.data().productimage,
                ProductName : i.data().productname,
                ProductPrice : i.data().productprice
            })
        });

        setGetProductAdmin(a);
    } 

  // Update Admin AddProduct FireStore Database
    const UpdateProduct = async () =>{

    }

  // Delete Admin AddProduct FireStore Database
    const DeleteProduct = async (id) =>{
        const deleteadmin= doc(FirestoreDatabase,"AddProduct-Admin", id);

        await deleteDoc(deleteadmin);

        alert("Product Deleted SuccessFully");

        toast.success("Product Deleted SuccessFully", {
            position: "top-center",
            autoClose: 4000
        });

        GetProduct();
    }




    return (
        <div>

            <div className="clearfix" />
            <div className="content-wrapper">
                <div className="container-fluid">
                    <div className="row mt-3">

                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">Add Product</div>
                                    <hr />
                                    <div className="form-group">
                                        <label htmlFor="input-7">Product Image</label>
                                        <input type="text" className="form-control form-control-rounded" id="input-7" placeholder="Enter Product Image" value={ProductImage} onChange={(e)=> setProductImage(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="input-6">Product Name</label>
                                        <input type="text" className="form-control form-control-rounded" id="input-6" placeholder="Enter Product Name" value={ProductName} onChange={(e)=> setProductName(e.target.value)} />
                                    </div>
                                    <div className="form-group pb-4">
                                        <label htmlFor="input-10">Product Price</label>
                                        <input type="number" className="form-control form-control-rounded" id="input-10" placeholder="Enter Product Price" value={ProductPrice} onChange={(e)=> setProductPrice(parseInt(e.target.value))} />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-light btn-round px-5" onClick={AddProduct}><FaCartPlus className='mr-1 mb' />Add Product</button>
                                        <ToastContainer />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>{/*End Row*/}

                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="card">
                                <div className="card-header">View Product
                                    
                                </div>
                                <div className="table-responsive">
                                    <table className="table align-items-center table-flush table-borderless">
                                        <thead>
                                            <tr>
                                                <th>Product ID</th>
                                                <th>Image</th>
                                                <th>Product</th>
                                                <th>Amount</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                GetProductAdmin.map((i)=>{
                                                    return (
                                                        <tr key={i.ProductId}>
                                                            <td>{i.ProductId}</td>
                                                            <td>
                                                                <img src={i.ProductImage} className="product-img" alt="product-img" />
                                                            </td>
                                                            <td>{i.ProductName}</td>
                                                            <td>$ {i.ProductPrice}</td>
                                                            <td>
                                                                <BiSolidEdit size={25} className='cp' />

                                                                <FaTrashAlt size={19} className='ml cp' onClick={()=> DeleteProduct(i.ProductId)} />
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

export default Add_Product;
