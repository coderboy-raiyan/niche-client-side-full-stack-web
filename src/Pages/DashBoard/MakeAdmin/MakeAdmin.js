import { motion } from "framer-motion";
import React from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    fetch("http://localhost:5000/user/admin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Wow Now you are a admin",
            showConfirmButton: false,
            timer: 1500,
          });
        } else if (data.matchedCount) {
          Swal.fire({
            icon: "info",
            title: "Oops...",
            text: "This email user is already an admin",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Opps! Email doesn't exists",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    reset();
  };
  return (
    <section className="make-admin">
      <Container>
        <Row className="d-flex justify-content-center align-items-center vh-100">
          <Col xs={12} lg={6} md={6}>
            <form
              className="bg-white shadow p-4 rounded"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Row>
                <Col xs={12} lg={12} md={12}>
                  <h3 className="text-center">Make an admin</h3>
                </Col>
                <Col xs={12} lg={12} md={12}>
                  <InputGroup className="mb-3 mt-4">
                    <FormControl
                      placeholder="Email"
                      required
                      {...register("email")}
                      type="email"
                      className="p-3 shadow border-2"
                    />
                  </InputGroup>
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

export default MakeAdmin;
