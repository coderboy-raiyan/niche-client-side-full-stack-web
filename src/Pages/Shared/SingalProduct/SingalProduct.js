import { motion } from "framer-motion";
import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";
import { useHistory } from "react-router-dom";
import useReadMore from "./../../Hooks/useReadMore";
import "./SingalProduct.css";

const SingalProduct = ({ product }) => {
  const { name, price, ratings, img, des, _id } = product;
  // const [readMore, setReadMore] = useState(false);
  const { handelRead, readMore } = useReadMore();
  const history = useHistory();

  // const handelRead = () => {
  //   setReadMore(!readMore);
  // };

  const handelPurcahse = (id) => {
    window.scrollTo(0, 0);
    history.push(`/product/${id}`);
  };

  return (
    <Col xs={12} md={4} lg={4}>
      <Card className="h-100 border-0 shadow p-2 product-card text-center">
        <div className="product-img">
          <img src={img} alt="" className="rounded" />
        </div>
        <Card.Body>
          <Card.Title className="product-title">{name}</Card.Title>
          <Card.Text className="text-muted my-4">
            {readMore ? des : des.slice(0, 100)}. <br />
            <span onClick={handelRead} className="readmore">
              {readMore ? "Read less" : "Read more..."}
            </span>{" "}
          </Card.Text>
          <h5 className="product-price">Price : ${price}</h5>
          <div className="ratings mt-3">
            <p>
              Ratings : {"  "}
              <Rating
                emptySymbol={<i className="bi bi-star-half"></i>}
                fullSymbol={<i className="bi bi-star-fill"></i>}
                readonly
                initialRating={Number(ratings)}
              />
            </p>
          </div>
        </Card.Body>

        <motion.button
          className=" w-50 m-auto mb-3"
          whileHover={{
            scale: 1.1,
            border: "1px solid #00BB6D",
            background: "transparent",
            color: "#00BB6D",
          }}
          whileTap={{ scale: 1 }}
          onClick={() => handelPurcahse(_id)}
        >
          Buy Now
        </motion.button>
      </Card>
    </Col>
  );
};

export default SingalProduct;
