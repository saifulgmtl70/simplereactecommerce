import { Link } from "react-router-dom";


const ErrorPage = () => {

    

    return (
 

            <div className="grid h-screen px-4 py-8 bg-white place-content-center">
                <div className="text-center py-12">
                    
                    <img src="https://i.ibb.co/SmdVTsZ/404-error-dribbble-800x600.gif" className="w-11/12  mx-auto" />

                    <h1
                    className=""
                    >
                    OOOPS!!! Sorry. Nothing found
                    </h1>

                    <p className=" text-secondary ">We can not find that page.</p>
                    <Link to="/" className=" my-2 ">
                        <button className="p-3 bg-primary text-white">Back to Home</button>
                    </Link>
                    
                </div>
            </div>
    );
};

export default ErrorPage;