import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TopBarProgress from "react-topbar-progress-indicator";
import useProductContext from "./../Hooks/useProductContext";
import ProductSkeliton from "./../LoadingSkelitons/ProductSkeliton";
import SingalProduct from "./../Shared/SingalProduct/SingalProduct";
import "./Products.css";

// progress bar
TopBarProgress.config({
  barColors: {
    0: "#f22626",
    "1.0": "#f22626",
  },
  shadowBlur: 5,
});

const Products = () => {
  const { products, isProductLoading } = useProductContext();

  return (
    <section className="all-products">
      <div className="services-banner">
        <Container>
          <Row>
            <Col xs={12} md={12} lg={12}></Col>
          </Row>
        </Container>
      </div>
      <div className="all-services">
        <Container>
          <Row className="g-4 py-5">
            {isProductLoading && <TopBarProgress />}
            {products.map((product) =>
              isProductLoading ? (
                <ProductSkeliton key={product._id} />
              ) : (
                <SingalProduct product={product} key={product._id} />
              )
            )}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Products;
