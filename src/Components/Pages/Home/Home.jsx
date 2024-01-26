import { useEffect } from "react";
import CategoryShowCase from "./CategoryShowCase";
import HomeCategory from "./HomeCategory";
import Home_Banner from "./Home_Banner";
import LocationSprade from "./LocationSprade";
import Register from "./Register";


import AOS from 'aos';
import 'aos/dist/aos.css';
import Aboutus from "./Aboutus";
import AppSection from "./AppSection";
import Sponsor from "./Sponsor";


const Home = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <Home_Banner />
            <HomeCategory/>
            <CategoryShowCase/>
            <Register/>
            <LocationSprade/>
            <Aboutus/>
            <AppSection/>
            <Sponsor/>
        </div>
    );
};

export default Home;