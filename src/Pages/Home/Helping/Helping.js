import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Helping.css";

const Helping = () => {
  return (
    <section className="help-section bg-light">
      <Container>
        <Row className="align-items-start">
          <Col xs={12} lg={6} md={6}>
            <div className="help-img">
              <img
                src="https://i.postimg.cc/Y9VGkbpd/introduction-2.png"
                alt=""
              />
            </div>
          </Col>
          <Col xs={12} lg={6} md={6}>
            <div className="help-des">
              <h1>We Helping Business Delivered.</h1>
              <p>
                We’re true believers in the power of the web and how it connects
                people to content. You want to use your talents for something
                big. You want the chance to make a difference, everyday.
              </p>
              <motion.button
                whileTap={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
              >
                Read More
              </motion.button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Helping;
