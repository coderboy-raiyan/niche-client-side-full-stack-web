import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import SingalOrder from "../SingalOrder/SingalOrder";
import useAuth from "./../../Hooks/useAuth";
import OrderSkeliton from "./../../LoadingSkelitons/OrderSkeliton";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [orderLoading, setOrderLoading] = useState(true);
  const [isDeleted, setIsDeleted] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    setOrderLoading(true);
    setTimeout(() => {
      setOrderLoading(false);
    }, 3000);
  }, []);

  // get all the orders
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [isDeleted]);

  // delete a order
  const handelCancel = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success ms-3",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/order/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data) {
                swalWithBootstrapButtons.fire(
                  "Deleted!",
                  "Your file has been deleted.",
                  "success"
                );
                setIsDeleted(data);
              }
            })
            .finally(() => {
              setIsDeleted(false);
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

  return (
    <section className="my-orders">
      <Container>
        <Row>
          <Col xs={12} lg={12} md={12}>
            <h1 className="text-center py-4 border-bottom">My Orders</h1>
          </Col>
        </Row>
      </Container>

      {orders.length === 0 && (
        <div className="d-flex justify-content-center flex-column align-items-center">
          <img
            width="500px"
            className=""
            src="https://i.ibb.co/mSyG1P4/No-data-bro.png"
            alt=""
          />
          <p className="fs-4 text-secondary">You have no orders to view</p>
        </div>
      )}

      {/* All orders */}
      <div className="all-orders">
        <Container>
          <Row className="g-4 py-5">
            {orders.map((order) =>
              orderLoading ? (
                <OrderSkeliton key={order._id} />
              ) : (
                <SingalOrder
                  order={order}
                  handelCancel={handelCancel}
                  key={order._id}
                />
              )
            )}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default MyOrders;
