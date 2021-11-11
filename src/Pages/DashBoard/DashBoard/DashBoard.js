import React, { useState } from "react";
import {
  Col,
  Container,
  ListGroup,
  Nav,
  Navbar,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { RiMenu3Line } from "react-icons/ri";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import MakeAdmin from "./../MakeAdmin/MakeAdmin";
import PrivateDashBoard from "./../PrivateDashBoard/PrivateDashBoard";
import Review from "./../Review/Review";

const DashBoard = () => {
  const [show, setShow] = useState(false);
  let { path, url } = useRouteMatch();
  const { logOut } = useAuth();

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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" variant="light" className="border-bottom shadow-sm">
        <Container>
          <Link className="navbar-brand" to="/dashboard">
            Dash Board
          </Link>
          <Nav className="ms-auto p-2">
            <li className="nav-item" onClick={handleShow}>
              <button className="nav-item btn btn-transparent">
                <RiMenu3Line size={30} />
              </button>
            </li>
          </Nav>
        </Container>

        <>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>All Menus</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0">
              <ListGroup>
                <ListGroup.Item
                  className="border-bottom border-0 text-center"
                  onClick={handleClose}
                >
                  <Link
                    className="text-decoration-none text-secondary"
                    to={`${url}/myorders`}
                  >
                    My Orders
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item
                  className="border-bottom border-0 text-center"
                  onClick={handleClose}
                >
                  <Link
                    className="text-decoration-none text-secondary"
                    to={`${url}/review`}
                  >
                    Reviews
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item
                  className="border-bottom border-0 text-center"
                  onClick={handleClose}
                >
                  <Link
                    className="text-decoration-none text-secondary"
                    to={`${url}/pay`}
                  >
                    Pay
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item
                  className="border-bottom border-0 text-center"
                  onClick={handleClose}
                >
                  <Link
                    className="text-decoration-none text-secondary"
                    to={`${url}/makeadmin`}
                  >
                    Make admin
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom  border-0 text-center">
                  <button className="btn btn-warning" onClick={handelLogout}>
                    Logout
                  </button>
                </ListGroup.Item>
              </ListGroup>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      </Navbar>

      {/* dashboard main starts here */}

      <section>
        <Container>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <Switch>
                <Route exact path={path}>
                  <MyOrders />
                </Route>
                <Route path={`${path}/myorders`}>
                  <MyOrders />
                </Route>
                <Route path={`${path}/review`}>
                  <Review />
                </Route>
                <Route path={`${path}/pay`}>
                  <Pay />
                </Route>
                <PrivateDashBoard path={`${path}/makeadmin`}>
                  <MakeAdmin />
                </PrivateDashBoard>
              </Switch>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DashBoard;
