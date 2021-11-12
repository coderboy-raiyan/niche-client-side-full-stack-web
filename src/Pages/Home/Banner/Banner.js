import { motion } from "framer-motion";
import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="main-banner ">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/KxnvB5d/2.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>Best Cars collection</h1>
            <p>All services are industry level</p>
            <div className="btn-banner">
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.3 }}
                className="readmore-btn"
              >
                Read More
              </motion.button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/DfRZZHj/3.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Car Inspection</h1>
            <p>Book an appointment for vehicle.</p>
            <div className="btn-banner">
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.3 }}
                className="readmore-btn"
              >
                Read More
              </motion.button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Banner;
