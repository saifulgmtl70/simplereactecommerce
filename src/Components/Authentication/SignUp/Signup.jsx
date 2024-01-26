import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Provider/Authprovider';


const title = "Register";
const socialTitle = "Login with Social Media";
const btnText = "Signup Now";

const Signup = () => {


    const { googleSin, createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const from = location.state?.from?.pathname || '/';


    const handleSignUp = (event) =>{
        event.preventDefault();

        const form = event.target;
        // console.log(form);
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        console.log(name, email, password, confirmPassword)

        if(password !== confirmPassword){
            toast.error("Password Doesn't machted. Please provide correct password", {
                position: "top-center"
            });
        }
        else{
            
            createUser(email, password)
            .then(() => {
                toast.success("Account Created Successfully", {
                    position: "top-center",
                    autoClose: 1000, // এক সেকেন্ডের মধ্যে বন্ধ হবে
                    onClose: () => navigate(from, { replace: true }) // টোস্ট বন্ধ হওয়ার পরে নেভিগেট করুন
                }); // টাইমআউট সেট করে অনুপ্রেরণা দেখানোর পরে নেভিগেট করুন
            })
            .catch(() => {
                toast.error("Something Went Wrong", {
                    position: "top-center"
                });
            });


        }
        

        form.reset();

    }

    const handleGoogleLogin = () =>{
        googleSin()
        .then(() =>{
            toast.success("Account Created Successfully", {
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
    }



    return (
        <main>
            <ToastContainer />
            <section className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <form className="account-form" onSubmit={handleSignUp}>
                            <div className="form-group">
                                <input type="text" name="name" id="name" placeholder=" Full Name *" required />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" id="email" placeholder="Email Address *" required />
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" id="password" placeholder="Password *" required />
                            </div>
                            <div className="form-group">
                                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password *" required />
                            </div>
                            
                            <div className="form-group">
                                <button type="submit" className="d-block lab-btn">
                                    <span> {btnText} </span>
                                </button>
                            </div>

                            <div className="account-bottom">
                                <span className="d-block cate pt-10">
                                    Have an Account? <Link to="/login"> Login </Link> 
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

export default Signup;