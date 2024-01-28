import axios from "../axios";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import categories from "../categories";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const lastProducts = products.slice(0, 8);
  useEffect(() => {
    axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
  }, [dispatch]);
  return (
    <div>
      <header>
        <nav>
          <h1>Welcome to Friends Travel Agency</h1>
          <ul>
            <li>
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Special Deals</a>
            </li>
            <li>
              <a href="about us.html" style={{ color: "blue" }}>
                About us
              </a>
            </li>
            <li>
              <a href="register.html">Register</a>
            </li>
          </ul>
          <i className="bi bi-three-dots" />
        </nav>
        <div className="content">
          <div className="cont_bx">
            <h1>The right destination for you and your family</h1>
            <p>
              creative taglines have the capability of capturing the attention
              of potential customer
            </p>
            <button className="button-78">start your search</button>
          </div>
          <div className="trip_bx">
            <div className="search_bx">
              <div className="card">
                <h4>
                  Location <i className="bi bi-caret-down-fill" />
                </h4>
                <input type="text" placeholder="Enter your destination" />
              </div>
              <div className="card">
                <h4>
                  Date <i className="bi bi-caret-down-fill" />
                </h4>
                <input type="date" />
              </div>
              <div className="card">
                <h4>
                  People <i className="bi bi-caret-down-fill" />
                </h4>
                <input type="number" placeholder="How many people?" />
              </div>
              <input type="button" defaultValue="explore now" />
            </div>
            <div className="travel_bx">
              <h4>Countries to travel</h4>
              <div className="cards">
                <div className="card">
                  <h3>
                    Pakistan <img src="img/Flag_of_Pakistan.png" alt="" />
                  </h3>
                  <img src="img/ISLAMABAD.jpg" alt="" />
                  <div className="btn_city">
                    <a href>Read now</a>
                    <h5>
                      islamabad <br /> <span>$500</span>
                    </h5>
                  </div>
                </div>
                <div className="card">
                  <h3>
                    United states <img src="img/us.jpg" alt="" />
                  </h3>
                  <img src="img/DC washington.jpg" alt="" />
                  <div className="btn_city">
                    <a href>Read now</a>
                    <h5>
                      DC washington <br /> <span>$850</span>
                    </h5>
                  </div>
                </div>
                <div className="card">
                  <h3>
                    United kingdom{" "}
                    <img src="img/Flag_of_the_United_Kingdom.png" alt="" />
                  </h3>
                  <img src="img/london.jpg" alt="" />
                  <div className="btn_city">
                    <a href>Read now</a>
                    <h5>
                      London <br /> <span>$950</span>
                    </h5>
                  </div>
                </div>
                <div className="card">
                  <h3>
                    Canada <img src="img/Flag_of_Canada.png" alt="" />
                  </h3>
                  <img src="img/ottawa.jpg" alt="" />
                  <div className="btn_city">
                    <a href>Read now</a>
                    <h5>
                      ottawa
                      <br /> <span>$650</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="offers">
        <h1>Best tour offers for you</h1>
        <p>Choose your next journey</p>
        <div className="cards">
          <div className="card">
            <h3>Dubai</h3>
            <div className="img_text">
              <img src="img/duba.jpg" alt="" />
              <h4>included: air ticket,hotel.tours,air port transfer</h4>
            </div>
            <div className="cont_bx">
              <div className="price">
                <div className="heart_chat">
                  <i className="bi bi-heart-fill">
                    <span>45622</span>
                  </i>
                  <i className="bi bi-chat-fill">
                    <span>3382</span>
                  </i>
                </div>
                <div className="info_price">
                  <a href>More info</a>
                  <h4>$660</h4>
                </div>
              </div>
              <div className="days">
                5 days <br />
                Dubai
              </div>
            </div>
          </div>
          <div className="card">
            <h3>Saudi Arab</h3>
            <div className="img_text">
              <img src="img/MAKKAH.jpg" alt="" />
              <h4>included: air ticket,hotel.tours,air port transfer</h4>
            </div>
            <div className="cont_bx">
              <div className="price">
                <div className="heart_chat">
                  <i className="bi bi-heart-fill">
                    <span>45622</span>
                  </i>
                  <i className="bi bi-chat-fill">
                    <span>3382</span>
                  </i>
                </div>
                <div className="info_price">
                  <a href>More info</a>
                  <h4>$660</h4>
                </div>
              </div>
              <div className="days">
                5 days <br />
                KSA
              </div>
            </div>
          </div>
          <div className="card">
            <h3>Turkey</h3>
            <div className="img_text">
              <img src="img/istanbul.webp" alt="" />
              <h4>included: air ticket,hotel.tours,air port transfer</h4>
            </div>
            <div className="cont_bx">
              <div className="price">
                <div className="heart_chat">
                  <i className="bi bi-heart-fill">
                    <span>45622</span>
                  </i>
                  <i className="bi bi-chat-fill">
                    <span>3382</span>
                  </i>
                </div>
                <div className="info_price">
                  <a href>More info</a>
                  <h4>$660</h4>
                </div>
              </div>
              <div className="days">
                5 days <br />
                Turkey
              </div>
            </div>
          </div>
          <div className="card">
            <h3>Brazil</h3>
            <div className="img_text">
              <img src="img/brazil.jpg" alt="" />
              <h4>included: air ticket,hotel.tours,air port transfer</h4>
            </div>
            <div className="cont_bx">
              <div className="price">
                <div className="heart_chat">
                  <i className="bi bi-heart-fill">
                    <span>45622</span>
                  </i>
                  <i className="bi bi-chat-fill">
                    <span>3382</span>
                  </i>
                </div>
                <div className="info_price">
                  <a href>More info</a>
                  <h4>$660</h4>
                </div>
              </div>
              <div className="days">
                5 days <br />
                Brazil
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="destination">
        <div className="des_bx">
          <h4>Our destination</h4>
          <p>Choose your next destination</p>
          <li>VIETNAM</li>
          <li>GERMANY</li>
          <li>FRANCE</li>
          <li>EGYPT</li>
          <li>AFRICA</li>
          <li>KOREA</li>
          <h6>
            included: Air ticket, Hotel, Breakfast, Tours, Airport transfer
          </h6>
          <button>More info</button>
        </div>
        <div className="img_bx">
          <img src="img/pexels-andrea-piacquadio-3769118.jpg" alt="" />
          <div className="msg">
            <img src="img/usa flag.jpg" alt="" />
            <div className="cont">
              <h4>USA</h4>
              <div className="icon">
                <i className="bi bi-heart-fill">
                  <span>45622</span>
                </i>
                <i className="bi bi-chat-fill">
                  <span>3382</span>
                </i>
              </div>
            </div>
          </div>
          <div className="msg">
            <img src="img/switxerland.jpg" alt="" />
            <div className="cont">
              <h4>switzerland</h4>
              <div className="icon">
                <i className="bi bi-heart-fill">
                  <span>45622</span>
                </i>
                <i className="bi bi-chat-fill">
                  <span>3382</span>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <h2>
          Subscribe &amp; <br />
          get Special discout
        </h2>
        <p>
          Yasir Travels &amp; Tours is dedicated to providing its customers'
          best-travelling facilities, fastest visa processing, cheap air
          tickets, quick flight reservation, luxurious accommodation and a wide
          range of transportation throughout the trip. We give the same
          importance, attention, and care to your every trip for making you very
          happy as we did in your past trips. This is why; we have an almost 85%
          bouncing back rate that makes us not only happy but completely
          satisfied and we do more hardworking to increase the bounce-back rate
          of our honourable customers throughout Pakistan..
        </p>
        <div className="input">
          <input type="text" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
        <ul>
          <li>
            20 <br /> <h6>years serving the travel industry</h6>
          </li>
          <li>
            674 <br />{" "}
            <h6>
              Global <br />
              patnership
            </h6>
          </li>
          <li>
            96 <br /> <h6>Industry Awards since 2022</h6>
          </li>
          <li>
            5658 <br /> <h6>Subscribe</h6>
          </li>
        </ul>
      </footer>
    </div>
    // <div>
    //   <img
    //     src=" https://res.cloudinary.com/learn-code-10/image/upload/v1653947013/yqajnhqf7usk56zkwqi5.png"
    //     className="home-banner"
    //   />
    //   <div className="featured-products-container container mt-4">
    //     <h2>Last products</h2>
    //     {/* last products here */}
    //     <div className="d-flex justify-content-center flex-wrap">
    //       {lastProducts.map((product) => (
    //         <ProductPreview {...product} />
    //       ))}
    //     </div>
    //     <div>
    //       <Link
    //         to="/category/all"
    //         style={{
    //           textAlign: "right",
    //           display: "block",
    //           textDecoration: "none",
    //         }}
    //       >
    //         See more {">>"}
    //       </Link>
    //     </div>
    //   </div>
    //   {/* sale banner */}
    //   <div className="sale__banner--container mt-4">
    //     <img src="https://res.cloudinary.com/learn-code-10/image/upload/v1654093280/xkia6f13xxlk5xvvb5ed.png" />
    //   </div>
    //   <div className="recent-products-container container mt-4">
    //     <h2>Categories</h2>
    //     <Row>
    //       {categories.map((category) => (
    //         <LinkContainer
    //           to={`/category/${category.name.toLocaleLowerCase()}`}
    //         >
    //           <Col md={4}>
    //             <div
    //               style={{
    //                 backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`,
    //                 gap: "10px",
    //               }}
    //               className="category-tile"
    //             >
    //               {category.name}
    //             </div>
    //           </Col>
    //         </LinkContainer>
    //       ))}
    //     </Row>
    //   </div>
    // </div>
  );
}

export default Home;
