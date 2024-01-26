
import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckOutPage from "../Shop/CheckOut/CheckOutPage";

const Cart = () => {

    const [ cartItems, setCartItems ] = useState([]);

    useEffect(() =>{
        // fetch cart item from local storage
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCartItems);
    },[]);

    //Calculate price
    const calculatedTotalPrice = (item) =>{
        return item.price * item.quantity;
    }

    //quantity increase
    const handleIncrease = (item) =>{
        item.quantity += 1;
        setCartItems([...cartItems]);

        //update localstorage
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }

    //quantity decrease
    const handleDecrease = (item) =>{
        if(item.quantity > 1){
            item.quantity -= 1;
            setCartItems([...cartItems]);

            //update local storage with new cart items
            localStorage.setItem("cart", JSON.stringify(cartItems))
        }
    }

    //Remove from local storage
    const handleRemoveitem = (item) =>{
        const updateCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
        toast.success("Product Removed from the Cart !", {
            position: "top-center"
        });
        //update new cart
        setCartItems(updateCart);
        updateLocalSrtorage(updateCart);
    }

    const updateLocalSrtorage = (cart) =>{
        localStorage.setItem("cart", JSON.stringify(cart))
    }

    //cart subtotal
    const cartSubTtoal = cartItems.reduce((total, item) =>{
        return total + calculatedTotalPrice(item);
    }, 0)

    const orderTotal = cartSubTtoal;

    return (
        <main>
            <ToastContainer />
            <section className="pageheader-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="pageheader-content text-center">
                                <h2>Cart Page</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active " aria-current="page">Cart</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="shop-cart padding-tb">
                <div className="container">
                    <div className="section-wrapper">
                        {/* Cart top starts*/}
                        <div className="cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="cat-product">Product</th>
                                        <th className="cat-price">Price</th>
                                        <th className="cat-quantity">Quantity</th>
                                        <th className="cat-total">Total</th>
                                        <th className="cat-edit">Edit</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        cartItems.map((item, indx) =>(
                                            <tr key={indx}>
                                                <td className="product-item cat-product">
                                                    <div className="p-thumb">
                                                        <Link to="/shop">
                                                            <img src={item.img} alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="p-content">
                                                        <Link to="/shop">
                                                            {item.name}
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td className="cat-price">${item.price}</td>
                                                <td className="cat-quantity">
                                                    <div className="cart-plus-minus">
                                                        <div className="dec qtybutton" onClick={() =>handleDecrease(item)}>-</div>
                                                        <input type="text" className="cart-plus-minus-box" name="qtybuton" value={item.quantity} />
                                                        <div className="inc qtybutton" onClick={() =>handleIncrease(item)}>+</div>
                                                    </div>
                                                </td>
                                                <td className="cat-toprice">
                                                    ${calculatedTotalPrice(item)}
                                                </td>
                                                <td className="cat-edit">
                                                    <a href="#" onClick={() => handleRemoveitem(item)}>
                                                        <FaTrashAlt className="text-danger fw-bolder"/>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>

                            </table>
                        </div>
                        {/* Carts ends */}


                        {/* Cart bottom starts */}
                        <div className="cart-bottom">
                            {/* Check out box start */}
                            <div className="cart-checkout-box">
                                <form className="coupon">
                                    <input type="text" name="coupon" id="coupon" className="cart-page-input-text" placeholder="Enter coupon code here" />
                                    <input type="submit" value="Apply coupon" />
                                </form>
                                <form className="cart-checkout">
                                    <input type="submit" value="Update Cart" />
                                    <div>
                                        <CheckOutPage/>
                                    </div>
                                </form>
                            </div>
                            {/* Check out box start */}

                            {/* Shipping Box start */}
                            <div className="shiping-box">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="calculate-shiping">
                                            <h3>Calculate Shiping</h3>
                                            <div className="outline-select">
                                                <select name="" id="">
                                                    <option value="bd">Bangladesh</option>
                                                    <option value="pak">Paistan</option>
                                                    <option value="ind">India</option>
                                                    <option value="nep">Nepal</option>
                                                    <option value="uk">United State(UK)</option>
                                                    <option value="usa">United State of America(USA)</option>
                                                </select>
                                                <span className="select-icon">
                                                    <i className="icofont-rounded-down"></i>
                                                </span>
                                            </div>

                                            <div className="outline-select shipping-select">
                                                <select name="" id="">
                                                    <option value="uk">New York</option>
                                                    <option value="us">London</option>
                                                    <option value="bd">Dhaka</option>
                                                    <option value="pak">Lahore</option>
                                                    <option value="ind">New Delhi</option>
                                                </select>
                                                <span className="select-icon">
                                                    <i className="icofont-rounded-down"></i>
                                                </span>
                                            </div>

                                            <input type="text" name="postalCode" id="postalCode" placeholder="PostalCOde/ZIP code *" className="cart-page-input-text" />
                                            <button type="submit">Update Address</button>

                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="cart-overview">
                                            <h3>Cart Total</h3>
                                            <ul className="lab-ul">
                                                <li>
                                                    <span className="pull-left">Cart Subtotal</span>
                                                    <p className="pull-right">${cartSubTtoal}</p>
                                                </li>
                                                <li>
                                                    <span className="pull-left">Shipping and Handling</span>
                                                    <p className="pull-right">Free Shipping</p>
                                                </li>
                                                <li>
                                                    <span className="pull-left">Order Total</span>
                                                    <p className="pull-right">${orderTotal.toFixed(2)}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
};

export default Cart;