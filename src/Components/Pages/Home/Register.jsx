
const subTitle = "Save The Day";
const title = (
    <h2 className="title">Join on  Day Long Free Workship for <b>Advance <span>Mastering</span></b> on Sales  </h2>
);
const des = "Limited Time Offer! Hurry Up"

const Register = () => {
    return (
        <section className="register-section padding-tb">
            <div className="container">
                <div className="row g-4 row-cols-lg-2 row-cols-1 align-items-center ">
                    <div className="col" 
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                        <div className="section-header">
                            <span className="subtitle"> {subTitle} </span>
                            {title}
                            <p>{des}</p>
                        </div>
                    </div>
                    <div className="col" 
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <div className="section-wrapper">
                            <h4>Register Now</h4>
                            <form className="register-form">
                                <input type="text" name="name" placeholder="Username" className="reg-input" />
                                <input type="email" name="email" placeholder="Email" className="reg-input" />
                                <input type="number" name="number" placeholder="Number" className="reg-input" />
                                <button type="submit" className="lab-btn">Register Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;