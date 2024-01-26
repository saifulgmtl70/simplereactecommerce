import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {  toast } from 'react-toastify';
import './modal.css';
import { useLocation, useNavigate } from "react-router-dom";

const CheckOutPage = () => {

    const [ show, setShow ] = useState(false);
    const [ activeTab, setActiveTab ] = useState("visa");


    //  Handle Tab Change
    const  handleTabChange = (tabId) =>{
        setActiveTab(tabId)
    };

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const navigate = useNavigate();


    const handleOrderConfirm = () =>{
        localStorage.removeItem("cart");
        toast.success("Order Placed Succesfully", {
            position: "top-center",
            autoClose: 1000, // এক সেকেন্ডের মধ্যে বন্ধ হবে
            // onClose: () => navigate(from, { replace: true }) // টোস্ট বন্ধ হওয়ার পরে নেভিগেট করুন
        });
        
        
    }


    return (
        <div className="modalCard">
            <Button variant="primary" className="py-2" onClick={handleShow}>Proceed To CheckOut</Button>

            <Modal
            show={show}
            onHide={handleClose}
            animation={false}
            className="modal fade"
            centered
            >
                <div className="modal-dialog">
                    <h3 className="px-3 mb-3">Select Your Payment Method</h3>
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="tabs mt-3">
                                <ul className=" list-unstyled nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <a href="#visa" 
                                        id="visa-tab"
                                        data-toggle="tab"
                                        role="tab"
                                        aria-controls="visa"
                                        aria-selected={activeTab === 'visa'}
                                        onClick={() => handleTabChange('visa')}
                                        className={` nav-link ${activeTab === "visa" ? "active":""}`}>
                                            <img src="https://i.imgur.com/sB4jftM.png" alt="" width="80"/>
                                        </a>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <a href="#paypal" 
                                        id="paypal-tab"
                                        data-toggle="tab"
                                        role="tab"
                                        aria-controls="paypal"
                                        aria-selected={activeTab === 'paypal'}
                                        onClick={() => handleTabChange('paypal')}
                                        className={`fs-4 text-danger fw-bolder nav-link ${activeTab === "paypal" ? "active":""}`}>
                                             <img src="https://i.imgur.com/yK7EDD1.png" alt="" width="80" />
                                        </a>
                                    </li>

                                </ul>

                                {/* Contents */}
                                <div className="tab-content" id="myTabContent">

                                    {/* Visa Content */}
                                    <div className={`tab-pane fade ${activeTab === "visa" ? "show active":""}`}
                                    id="visa"
                                    role="tabpanel"
                                    aria-labelledby="visa-tab"
                                    >
                                        {/* Visa Content */}
                                        <div className="mt-4 mx-4">
                                            <div className="text-center">
                                                <h5>Credit Card</h5>
                                            </div>

                                            <div className="form mt-3">
                                                <div className="inputbox">
                                                    <input type="text" name="name" id="name" className="form-control" required />
                                                    <span>Cardholder Name</span>
                                                </div>
                                                <div className="inputbox">
                                                    <input type="number" name="number" id="number" min="1" max="999" className="form-control" required />
                                                    <span>Card Number</span>
                                                    <i className="fa fa-eye"></i>
                                                </div>
                                                <div className="d-flex flex-row">
                                                    <div className="inputbox">
                                                        <input type="text" name="name" id="name" className="form-control" required />
                                                        <span>Expiry Date</span>
                                                    </div>
                                                    <div className="inputbox">
                                                        <input type="text" name="name" id="name" className="form-control" required />
                                                        <span>CVV</span>
                                                    </div>
                                                </div>
                                                <div className="px-5 pay">
                                                    <button onClick={handleOrderConfirm} className="btn btn-success btn-block">Order Now</button>
                                                </div>
                                            </div>


                                        </div>
                                        
                                    </div>

                                    {/* Paypal Content */}
                                    <div className={`tab-pane fade ${activeTab === "paypal" ? "show active":""}`}
                                    id="paypal"
                                    role="tabpanel"
                                    aria-labelledby="paypal-tab"
                                    >

                                        <div className="mt-4 mx-4">
                                            <div className="text-center">
                                                <h5>PayPal Account Info</h5>
                                            </div>

                                            <div className="form mt-3">
                                                <div className="inputbox">
                                                    <input type="email" name="name" id="name" className="form-control" required />
                                                    <span>Enter Your Email</span>
                                                </div>
                                                <div className="inputbox">
                                                    <input type="text" name="number" id="number" min="1" max="999" className="form-control" required />
                                                    <span>Your Name</span>
                                                   
                                                </div>

                                                <div className="d-flex flex-row">
                                                    <div className="inputbox">
                                                        <input type="text" name="number" id="number" min="1" max="999" className="form-control" required />
                                                        <span>Extra Info</span>
                                                    </div>
                                                    <div className="inputbox">
                                                        <input type="text" name="number" id="number" min="1" max="999" className="form-control" required />
                                                        <span></span>
                                                    </div>
                                                </div>
                                                
                                                 
                                                <div className="px-5 pay">
                                                    <button onClick={handleOrderConfirm}  className="btn btn-success btn-block">Add Paypal</button>
                                                </div>
                                            </div>


                                        </div>
                                       
                                       
                                    </div>
                                    

                                </div>


                                {/* Payment Disclaimer */}
                                <p className="mt-3 px-4 p-Disclaimer"><em>Payment Disclaimer</em>: In no event shall payment or partial payment by Owner for any material or service</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CheckOutPage;