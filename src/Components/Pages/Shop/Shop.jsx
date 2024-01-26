import { useState } from "react";
import Shop_banner from "./Shop_banner";

const showingResults = "Showing 01 - 12 of  139 Results";
import Data from '../../../products.json';
import ProductsCard from "./ProductsCard";
import Pagination from "./Pagination";
import Search from "./Search";
import ShopCategory from "./ShopCategory";
import PopularPost from "./PopularPost";
import Tags from "./Tags";


const Shop = () => {

    const [ GridList, setGridList ] = useState();
    const [ products, setProducts ] = useState(Data);
    // console.log(products);

    const [ currentPage, setCurrentPage ] = useState(1);
    const productsPerPage = 12;


    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber);
    };

    const [ selectedCategory, setSelectedCategory ] = useState("All");
    const menuItems = [... new Set(Data.map((Val) => Val.category))];

    const filterItem = (currcat) =>{
        const newItem = Data.filter((newVal) =>{
            return newVal.category === currcat;
        });

        setSelectedCategory(currcat);
        setProducts(newItem)
    }


    return (
        <main>
            <Shop_banner/>
            <section className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="shop-title d-flex flex-wrap justify-content-between ">
                                    <p>{showingResults}</p>
                                    <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"} `}>
                                        <a className="grid" onClick={() =>setGridList(!GridList)}>
                                            <i className="icofont-ghost"></i>
                                        </a>
                                        <a className="list" onClick={() =>setGridList(!GridList)}>
                                            <i className="icofont-listine-dots"></i>
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <ProductsCard GridList={GridList} products={currentProducts}/>
                                </div>

                                <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} activerPage={currentPage} />

                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Search products={products} GridList={GridList} />
                                <ShopCategory
                                filterItem={filterItem}
                                setItem={setProducts}
                                menuItems={menuItems}
                                setProducts={setProducts}
                                selectedCategory={selectedCategory}
                                />
                                <PopularPost/>
                                <Tags/>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Shop;