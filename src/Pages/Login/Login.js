import { css } from "@emotion/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  Alert,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useHistory, useLocation } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import Swal from "sweetalert2";
import Header from "../Home/Haeder/Header";
import useAuth from "./../Hooks/useAuth";
import "./Login.css";

const override = css`
  display: block;
  margin: 20px auto;
`;

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  let [color, setColor] = useState("#00BB6D");
  const { signIn, error, setError, isAuthLoading, googleSignIn } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const handelGoogle = () => {
    googleSignIn(history, location);
  };

  const onSubmit = (data) => {
    console.log(data);
    if (data.password.length < 6) {
      setError("Password must be at least 6 characters!");
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 6 characters!",
        footer:
          '<a target="_blank" href="https://its.weill.cornell.edu/policies/1115-password-policy-and-guidelines">Why do I have this issue?</a>',
      });
    }

    signIn(data.email, data.password, history, location);
    setError("");
    reset();
  };
  return (
    <>
      <Header />
      <section className="bg-light py-5">
        {isAuthLoading && <MoonLoader color={color} css={override} size={60} />}
        <Container>
          <Row className="d-flex justify-content-center vh-100 align-items-center">
            <Col xs={12} lg={6} md={6}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="login-inner shadow-sm">
                  <Row>
                    <Col xs={12} lg={12} md={12}>
                      <h5 className="text-center">Please Login</h5>
                    </Col>
                    <Col xs={12} lg={12} md={12}>
                      <div className="px-5">
                        {error && <Alert variant="danger">{error}</Alert>}
                      </div>
                    </Col>
                    <Col xs={12} lg={12} md={12}>
                      <InputGroup className="mb-3 mt-4 login-input">
                        <FormControl
                          placeholder="Email"
                          required
                          type="email"
                          {...register("email")}
                        />
                      </InputGroup>
                    </Col>
                    <Col xs={12} lg={12} md={12}>
                      <InputGroup className="mb-3 login-input">
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
                        Login
                      </motion.button>
                    </Col>

                    <Col xs={12} lg={12} md={12}>
                      <p className="text-center my-2 text-muted">
                        Or login with
                      </p>
                    </Col>

                    <Col xs={12} lg={12} md={12}>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1 }}
                        className="login-btn"
                        onClick={handelGoogle}
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
    </>
  );
};

export default Login;
