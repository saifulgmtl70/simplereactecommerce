import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaInfo } from "react-icons/fa";
import { AuthContext } from "../../Provider/Authprovider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegUserCircle } from "react-icons/fa";


const Header = () => {

    const [ menuToggle, setMenuToggle ] = useState(false);
    const [ socialToggle, setSocialToggle ] = useState(false);
    const [ headerFixed, setHeaderFixed ] = useState(false);

    
    const { user, logOut } = useContext(AuthContext);


    // Add Event Listener
    window.addEventListener("scroll", () => {
        if(window.scrollY > 200 ){
            setHeaderFixed(true);
        }
        else{
            setHeaderFixed(false);
        }
    });


    const handleMenuItemClick = () => {
        setMenuToggle(false);
    };


    const handleLogout = () =>{
        logOut()
        .then(() =>{
            toast.success("Logged Out Successfully", {
                position: "top-center",
                autoClose: 1000, // এক সেকেন্ডের মধ্যে বন্ধ হবে
                 // টোস্ট বন্ধ হওয়ার পরে নেভিগেট করুন
            });
        })

        
    }


    return (
        <header className={`header-section style-4 ${headerFixed ? "header-fixed fadInUp" : "" }`}>
             <ToastContainer />
            {/* Header Top */}
            <div className={`header-top d-none ${socialToggle ? "open" : "" }`}>
                <div className="container">
                    <div className="header-top-area">
                        <Link to="/signup" className="lab-btn text-white me-3">Create Account</Link>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>

            {/* Header Bottom */}
            <div className="header-bottom">
                <div className="container">
                    <div className="header-wrapper">
                        {/* Logo */}
                        <div className="logo-search-acte">
                            <div className="logo">
                                <Link to="/">
                                    <img src="https://i.ibb.co/KbD8M8G/logo.png" alt="" />
                                </Link>
                            </div>
                        </div>

                        {/* Menu Area */}
                        <div className="menu-area">
                            <div className="menu">
                                <ul className={`lab-ul ${menuToggle ? "active" :""}`}>
                                    <li> <Link to="/"  onClick={handleMenuItemClick}>Home</Link> </li>
                                    <li> <Link to="/shop"  onClick={handleMenuItemClick}>Shop</Link> </li>
                                    <li> <Link to="/blog"  onClick={handleMenuItemClick}>Blog</Link> </li>
                                    <li> <Link to="/about"  onClick={handleMenuItemClick}>About</Link> </li>
                                    <li> <Link to="/contact"  onClick={handleMenuItemClick}>Contact</Link> </li>
                                </ul>

                            </div>

                            {/* Sign Up & Login */}
                            {
                                user ?
                             
                                <div className="btn-group ">
                                    <button  className="d-flex bg-transparent" data-bs-toggle="dropdown" aria-expanded="false">
                                        <p className="   my-2 "> <span className="text-warning fw-bold ">{user.email}</span> <FaRegUserCircle className=" fs-2 " /></p>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a></li>
                                        <li><a className="dropdown-item" href="/cart">Shopping Cart</a></li>
                                        
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Profile Settings</a></li>
                                    </ul>
                                </div>
                                :
                                <div className="d-flex align-items-center ">
                                    <Link to="/signup" className="lab-btn me-3 d-none d-md-block text-white  ">Create Account</Link>
                                    <Link to="/login" className="d-none d-md-block ">Log In</Link>
                                </div>
                            }


                            {/* Menu Toggler */}
                            <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active": ""}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            {
                                user ?
                                <div>

                                </div>
                                :
                                <div onClick={() =>  setSocialToggle(!socialToggle)} className="ellepsis-bar d-md-none user-select-auto">
                                    <FaInfo/>
                                </div>
                            }

                        </div>

                    </div>
                </div>
            </div>
            
        </header>
    );
};

export default Header;