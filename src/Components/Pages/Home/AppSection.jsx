import { Link } from "react-router-dom";

const btnText = "Sign up for Free";
const title = "Learn Anytime, Anywhere";
const desc = "Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn";

const AppSection = () => {
    return (
        <section className="app-section padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    <Link to="/signup" className="lab-btn mb-4 "> {btnText} </Link>
                    <h3 className="title">{title}</h3>
                    <p>{desc}</p>
                </div>

                <div className="section-wrapper">
                    <ul className="lab-ul">
                        <li>
                            <a href="#">
                                <img src="https://i.ibb.co/2kzr2Kt/01.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="https://i.ibb.co/3YGzhrk/02.jpg" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default AppSection;