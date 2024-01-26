import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

const ProductsCard = ({GridList, products}) => {

    console.log(products);

    return (
        <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list"}`} >
            {
               products.map((product,i) => (
                    <div key={i} className="col-lg-4 col-md-6 col-12"
                    
                    >

                        <div className="product-item" >

                            <div className="product-thumb">
                                <div className="pro-thumb">
                                    <img src={product.img} alt="" />
                                </div>

                                <div className="product-action-link">
                                    <Link to={`/shop/${product.id}`}> <i className="icofont-eye"></i> </Link>
                                    <a href="#">
                                        <i className="icofont-heart"></i>
                                    </a>
                                    <Link to="/cart"> <i className="icofont-cart-alt"></i> </Link>
                                </div>


                            </div>

                            <div className="product-content">
                                <h5>
                                    <Link to={`/shop/${product.id}`}> {product.name} </Link>
                                </h5>
                                <p className="productRating text-success ">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt />
                                </p>
                                <h6>${product.price}</h6>
                            </div>

                        </div>


                        <div className="product-list-item">

                            <div className="product-thumb">
                                <div className="pro-thumb">
                                    <img src={product.img} alt="" />
                                </div>

                                <div className="product-action-link">
                                    <Link to={`/shop/${product.id}`}> <i className="icofont-eye"></i> </Link>
                                    <a href="#">
                                        <i className="icofont-heart"></i>
                                    </a>
                                    <Link to="/cart"> <i className="icofont-cart-alt"></i> </Link>
                                </div>


                            </div>

                            <div className="product-content">
                                <h5>
                                    <Link to={`/shop/${product.id}`}> {product.name} </Link>
                                </h5>
                                <p className="productRating text-success ">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt />
                                </p>
                                <h6>${product.price}</h6>
                            </div>

                        </div>


                    </div>
               ))
            }
        </div>
    );
};

export default ProductsCard;