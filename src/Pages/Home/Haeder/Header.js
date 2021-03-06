import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Swal from "sweetalert2";
import useAuth from "./../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

  const handelLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to log out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut();
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      } else {
        Swal.fire("OK", "No problem.", "info");
      }
    });
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      className="shadow-sm border-bottom sticky-top"
      stik
    >
      <Container fluid>
        <Link to="/" className="navbar-brand">
          <img
            src="https://i.postimg.cc/qvX3nsL7/cars-logo.png"
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
            <li
              className="nav-item me-3 py-2"
              onClick={() => window.scrollTo(0, 0)}
            >
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item me-3 py-2">
              <HashLink className="nav-link" to="/home#reviews-section">
                Reviews
              </HashLink>
            </li>
            <li className="nav-item me-3 py-2">
              <Link
                className="nav-link"
                to="/products"
                onClick={() => window.scrollTo(0, 0)}
              >
                Explore
              </Link>
            </li>
            {user.email ? (
              <>
                <li className="nav-item me-3 py-2">
                  <Link
                    className="nav-link"
                    to="/dashboard"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    DashBoard
                  </Link>
                </li>
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
                    <button
                      className="nav-link btn btn-light"
                      onClick={handelLogout}
                    >
                      <FiLogOut size={20} />
                    </button>
                  </div>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item me-3 py-2">
                  <Link
                    className="nav-link"
                    to="/login"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item me-3 py-2">
                  <Link
                    className="nav-link"
                    to="/register"
                    onClick={() => window.scrollTo(0, 0)}
                  >
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
