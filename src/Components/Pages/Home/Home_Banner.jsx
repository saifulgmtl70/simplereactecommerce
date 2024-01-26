import { useState } from "react";
import productData from '../../../products.json'
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import SelectedCategory from "./SelectedCategory";

const  title = (
    <h2>Searh Your One From <span>Thousand</span> of Products</h2>
)

const des = "We have the largest collection of products";

const bannerList = [
    {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
    },
    {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
    },
    {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
    },
    ];


const Home_Banner = () => {

    const [ searchInput, setSearchInput ] = useState("");
    const  [ filteredProducts, setFilteredProducts ] = useState(productData);
// console.log(productData);

    const handleSearch = e =>{
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);

        //filtering products based on search
        const filtered = productData.filter((product) => product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));

        setFilteredProducts(filtered);
    }
    return (
        <div className="banner-section style-4">
            <div className="container">
                <div className="banner-content "  
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    {title}
                    <form >
                        <SelectedCategory select={"all"} />
                        <input type="text" name="search" id="search" placeholder="Search you product" value={searchInput}
                        onChange={handleSearch}/>
                        <button type="submit">
                            <FaSearch className="icofont-search" />
                        </button>
                    </form>
                    <p> {des} </p>
                    <ul className="lab-ul" >
                        {
                            searchInput && filteredProducts.map((product, i) => 
                                <li key={i}> 
                                    <Link to={`/shop/${product.id}`}> {product.name} </Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home_Banner;