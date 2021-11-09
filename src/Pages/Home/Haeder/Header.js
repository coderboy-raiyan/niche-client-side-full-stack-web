import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Link to="/" className="navbar-brand">
          <img
            src="https://i.ibb.co/S7wpkHw/cars-logo.png"
            alt=""
            width="100px"
          />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2  my-lg-0" style={{ maxHeight: "100%" }}>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/products">
                Explore
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
