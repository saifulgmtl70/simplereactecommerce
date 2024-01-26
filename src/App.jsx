import { Outlet, useLocation } from "react-router-dom";
import Header from "./Components/Pages/Header/Header";
import Footer from "./Components/Pages/Footer/Footer";
import { useEffect, useState } from "react";
import Loader from "./Loader";


const App = () => {

    const [isLoading, setIsLoading] = useState(true);

    const location = useLocation();
    // console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup') ;


    useEffect(() => {
        // Simulate content loading delay (replace with your actual data fetching logic)
        const timeout = setTimeout(() => {
          setIsLoading(false);
        }, 2800);
    
        // Cleanup timeout on component unmount
        return () => clearTimeout(timeout);
      }, []);

    return (
        <div>
            {
                isLoading ? (
                    <Loader/>
                ) : (
                    <div>
                        { noHeaderFooter || <Header></Header> }
                        <div className="min-vh-100">
                            <Outlet />
                        </div>
                        { noHeaderFooter || <Footer></Footer> }
                    </div>
                )
            }
            
        </div>
    );
};

export default App;