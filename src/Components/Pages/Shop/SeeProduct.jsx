import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
//Import swiper styles
import { Autoplay } from "swiper/modules"
import ProductDisplay from "./ProductDisplay";
import Review from "./Review";
import PopularPost from "./PopularPost";
import Tags from "./Tags";

const SeeProduct = () => {

    const [ products, setProducts ] = useState([]);
    const { id } = useParams();
    // console.log(id);


    useEffect(() =>{
        fetch('/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const result = products.filter((p) => p.id === id);
    console.log(result);

    return (
        <main>
            <section className="pageheader-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="pageheader-content text-center">
                                <h2 className="">Our Shop Single</h2>
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item"><Link to="/shop">Shop</Link></li>
                                        <li className="breadcrumb-item active " aria-current="page">Single Product</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="shop-single padding-tb aside-bg">
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="product-details">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 col-12">
                                            <div className="product-thumb">
                                                <div className="swiper-containe pro-single-top">
                                                    <Swiper className="mySwiper"
                                                    spaceBetween={30}
                                                    slidesPerView={1}
                                                    loop={true}
                                                    autoplay={{
                                                        delay: 2000,
                                                        disableOnInteraction:false
                                                    }}
                                                    modules={[Autoplay]}
                                                    navigation={{
                                                        prevEl: ".pro-single-prev",
                                                        nextEl: ".pro-single-next"
                                                    }}
                                                    >
                                                        {
                                                            result.map((item, i) =>(
                                                                <SwiperSlide key={1}>
                                                                    <div className="single-thumb">
                                                                        <img src={item.img} alt="product_photo" />
                                                                    </div>
                                                                </SwiperSlide>
                                                            ))
                                                        }
                                                    </Swiper>
                                                    <div className="pro-single-prev">
                                                        <i className="icofont-rounded-left"></i>
                                                    </div>
                                                    <div className="pro-single-next">
                                                        <i className="icofont-rounded-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="post-content">
                                                <div>
                                                    {
                                                        result.map(item => <ProductDisplay key={item.id} item={item}/>)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Review */}
                                <div className="review">
                                    <Review/>
                                </div>
                            </article>
                        </div>

                        {/* Right Side */}
                        <div className="col-lg-4 col-12">
                            <aside className="ps-lg-4">
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

export default SeeProduct;