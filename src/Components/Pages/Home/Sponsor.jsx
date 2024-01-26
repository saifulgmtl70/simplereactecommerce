
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';

const sponsorList = [
    {
    imgUrl: "https://i.ibb.co/BnZLfgd/01.png",
    },
    {
    imgUrl: "https://i.ibb.co/hgnXP5g/02.png",
    },
    {
    imgUrl: "https://i.ibb.co/Y27MrMW/03.png",
    },
    {
    imgUrl: "https://i.ibb.co/swL0z5P/04.png",
    },
    {
    imgUrl: "https://i.ibb.co/7r8C8tw/05.png",
    },
    {
    imgUrl: "https://i.ibb.co/wgtTgr0/06.png",
    },
];

const Sponsor = () => {
    return (
        <section className="sponsor-section section-bg">
            <div className="container">
                <div className="section-wrapper">
                    <div className="sponsor-slider">
                        <Swiper

                            slidesPerView={2}
                            spaceBetween={20}
                            autoplay={
                                {
                                    delay: 2000,
                                    disableOnInteraction: false
                                }
                            }
                            breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >

                            {
                                sponsorList.map((val, i) =>(
                                    <SwiperSlide key={i} >
                                        <div className="sponsor-item">
                                            <div className="sponsor-thumb">
                                                <img src={val.imgUrl} alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
            
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsor;