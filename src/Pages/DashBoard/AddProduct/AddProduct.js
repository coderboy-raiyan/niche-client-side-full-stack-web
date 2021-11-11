import { motion } from "framer-motion";
import React from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useProductContext from "./../../Hooks/useProductContext";
import "./AddProduct.css";
const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const { setIsProductCahnge } = useProductContext();
  const onSubmit = (data) => {
    console.log(data);

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire(
            "Good job!",
            "Your Product has been added successfully!",
            "success"
          );
          setIsProductCahnge(true);
        }
      })
      .finally(() => {
        setIsProductCahnge(false);
      });

    reset();
  };
  return (
    <section className="review-section">
      <Container>
        <Row className="d-flex justify-content-center align-items-center vh-100">
          <Col xs={12} lg={6} md={6}>
            <form
              className="bg-white shadow p-4 rounded"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Row>
                <Col xs={12} lg={12} md={12}>
                  <h3 className="text-center">Add a Product</h3>
                </Col>
                <Col xs={12} lg={12} md={12}>
                  <InputGroup className="mb-3 mt-4">
                    <FormControl
                      placeholder="Name"
                      required
                      {...register("name")}
                      type="text"
                      className="p-3 shadow border-2"
                    />
                  </InputGroup>
                </Col>
                <Col xs={12} lg={6} md={6}>
                  <InputGroup className="mb-3 ">
                    <FormControl
                      placeholder="Price"
                      required
                      {...register("price")}
                      type="number"
                      className="p-3 shadow border-2"
                    />
                  </InputGroup>
                </Col>
                <Col xs={12} lg={6} md={6}>
                  <InputGroup className="mb-3 ">
                    <FormControl
                      placeholder="Ratings ex : 4.3"
                      required
                      {...register("ratings", { min: 0, max: 5 })}
                      type="text"
                      className="p-3 shadow border-2"
                    />
                  </InputGroup>
                </Col>
                <Col xs={12} lg={12} md={12}>
                  <InputGroup className="mb-3 ">
                    <FormControl
                      placeholder="Product Image"
                      required
                      {...register("img")}
                      type="url"
                      className="p-3 shadow border-2"
                    />
                  </InputGroup>
                </Col>
                <Col xs={12} lg={12} md={12}>
                  <div className="form-floating">
                    <textarea
                      className="form-control shadow border-2"
                      {...register("des")}
                      required
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: "100px" }}
                    ></textarea>
                    <label htmlFor="floatingTextarea2">Description</label>
                  </div>
                </Col>

                <Col xs={12} lg={12} md={12}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="d-block w-100 rounded mt-4"
                  >
                    Submit
                  </motion.button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProduct;
