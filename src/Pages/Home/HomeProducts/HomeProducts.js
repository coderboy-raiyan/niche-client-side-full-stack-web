import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
import styled from "styled-components";
import useProductContext from "../../Hooks/useProductContext";
import ProductSkeliton from "../../LoadingSkelitons/ProductSkeliton";
import SingalProduct from "../../Shared/SingalProduct/SingalProduct";
// progress bar
TopBarProgress.config({
  barColors: {
    0: "#f22626",
    "1.0": "#f22626",
  },
  shadowBlur: 5,
});

const HomeProducts = () => {
  const { products, isProductLoading } = useProductContext();
  console.log(products);
  return (
    <Wrapper className="creative-services" id="creative-services">
      <Container>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <div className="services-title text-center py-5">
              <Title>Creative Services</Title>
              <ServiceDes>
                Amazing service. House inspection, pick up facilities, spot
                document and instant money transfer. Amazing staff.
              </ServiceDes>
            </div>
          </Col>
        </Row>
        <div className="home-car-services">
          <Row className="g-4 py-5">
            {isProductLoading && <TopBarProgress />}
            {products
              .slice(0, 6)
              .map((product) =>
                isProductLoading ? (
                  <ProductSkeliton key={product._id} />
                ) : (
                  <SingalProduct key={product._id} product={product} />
                )
              )}
          </Row>
          <Row>
            <Col md={12} sm={12} lg={12}>
              <div className="explore-btn my-4">
                <Link className="text-decoration-none" to="/products">
                  <ExploreBtn className="d-block m-auto ">
                    More cars <BsArrowRight className="ms-3" />{" "}
                  </ExploreBtn>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Wrapper>
  );
};

// Styles

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 50px 0;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const ExploreBtn = styled.button`
  background: transparent;
  color: #00bb6d;
  border: 1px solid #00bb6d;
  border-radius: 10px;
`;
const ServiceDes = styled.p`
  font-size: 18px;
  width: 60%;
  margin: auto;
  color: #545252fa;
  line-height: 30px;
`;

export default HomeProducts;
