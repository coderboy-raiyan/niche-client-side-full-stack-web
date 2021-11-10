import React from "react";
import { Card, Col } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSkeliton = () => {
  return (
    <Col xs={12} md={4} lg={4}>
      <Card className="h-100 border-0 shadow p-2 product-card text-center">
        <div className="card-img product-img">
          <Skeleton height={250} />
        </div>
        <Card.Body>
          <Card.Title className="product-title">
            <Skeleton height={20} />
          </Card.Title>
          <Card.Text className="text-muted my-4">
            <Skeleton />
            <br />
            <span className="readmore">
              <Skeleton />
            </span>{" "}
          </Card.Text>
          <h5 className="product-price">
            <Skeleton height={20} />
          </h5>
          <div className="ratings mt-3">
            <p>
              <Skeleton />
            </p>
          </div>
        </Card.Body>

        <button className="btn btn-light w-75 m-auto px-4 py-3">
          <Skeleton height={50} />
        </button>
      </Card>
    </Col>
  );
};

export default ProductSkeliton;
