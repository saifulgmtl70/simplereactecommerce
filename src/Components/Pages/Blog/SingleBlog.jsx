import { Link, useParams } from "react-router-dom";

const blogList = [
    {   id: 1,
        imgUrl: 'https://i.ibb.co/YQqcHYN/01.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Business Ueporting Rouncil Them Could Plan.',
        desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
        commentCount: '3',
        btnText: 'Read More',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Rajib Raj',
            },
            {
                iconName: 'icofont-calendar',
                text: 'Jun 05,2022',
            },
        ],
    },
    {
        id: 2,
        imgUrl: 'https://i.ibb.co/MSg6d0T/02.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Financial Reporting Qouncil What Could More.',
        desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
        commentCount: '5',
        btnText: 'Read More',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Rajib Raj',
            },
            {
                iconName: 'icofont-calendar',
                text: 'Jun 05,2022',
            },
        ],
    },
    {
        id: 3,
        imgUrl: 'https://i.ibb.co/VwFc9YC/03.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Consulting Reporting Qounc Arei Could More.',
        desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
        commentCount: '1',
        btnText: 'Read More',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Rajib Raj',
            },
            {
                iconName: 'icofont-calendar',
                text: 'Jun 05,2022',
            },
        ],
    },
    {
        id: 4,
        imgUrl: 'https://i.ibb.co/Dth2YCM/04.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Strategic Social Media and of visual design.',
        desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
        commentCount: '4',
        btnText: 'Read More',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Rajib Raj',
            },
            {
                iconName: 'icofont-calendar',
                text: 'Jun 05,2022',
            },
        ],
    },
    {
        id: 5,
        imgUrl: 'https://i.ibb.co/9qLSznt/05.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Find the Right Path for your Group Course online.',
        desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
        commentCount: '6',
        btnText: 'Read More',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Rajib Raj',
            },
            {
                iconName: 'icofont-calendar',
                text: 'Jun 05,2022',
            },
        ],
    },
    {
        id: 6,
        imgUrl: 'https://i.ibb.co/PwVSbsn/06.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Learn by doing with Real World Projects other countries.',
        desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
        commentCount: '2',
        btnText: 'Read More',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Rajib Raj',
            },
            {
                iconName: 'icofont-calendar',
                text: 'Jun 05,2022',
            },
        ],
    },
    {
        id: 7,
        imgUrl: 'https://i.ibb.co/9cp7WWH/07.jpg',
        imgAlt: 'Blog Thumb',
        title: 'The Importance Of Intrinsic for Students.',
        desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
        commentCount: '3',
        btnText: 'Read More',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Rajib Raj',
            },
            {
                iconName: 'icofont-calendar',
                text: 'Jun 05,2022',
            },
        ],
    },
    {
        id: 8,
        imgUrl: 'https://i.ibb.co/M8nBZP4/08.jpg',
        imgAlt: 'Blog Thumb',
        title: 'A Better Alternative To Grading Student Writing.',
        desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
        commentCount: '3',
        btnText: 'Read More',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Rajib Raj',
            },
            {
                iconName: 'icofont-calendar',
                text: 'Jun 05,2022',
            },
        ],
    },
    {
        id: 9,
        imgUrl: 'https://i.ibb.co/BLsYhZT/09.jpg',
        imgAlt: 'Blog Thumb',
        title: 'The Challenge Global Learning In Public Education.',
        desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
        commentCount: '3',
        btnText: 'Read More',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Rajib Raj',
            },
            {
                iconName: 'icofont-calendar',
                text: 'Jun 05,2022',
            },
        ],
    },
]


const socialList = [
    {
    link: "#",
    iconName: "icofont-facebook",
    className: "facebook",
    },
    {
    link: "#",
    iconName: "icofont-twitter",
    className: "twitter",
    },
    {
    link: "#",
    iconName: "icofont-linkedin",
    className: "linkedin",
    },
    {
    link: "#",
    iconName: "icofont-instagram",
    className: "instagram",
    },
    {
    link: "#",
    iconName: "icofont-pinterest",
    className: "pinterest",
    },
];

import { useState } from "react";
import Tags from "../Shop/Tags";
import PopularPost from "../Shop/PopularPost";


