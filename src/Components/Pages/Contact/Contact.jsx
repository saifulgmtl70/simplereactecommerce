import { useEffect } from "react";
import Contact_banner from "./Contact_banner";
import GoogleMap from "./GoogleMap";

import AOS from 'aos';
import 'aos/dist/aos.css';

const subTitle = "Get in touch with us";
const title = "We're Always Eager To Hear From You!";
const conSubTitle = "Get in touch with Contact us";
const conTitle =
"Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send our Message";

const contactList = [
    {
    imgUrl: "https://i.ibb.co/z51HWLX/01.png",
    imgAlt: "contact icon",
    title: "Office Address",
    desc: "1201 park street, Fifth Avenue",
    },
    {
    imgUrl: "https://i.ibb.co/qYFQtL7/02.png",
    imgAlt: "contact icon",
    title: "Phone number",
    desc: "+22698 745 632,02 982 745",
    },
    {
    imgUrl: "https://i.ibb.co/7kH5G1X/03.png",
    imgAlt: "contact icon",
    title: "Send email",
    desc: "admin@shopcart.com",
    },
    {
    imgUrl: "https://i.ibb.co/P547fs7/04.png",
    imgAlt: "contact icon",
    title: "Our website",
    desc: "www.shopcart.com",
    },
];


const Contact = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <main>
            <Contact_banner/>

            <section className="map-address-section padding-tb section-bg">
                <div className="container">
                    <div className="section-header text-center"
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    >
                        <span className="subtitle">{subTitle}</span>
                        <h2 className="title">{title}</h2>
                    </div>

                    <div className="section-wrapper">
                        <div className="row flex-row-reverse">

                            <div className="col-lg-4 col-md-5 col-12"
                            data-aos="zoom-in"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            >
                                <div className="contact-wrapper">
                                    {
                                        contactList.map((val, i) =>(
                                            <div key={i} className="contact-item">
                                                <div className="contact-thumb">
                                                    <img src={val.imgUrl} alt={val.imgAlt} />
                                                </div>
                                                <div className="contact-content">
                                                    <h6 className="title">{val.title}</h6>
                                                    <p>{val.desc}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            {/* Google map */}
                            <div className="col-lg-8 col-md-7 col-12"
                            data-aos="zoom-in"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            >
                                <GoogleMap/>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <section className="contact-section padding-tb">
                <div className="container">
                    <div className="section-header text-center"
                     data-aos="zoom-in"
                     data-aos-delay="50"
                     data-aos-duration="1000"
                     data-aos-easing="ease-in-out"
                    >
                        <span className="subtitle">{subTitle}</span>
                        <h2 className="title ">{conTitle}</h2>
                    </div>

                    <div className="section-wrapper">
                        <form className="contact-form"
                         data-aos="zoom-in"
                         data-aos-delay="50"
                         data-aos-duration="1000"
                         data-aos-easing="ease-in-out"
                        >
                            <div className="form-group">
                                <input type="text" name="name" id="name" placeholder="Your Name *" />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" id="email" placeholder="Your Email *" />
                            </div>
                            <div className="form-group">
                                <input type="number" name="number" id="number" placeholder="Phone Number *" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="subject" id="subject" placeholder="Your Subject *" />
                            </div>
                            <div className="form-group w-100">
                                <textarea name="message" id="message" rows="8" placeholder="Your Message"></textarea>
                            </div>
                            <div className="form-group text-center w-100">
                                <button className="lab-btn  ">
                                    <span>{btnText}</span>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>

        </main>
    );
};

export default Contact;