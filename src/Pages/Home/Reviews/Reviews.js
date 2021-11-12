import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaQuoteRight } from "react-icons/fa";
import Rating from "react-rating";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import useReviewsContext from "./../../Hooks/useReviewsContext";
import "./Reviews.css";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Reviews = () => {
  const { reviews } = useReviewsContext();

  return (
    <section className="reviews-section" id="reviews-section">
      <Container>
        <Row>
          <Col xs={12} lg={12} md={12}>
            <div className="testimonial-haeder">
              <h1>Testimonials</h1>
              <div className="quotes">
                <FaQuoteRight className="quato-icon" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Swiper slider starts */}
      <div className="slider-main">
        <Container>
          <>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              grabCursor={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              className="mySwiper"
            >
              {reviews.map((review, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Row className="justify-content-center d-flex align-items-center">
                      <Col xs={12} lg={6} md={6} className="w-100">
                        <div className="testimonial-inner">
                          <p>{review?.des}</p>
                          <div className="tesimonial-img">
                            <img src={review?.img} alt="" />
                          </div>
                          <div className="testi-ratings">
                            <Rating
                              emptySymbol={<i className="bi bi-star-half"></i>}
                              fullSymbol={<i className="bi bi-star-fill"></i>}
                              readonly
                              initialRating={Number(review?.ratings)}
                            />
                          </div>
                          <h5>{review?.name}</h5>
                        </div>
                      </Col>
                    </Row>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </>
        </Container>
      </div>
    </section>
  );
};

export default Reviews;
