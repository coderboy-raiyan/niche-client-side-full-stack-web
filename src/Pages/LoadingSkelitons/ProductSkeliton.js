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
            <Skeleton height={30} />
          </Card.Title>
          <Card.Text className="text-muted my-4">
            <Skeleton height={30} />
            <br />
            <span className="readmore">
              <Skeleton height={30} />
            </span>{" "}
          </Card.Text>
          <h5 className="product-price">
            <Skeleton height={30} />
          </h5>
          <div className="ratings mt-3">
            <p>
              <Skeleton height={30} />
            </p>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductSkeliton;
