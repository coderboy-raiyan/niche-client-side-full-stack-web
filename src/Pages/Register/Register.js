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
import BounceLoader from "react-spinners/BounceLoader";
import Swal from "sweetalert2";
import useAuth from "./../Hooks/useAuth";

const override = css`
  display: block;
  margin: 20px auto;
`;

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const { googleSignIn, signUp, isAuthLoading, error, setError } = useAuth();
  const history = useHistory();
  const location = useLocation();
  let [color, setColor] = useState("#86e7d4");

  const handelGoogle = () => {
    googleSignIn(history, location);
  };

  const onSubmit = (data) => {
    console.log(data.conf_pass);

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

    if (data.password !== data.conf_pass) {
      setError("Password didn't match");
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password didn't match!",
        footer:
          '<a target="_blank" href="https://its.weill.cornell.edu/policies/1115-password-policy-and-guidelines">Why do I have this issue?</a>',
      });
    }

    signUp(data.email, data.password, data.name, data.img, history, location);
    reset();
  };
  return (
    <>
      <section className=" main-forms">
        {isAuthLoading && (
          <BounceLoader color={color} css={override} size={80} />
        )}
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
                      <div className="px-5">
                        {error && <Alert variant="danger">{error}</Alert>}
                      </div>
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
                      <InputGroup className=" login-input mb-3">
                        <FormControl
                          placeholder="Confirm Password"
                          required
                          type="password"
                          {...register("conf_pass")}
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
                        Already have an account? Create here{" "}
                        <Link className="text-decoration-none" to="/login">
                          Login
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

export default Register;