const SingleBlog = () => {

    const [ blog, setBlog ] = useState(blogList);
    const { id } = useParams();
    console.log(id);
    const result = blog.filter((b) => b.id === Number(id));
    console.log(result[0]);


    return (
        <main>
            <section className="pageheader-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="pageheader-content text-center">
                                <h2>Signle Blog Page</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active " aria-current="page">Blog</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center ">

                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    <div className="row justify-content-center row-cols-1  g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    {
                                                        result.map((item) =>(
                                                            <div key={item.id}>
                                                                <div className="post-thumb">
                                                                    <img src={item.imgUrl} alt="" className=" w-100 " />
                                                                </div>
                                                                <div className="post-content">
                                                                    <h3>{item.title}</h3>
                                                                    <div className="meta-post">
                                                                        <ul className="lab-ul">
                                                                            {
                                                                                item.metaList.map((val, i) =>(
                                                                                    <li key={i}>
                                                                                        <i className={val.iconName}></i>
                                                                                        {val.text}
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>

                                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia necessitatibus natus porro veniam ab repudiandae deleniti consequuntur odit ratione. Voluptas nam nostrum esse, eligendi iure voluptatibus necessitatibus recusandae quibusdam omnis praesentium nobis ad fuga neque perferendis! Quis unde iure consectetur officia laudantium hic sint, voluptatum eveniet tempora modi! Exercitationem repellat mollitia asperiores iusto vitae aliquam libero est quidem reprehenderit aliquid.</p>

                                                                    <blockquote>
                                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nisi vero quo magni natus quasi delectus! Ab iste porro reprehenderit minus accusantium temporibus asperiores? Amet eius dolore fugit officia tempore.</p>
                                                                        <cite>
                                                                            <a href="#">...Azad</a>
                                                                        </cite>
                                                                    </blockquote>

                                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi nobis, maxime modi quod ut laboriosam voluptatibus dolor aspernatur illum voluptates eligendi, dicta iure minima assumenda quia vitae quasi minus ex repellendus dolores. Ad dolores id amet consequuntur facere consequatur vel vitae voluptates quas porro repudiandae maiores aliquid odio, ut repellendus?</p>

                                                                    <img src="https://i.ibb.co/wsxVVTX/01.jpg" alt="" />

                                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa saepe enim laboriosam beatae cupiditate eos porro, accusantium voluptatibus suscipit qui vero aperiam tenetur, nisi necessitatibus ratione at. Voluptatem exercitationem dolorum dolorem corporis neque quam. Natus iure esse perspiciatis? Incidunt voluptate adipisci dignissimos itaque eos neque velit veniam quidem cupiditate alias.</p>

                                                                    <div className="video-thumb">
                                                                        <img src="https://i.ibb.co/m9Y1rB9/02.jpg" alt="" />
                                                                        <a href="https://www.youtube.com/watch?v=Yx4PKzyDnfc" className="video-button popup" target="_blank">
                                                                            <i className="icofont-ui-play"></i>
                                                                        </a>
                                                                    </div>

                                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa saepe enim laboriosam beatae cupiditate eos porro, accusantium voluptatibus suscipit qui vero aperiam tenetur, nisi necessitatibus ratione at. Voluptatem exercitationem dolorum dolorem corporis neque quam. Natus iure esse perspiciatis? Incidunt voluptate adipisci dignissimos itaque eos neque velit veniam quidem cupiditate alias.</p>

                                                                    <img src="https://i.ibb.co/RDRfQwm/03.jpg" alt="" />

                                                                    <div className="tags-section">
                                                                        <ul className="tags lab-ul">
                                                                            <li>
                                                                                <a href="#">Agency</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Business</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Personal</a>
                                                                            </li>
                                                                           
                                                                        </ul>
                                                                        <ul className="lab-ul social-icons">
                                                                            {
                                                                                socialList.map((val, i) =>(
                                                                                    <li key={i}>
                                                                                        <a href="#" className={val.className}>
                                                                                            <i className={val.iconName}></i>
                                                                                        </a>
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        <div className="navigations-part">
                                            <div className="left">
                                                <a href="#" className="prev">
                                                    <i className="icofont-double-left"></i> Previous Blog
                                                </a>
                                                <a href="#" className="title">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                </a>
                                            </div>
                                            <div className="right">
                                                <a href="#" className="prev">
                                                    <i className="icofont-double-right"></i> Next Blog
                                                </a>
                                                <a href="#" className="title">
                                                   Lorem ipsum dolor sit, amet consectetur adipisicing elit..
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </article>
                        </div>

                        <div className="col-lg-4 col-12">
                            <aside>
                                <Tags/>
                                <PopularPost/>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
};

export default SingleBlog;