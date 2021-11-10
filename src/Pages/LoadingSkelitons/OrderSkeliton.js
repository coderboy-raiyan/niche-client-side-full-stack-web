import React from "react";
import { Col } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const OrderSkeliton = () => {
  return (
    <Col xs={12} md={6} lg={6}>
      <div className="card mb-3 shadow">
        <div className="row g-0">
          <div className="col-md-4 p-2">
            <Skeleton height={100} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                <Skeleton />
              </h5>
              <p className="card-text fs-6">
                <Skeleton />
              </p>
              <p className="card-text fs-6">
                <span className="fw-bold">
                  {" "}
                  <Skeleton height={20} />
                </span>
              </p>
              <p className="card-text fs-6">
                <Skeleton height={20} />
              </p>

              <button className="btn btn-light d-block w-75">
                <Skeleton height={40} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default OrderSkeliton;
