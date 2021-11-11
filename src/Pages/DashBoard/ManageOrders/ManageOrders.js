import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import ManageAllOrderSke from "./../../LoadingSkelitons/ManageAllOrderSke";
const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isOrderStatus, setOrderStatus] = useState(false);
  const [isOrderLoading, setIsOrderLoading] = useState(true);

  //   loader
  useState(() => {
    setIsOrderLoading(true);
    setTimeout(() => {
      setIsOrderLoading(false);
    }, 4000);
  }, []);

  // load all orders
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [isOrderStatus]);

  //   delete a order from the database
  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/order/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              setOrderStatus(true);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .finally(() => {
            setOrderStatus(false);
          });
      } else {
        Swal.fire("Ok!", "No problem", "info");
      }
    });
  };

  //   update status of order
  const handelStatus = (id) => {
    Swal.fire({
      title: "Do you want update status?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/order/${id}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              Swal.fire("Saved!", "status has been updated", "success");
              setOrderStatus(true);
            }
          })
          .finally(() => {
            setOrderStatus(false);
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "Ok No problem", "info");
      }
    });
  };

  return (
    <section className="manage-products">
      <Container>
        <Row>
          <Col md={12} lg={12} xs={12}>
            <h1 className="text-center my-5">All Orders</h1>
          </Col>
          <Col xs={12} lg={12} md={12}>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Car Name</th>
                  <th>Price</th>
                  <th>Delivery Address</th>
                  <th>email</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => {
                  return isOrderLoading ? (
                    <ManageAllOrderSke key={order._id} />
                  ) : (
                    <tr key={order._id}>
                      <td>{order?.car_name}</td>
                      <td>$ {order?.price}</td>
                      <td>{order?.address}</td>
                      <td>{order?.email}</td>
                      <td>
                        <span
                          className="badge p-2 text-capitalize ms-3"
                          style={{ background: "#F29339" }}
                        >
                          {order?.status}
                        </span>
                      </td>
                      <td>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="btn btn-light  m-auto"
                          onClick={() => handelStatus(order._id)}
                        >
                          Update Status
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="btn btn-transparent  m-auto"
                          onClick={() => handelDelete(order._id)}
                        >
                          <AiOutlineDelete size={30} className="text-danger" />
                        </motion.button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ManageOrders;
