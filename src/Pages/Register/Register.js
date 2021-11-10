import { motion } from "framer-motion";
import React from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <section className="bg-light main-forms">
      <Container>
        <Row className="d-flex justify-content-center vh-100 align-items-center">
          <Col xs={12} lg={6} md={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="login-inner shadow-sm">
                <Row>
                  <Col xs={12} lg={12} md={12}>
                    <h5 className="text-center mb-4">Please Register</h5>
                  </Col>
                  <Col xs={12} lg={12} md={12}>
                    <InputGroup className="mb-3 login-input">
                      <FormControl
                        placeholder="Name"
                        required
                        type="text"
                        {...register("name")}
                      />
                    </InputGroup>
                  </Col>
                  <Col xs={12} lg={12} md={12}>
                    <InputGroup className="mb-3 login-input">
                      <FormControl
                        placeholder="Profile Picture url"
                        required
                        pattern="https://.*"
                        type="url"
                        {...register("img")}
                      />
                    </InputGroup>
                  </Col>
                  <Col xs={12} lg={12} md={12}>
                    <InputGroup className=" login-input mb-3">
                      <FormControl
                        placeholder="Email"
                        required
                        type="email"
                        {...register("email")}
                      />
                    </InputGroup>
                  </Col>
                  <Col xs={12} lg={12} md={12}>
                    <InputGroup className=" login-input mb-3">
                      <FormControl
                        placeholder="Password"
                        required
                        type="password"
                        {...register("password")}
                      />
                    </InputGroup>
                  </Col>
                  <Col xs={12} lg={12} md={12}>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 1 }}
                      className="d-block m-auto login-input-btn mb-4"
                    >
                      Register
                    </motion.button>
                  </Col>

                  <Col xs={12} lg={12} md={12}>
                    <p className="text-center my-2 text-muted">
                      Or Register with
                    </p>
                  </Col>

                  <Col xs={12} lg={12} md={12}>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 1 }}
                      className="login-btn"
                    >
                      <div className="google-icon">
                        <FcGoogle size={37} />
                      </div>
                      <div className="google-title">
                        <p className="disable-select">Connect with google </p>
                      </div>
                    </motion.div>
                  </Col>
                  <Col xs={12} lg={12} md={12}>
                    <p className="text-center">
                      Don’t have an account? Create here{" "}
                      <Link className="text-decoration-none" to="/register">
                        Register
                      </Link>
                    </p>
                  </Col>
                </Row>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
