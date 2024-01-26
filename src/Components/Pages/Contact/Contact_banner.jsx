import { Link } from "react-router-dom";


const Contact_banner = () => {
    return (
        <section className="pageheader-section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="pageheader-content text-center">
                        <h2>Contact Page</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active " aria-current="page">Contact</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Contact_banner;