import { useContext } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import { Link, useLocation, useNavigate } from "react-router-dom";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const title = "Login";
const socialTitle = "Login with Social Media";
const btnText = "Login Now";

const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
]


const Login = () => {

    // const [ errorMessage, setErrorMessage ] = useState();
    const { googleSin, login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) =>{
        event.preventDefault();

        const form = event.target;
        // console.log(form);
        const email = form.email.value;
        const password = form.password.value;

        console.log( email, password)

        login(email, password)
        .then((res) =>{
            toast.success("Logged in Successfully", {
                position: "top-center",
                autoClose: 1000, // এক সেকেন্ডের মধ্যে বন্ধ হবে
                onClose: () => navigate(from, { replace: true }) // টোস্ট বন্ধ হওয়ার পরে নেভিগেট করুন
            });
        })
        .catch(() =>{
            toast.error("Please provide valid email and password", {
                position: "top-center"
            });
        })

        form.reset();

    }


    const handleGoogleLogin = () =>{
        googleSin()
        .then((res) =>{
            const user = res.user;
            toast.success("User Logged In Successfully", {
                position: "top-center"
            });
            navigate(from, {replace: true})
        })
        .catch(() =>{
            toast.error("Please provide valid email and password", {
                position: "top-center"
            });
        })
    }


    return (
        <main>
            <ToastContainer />
            <section className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <form className="account-form" onSubmit={handleLogin}>
                            <div className="form-group">
                                <input type="email" name="email" id="email" placeholder="Email Address *" required />
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" id="password" placeholder="Password *" required />
                            </div>
                            <div className="form-group">
                                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                    <div className="checkgroup">
                                        <input type="checkbox" name="remember" id="remember" />
                                        <label htmlFor="">Remember me</label>
                                    </div>
                                    <Link to="forgotpass"> Forgott Password</Link>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="d-block lab-btn">
                                    <span> {btnText} </span>
                                </button>
                            </div>

                            <div className="account-bottom">
                                <span className="d-block cate pt-10">
                                    Dont't have an Account? <Link to="/signup"> Sign Up </Link> 
                                </span>
                                <span className="or">
                                    or
                                </span>

                                <h5 className="subtitle">{socialTitle}</h5>
                                <ul className="lab-ul social-icons justify-content-center">
                                    <li>
                                        <a href="#" className="github" onClick={handleGoogleLogin}> <i className="icofont-github"></i> </a>
                                    </li>
                                    <li>
                                        <a href="#" className="facebook"> <i className="icofont-facebook"></i> </a>
                                    </li>
                                    <li>
                                        <a href="#" className="twitter"> <i className="icofont-twitter"></i> </a>
                                    </li>
                                    <li>
                                        <a href="#" className="linkedin"> <i className="icofont-linkedin"></i> </a>
                                    </li>
                                    <li>
                                        <a href="#" className="instagram"> <i className="icofont-instagram"></i> </a>
                                    </li>
                                    <li>
                                        <a href="#" className="pinterest"> <i className="icofont-pinterest"></i> </a>
                                    </li>
                                    
                                </ul>


                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Login;