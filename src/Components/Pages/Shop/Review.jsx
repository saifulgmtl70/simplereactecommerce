import { useState } from "react";
import Ratings from "../Home/Ratings";

const reviwtitle = "Add a Review";

let ReviewList = [
    {
      imgUrl: "https://i.ibb.co/9cJm0gC/01.jpg",
      imgAlt: "Client thumb",
      name: "Ganelon Boileau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "https://i.ibb.co/XtnNtqf/02.jpg",
      imgAlt: "Client thumb",
      name: "Morgana Cailot",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "https://i.ibb.co/1vDjNMq/03.jpg",
      imgAlt: "Client thumb",
      name: "Telford Bois",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "https://i.ibb.co/LpR5bHt/04.jpg",
      imgAlt: "Client thumb",
      name: "Cher Daviau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
];


const Review = () => {

    const [ review, setReview ] = useState(true)

    return (
        <div>
            <ul className={`review-nav lab-ul ${review ? "RevActive": "DescActive"}`}>
                <li className="desc" onClick={() => setReview(!review)}>Description</li>
                <li className="rev" onClick={() => setReview(!review)}>Reviews</li>

            </ul>

            {/* Description and Review */}

            <div className={`review-content ${review ? "review-content-show":"description-show"}`}>
                <div className="review-showing">
                    <ul className="content lab-ul">
                        {
                            ReviewList.map((review, i) => (
                                <li key={i}>
                                    <div className="post-thumb">
                                        <img src={review.imgUrl} alt="" />
                                    </div>
                                    <div className="post-content">
                                        <div className="entry-meta">
                                            <div className="posted-on">
                                                <a href="#"> {review.name} </a>
                                                <p> {review.date} </p>
                                            </div>
                                        </div>
                                        <div className="entry-content">
                                            <p> {review.desc} </p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                    {/* Add review field */}
                    <div className="client-review">
                        <div className="review-form">
                            <div className="review-title">
                                <h5>{reviwtitle}</h5>
                            </div>

                            <form className="row">
                                <div className="col-md-4 col-12">
                                    <input type="text" name="name" id="name" placeholder="Full Name" />
                                </div>

                                <div className="col-md-4 col-12">
                                    <input type="email" name="name" id="name" placeholder="Your Email" />
                                </div>

                                <div className="col-md-4 col-12">
                                    <div className="rating">
                                        <span className="me-2">Your Rating</span>
                                        <Ratings/>
                                    </div>
                                </div>

                                <div className="col-md-12 col-12">
                                    <textarea name="message" id="message"  rows="8" placeholder="Type your message"></textarea>
                                </div>

                                <div className="col-12">
                                    <button type="submit" className="default-button">
                                        Submit Review
                                    </button>
                                </div>

                            </form>

                        </div>
                    </div>

                </div>

                {/* Description */}
                <div className="description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque dolores cum eum placeat impedit, adipisci natus odio iure labore et, exercitationem officiis magni qui harum autem voluptatibus! Odio fugit optio vel cum. Assumenda inventore officiis libero dolore rerum ea commodi hic? Itaque minima quod non. Quae iste quasi eum impedit delectus eveniet velit, nesciunt mollitia reiciendis nisi blanditiis officiis totam rem illo veritatis ex. Porro at blanditiis veniam similique doloribus quasi natus qui! Accusamus expedita, delectus praesentium laboriosam quibusdam deleniti! Veritatis recusandae, mollitia vero similique voluptas error nesciunt veniam suscipit alias, voluptates repellendus dolorem quas libero ut maiores inventore.</p>

                    <div className="post-item">
                        <div className="post-thumb">
                            <img src="https://i.ibb.co/12gpsm2/01.jpg" alt="" />
                        </div>
                        <div className="post-content">
                            <ul className="lab-ul">
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, suscipit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, suscipit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, suscipit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, suscipit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, suscipit.</li>
                            </ul>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, consequuntur labore laboriosam magnam deleniti natus maxime, totam culpa id sed explicabo, aliquid inventore ea soluta impedit ipsum perferendis debitis dolores in maiores exercitationem temporibus tempore quam! Earum reprehenderit dolorem maiores sunt. Exercitationem repudiandae cumque numquam tenetur animi quisquam, reprehenderit id, aspernatur possimus mollitia excepturi maiores cupiditate vel molestias itaque nisi. Ex iure soluta quis architecto dolores fugit beatae error ab quaerat maiores odio quia recusandae, eius dolore consequatur provident harum.</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Review;