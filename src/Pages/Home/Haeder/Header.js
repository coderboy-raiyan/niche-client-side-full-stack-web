import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import useAuth from "./../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm border-bottom">
      <Container>
        <Link to="/" className="navbar-brand">
          <img
            src="https://i.ibb.co/S7wpkHw/cars-logo.png"
            alt=""
            width="100px"
          />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="text-center">
          <Nav
            className="ms-auto my-2  my-lg-0"
            style={{ maxHeight: "100%", fontWeight: "600" }}
          >
            <li className="nav-item me-3 py-2">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item me-3 py-2">
              <Link className="nav-link" to="/products">
                Explore
              </Link>
            </li>
            {user.email ? (
              <li className="nav-item d-flex justify-content-center align-items-center  me-3">
                <div>
                  <img
                    src={user?.photoURL}
                    alt=""
                    width="50px"
                    height="50px"
                    className="rounded-circle "
                  />
                </div>
                <h6 className="ms-3 mb-0">{user?.displayName}</h6>
                <div className="  me-3">
                  <button className="nav-link btn btn-light" onClick={logOut}>
                    <FiLogOut size={20} />
                  </button>
                </div>
              </li>
            ) : (
              <>
                <li className="nav-item me-3 py-2">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item me-3 py-2">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
