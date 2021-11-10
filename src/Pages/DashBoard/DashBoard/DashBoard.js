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
import MyOrders from "../MyOrders/MyOrders";
import Reviews from "./../../Home/Reviews/Reviews";

const DashBoard = () => {
  const [show, setShow] = useState(false);
  let { path, url } = useRouteMatch();

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
                  <Link to={`${url}/myorders`}>My Orders</Link>
                </ListGroup.Item>
                <ListGroup.Item
                  className="border-bottom border-0 text-center"
                  onClick={handleClose}
                >
                  <Link to={`${url}/reviews`}>Reviews</Link>
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
                <Route path={`${path}/reviews`}>
                  <Reviews />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DashBoard;
