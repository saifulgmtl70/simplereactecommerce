import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDisplay = ({item}) => {

    const { name, id, price, desc, seller, ratingsCount, quantity, img } = item;

    const  [ prequantity, setQuantity ] = useState(quantity);
    const [ coupon, setCoupon ] = useState("")
    const [ size, setSizse ] = useState("Select Size")
    const [ color, setColor ] = useState("Select Color");

    const handleChangeSize = (e) =>{
        setSizse(e.target.value);
    }

    const handleChangeColor = (e) =>{
        setColor(e.target.value);
    }

    const handleDecrease = () =>{
        if(prequantity > 1){
            setQuantity(prequantity - 1);
        }
    }

    const handleIncrease = () =>{

        setQuantity(prequantity + 1);

    }


    const handleSubmit = (event) =>{
        event.preventDefault();

        const product = {
            id: id,
            img: img,
            name: name,
            price: price,
            quantity: prequantity,
            size: size,
            color: color,
            coupon: coupon
        }

        console.log(product);

        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingProductIndex = existingCart.findIndex((item) => item.id === id);

        if(existingProductIndex != -1){
            existingCart[existingProductIndex].quantity += prequantity;
            toast.error("This Product is already added to the cart !", {
                position: "top-center"
            });
        }
        else{
            existingCart.push(product);
            toast.success("Product Added to Cart !", {
                position: "top-center"
            });
        }


        //Update Local Storage

        localStorage.setItem("cart", JSON.stringify(existingCart));
        //reset from table
        setQuantity(1);
        setSizse("Select Size");
        setColor("Color");
        setCoupon("");
    }

 
    return (
        <div>
            <ToastContainer />
            <div>
                <h4>{name}</h4>
                <p className="rating">
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <span>({ratingsCount} review)</span>
                </p>
                <h4>${price}</h4>
                <h6>{seller}</h6>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa aliquam, distinctio doloremque sequi ipsam amet perferendis.</p>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    
                    {/* Size */}
                    <div className="select-product size">
                        <select value={size} onChange={handleChangeSize}>
                            <option>Select Size</option>
                            <option >Sm</option>
                            <option >MD</option>
                            <option >LG</option>
                            <option >Xl</option>
                            <option >XXL</option>
                        </select>
                        <i className="icofont-rounded-down"></i>
                    </div>

                    {/* Color */}
                    <div className="select-product color">
                        <select value={size} onChange={handleChangeColor}>
                            <option>Select Color</option>
                            <option >Pink</option>
                            <option >Ash</option>
                            <option >Red</option>
                            <option >White</option>
                            <option >Blue</option>
                            <option >Black</option>
                        </select>
                        <i className="icofont-rounded-down"></i>
                    </div>

                    {/* Cart Plus Minus */}
                    <div className="cart-plus-minus">
                        <div className="dec qtybutton" onClick={handleDecrease}>-</div>
                        <input className="cart-plus-minus-box" type="text" name="qtybutton" id="qtybutton" value={prequantity} onChange={(e) =>setQuantity(parseInt(e.target.value, 10))}/>
                        <div className="inc qtybutton" onClick={handleIncrease}>+</div>
                    </div>

                    {/* Couon Code */}
                    <div className="discount-code">
                        <input type="text" placeholder="Enter Discount Code" onChange={(e) => setCoupon(e.target.value)} />
                    </div>

                    {/* Buttin Section */}
                    <button type="submit" className="lab-btn">
                        <span>Add to Cart</span>
                    </button>
                    <Link to="/cart" className="lab-btn bg-primary" >
                        <span>Check out</span>
                    </Link>

                </form>
            </div>

        </div>
    );
};

export default ProductDisplay;