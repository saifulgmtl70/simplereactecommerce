import About_banner from "./About_banner";


import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from "react";

const subTitle = "About Our Brand";
const title = "Good Qualification Services And Better Expriences";
const desc = "Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.";

const year = "30+";
const expareance = "Years Of Experiences";

const aboutList = [
    {
    imgUrl: 'https://i.ibb.co/8DqnQcK/01.jpg',
    imgAlt: 'about icon rajibraj91 rajibraj',
    title: 'Skilled Instructors',
    desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
    {
    imgUrl: 'https://i.ibb.co/nQ6kkTm/02.jpg',
    imgAlt: 'about icon rajibraj91 rajibraj',
    title: 'Get Certificate',
    desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
    {
    imgUrl: 'https://i.ibb.co/bPz91Mr/03.jpg',
    imgAlt: 'about icon rajibraj91 rajibraj',
    title: 'Online Classes',
    desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
]


const About = () => {

    
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <main>
            <About_banner/>

            <section className="about-section style-3 padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center row-cols-lg-2 row-cols-1 align-items-cent">

                        <div className="col"
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        >
                            <div className="about-left">
                                <div className="about-thumb">
                                    <img src="https://i.ibb.co/c3X1tFc/01.jpg" alt="" />
                                </div>
                                <div className="abs-thumb">
                                    <img src="https://i.ibb.co/XWQLvnw/02.jpg" alt="" />
                                </div>
                                <div className="about-left-content">
                                    <h3>{year}</h3>
                                    <p>{expareance}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col"
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        >
                            <div className="about-right">
                                <div className="section-header">
                                    <span className="subtitle">{subTitle}</span>
                                    <h2 className="title">{title}</h2>
                                    <p>{desc}</p>

                                </div>

                                <div className="section-wrapper">
                                    <ul className="lab-ul">
                                        {
                                            aboutList.map((val, i) =>(
                                                <li key={i}>
                                                    <div className="sr-left">
                                                        <img src={val.imgUrl} alt={val.imgAlt} />
                                                    </div>
                                                    <div className="sr-right">
                                                        <h5>{val.title}</h5>
                                                        <p>{val.desc}</p>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </section>

        </main>
    );
};

export default About;