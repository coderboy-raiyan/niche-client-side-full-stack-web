import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "./../Home/Haeder/Header";
import useAuth from "./../Hooks/useAuth";
import useReadMore from "./../Hooks/useReadMore";
import "./Purchase.css";

const Purchase = () => {
  const { productId } = useParams();
  const [car, setCar] = useState({});
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const { readMore, handelRead } = useReadMore();

  const onSubmit = (data) => {
    const newData = { ...data };
    newData.car_name = car.name;
    newData.price = car.price;
    newData.email = user.email;
    newData.status = "pending";
    newData.img = car.img;

    fetch("https://arcane-dusk-87765.herokuapp.com/cars/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire(
            "Good job!",
            "You order has been placed successfully",
            "success"
          );
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Something went wrong",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    reset();
  };

  useEffect(() => {
    fetch(`https://arcane-dusk-87765.herokuapp.com/cars/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setCar(data);
      });
  }, []);

  return (
    <>
      <Header />
      <section className="purchase-section">
        <div className="purchase-banner">
          <Container>
            <Row>
              <Col xs={12} md={12} lg={12}>
                <h1 className="text-center py-5 border-bottom">Place Order</h1>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="booking">
          <Container>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <form
                  className="placeorder-inner shadow p-4 rounded"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Row>
                    <Col xs={12} md={12} lg={12}>
                      <InputGroup className="mb-3">
                        <FormControl
                          {...register("name")}
                          type="text"
                          defaultValue={user?.displayName}
                          required
                          placeholder="Name"
                          className="shadow"
                        />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <FormControl
                          {...register("email")}
                          type="email"
                          required
                          placeholder="Email"
                          defaultValue={user.email}
                          className="shadow"
                        />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <FormControl
                          {...register("address")}
                          type="text"
                          required
                          placeholder="Address"
                          className="shadow"
                        />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <FormControl
                          {...register("car_name")}
                          type="text"
                          required
                          defaultValue={car.name}
                          placeholder="Car Name"
                          className="shadow"
                        />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <FormControl
                          {...register("phone")}
                          type="number"
                          required
                          placeholder="Phone Number"
                          className="shadow"
                        />
                      </InputGroup>
                      <motion.button
                        whileHover={{
                          background: "transparent",
                          scale: 1.1,
                          color: "#00bb6d",
                          border: "1px solid #00bb6d",
                        }}
                        whileTap={{ scale: 1 }}
                        className="placeorder-btn shadow"
                      >
                        Place Order
                      </motion.button>
                    </Col>
                  </Row>
                </form>
              </Col>
              {/* Car details */}
              <Col xs={12} md={6} lg={6}>
                <Card className="p-3 border-0 shadow rounded w-75 m-auto">
                  <Card.Img variant="top" src={car?.img} className="rounded" />
                  <Card.Body>
                    <Card.Text className="text-muted">
                      {readMore ? car?.des : car?.des?.slice(0, 88)}
                      <span onClick={handelRead} className="readmore">
                        {readMore ? "Read less" : "Read more..."}
                      </span>{" "}
                    </Card.Text>
                    <h5 style={{ color: "#F07900" }}>Price : ${car?.price}</h5>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Purchase;
