import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Pay = () => {
  return (
    <section className="page-not">
      <Container>
        <Row className="py-4">
          <Col xs={12} lg={12} md={12}>
            <h3 className="text-center text-muted">
              Payment system coming soon
            </h3>
          </Col>
          <Col xs={12} lg={12} md={12}>
            <div className="not-found-image d-flex justify-content-center align-items-center flex-column">
              <div>
                <img
                  src="https://i.ibb.co/RzhnRyp/Under-construction-bro.png"
                  alt=""
                  width="500px"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Pay;
