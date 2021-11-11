import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaQuoteRight } from "react-icons/fa";
import useReviewsContext from "./../../Hooks/useReviewsContext";
import "./Reviews.css";

const Reviews = () => {
  const { reviews } = useReviewsContext();
  console.log(reviews);

  return (
    <section className="reviews-section">
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
    </section>
  );
};

export default Reviews;
