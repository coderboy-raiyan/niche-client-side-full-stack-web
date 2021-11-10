import { motion } from "framer-motion";
import React from "react";
import { Col } from "react-bootstrap";

const SingalOrder = ({ order, handelCancel }) => {
  return (
    <Col xs={12} lg={6} md={6}>
      <div className="card mb-3 shadow">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={order?.img} className="p-3 rounded" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{order?.car_name}</h5>
              <p className="card-text fs-6">Address : {order?.address}</p>
              <p className="card-text fs-6">
                <span className="fw-bold"> Price : ${order?.price}</span>
                <span
                  className="badge p-2 text-capitalize ms-3"
                  style={{ background: "#F29339" }}
                >
                  {order?.status}
                </span>
              </p>
              <p className="card-text fs-6">Phone Number : {order?.phone}</p>

              <motion.button
                className="cancel-btn"
                onClick={() => handelCancel(order._id)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                Cancel
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingalOrder;
