import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import './Home.css';

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl: "https://i.ibb.co/Zhd63VB/01.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "DSLR Camera",
  },
  {
    imgUrl: "https://i.ibb.co/3kjxwHS/02.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Shoes",
  },
  {
    imgUrl: "https://i.ibb.co/VNWV86f/03.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Photography",
  },
  {
    imgUrl: "https://i.ibb.co/N1VdhnH/04.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Formal Dress",
  },
  {
    imgUrl: "https://i.ibb.co/xYBFh0w/05.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Colorful Bags",
  },
  {
    imgUrl: "https://i.ibb.co/9G9023W/06.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Home Decor",
  },
];

const HomeCategory = () => {
  return <div className="category style-4 padding-tb">
      <div className="container">
        <div className="section-header text-center"  
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
          <span className="subtittle"> {subTitle} </span>
          <h2 className="title"> {title} </h2>
        </div>

        <div className="section-wrapper">

            <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1   ">
                {categoryList.map((val, i) => (
                    <div key={i} className="col"  
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                        <Link to="/shop" className="card-link">
                            <Card className="card">
                                <Card.Img variant="top" src={val.imgUrl} alt={val.imgAlt} />
                                <Card.ImgOverlay className="card-overlay">
                                    <Card.Title className="card-content ">
                                        <i className={val.iconName}></i>
                                        <Link to="/shop"><h3>{val.title}</h3></Link>
                                    </Card.Title>
                                </Card.ImgOverlay>
                            </Card>
                        </Link>
                    </div>
                ))}
            </div>

            <div className=" mt-4 text-center ">
                <Link to="/shop" className="lab-btn mt-4 text-center bg-info rounded-1 text-white  p-3  "><span>{btnText}</span></Link>
            </div>


        </div>
      </div>
    </div>
 
};

export default HomeCategory;
