import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import Rating from "react-rating";
import Swal from "sweetalert2";
import ManageOrderSke from "../../LoadingSkelitons/ManageOrderSke";
import useProductContext from "./../../Hooks/useProductContext";

const ManageProducts = () => {
  const { products, isProductLoading, setIsProductCahnge } =
    useProductContext();

  // Delete a product

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/product/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              console.log(data);
              Swal.fire(
                "Deleted!",
                "Your Product has been deleted.",
                "success"
              );
              setIsProductCahnge(true);
            }
          })
          .finally(() => {
            setIsProductCahnge(false);
          });
      } else {
        Swal.fire("Ok", "No problem.", "info");
      }
    });
  };

  return (
    <section className="manage-products">
      <Container>
        <Row>
          <Col md={12} lg={12} xs={12}>
            <h1 className="text-center my-5">All Products</h1>
          </Col>
          <Col xs={12} lg={12} md={12}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Car Name</th>
                  <th>Price</th>
                  <th>Ratings</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  return isProductLoading ? (
                    <ManageOrderSke />
                  ) : (
                    <tr key={product._id}>
                      <td>{product.name}</td>
                      <td>$ {product.price}</td>
                      <td>
                        <Rating
                          emptySymbol={<i className="bi bi-star-half"></i>}
                          fullSymbol={<i className="bi bi-star-fill"></i>}
                          readonly
                          initialRating={Number(product.ratings)}
                        />
                      </td>
                      <td>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handelDelete(product._id)}
                          className="btn btn-transparent d-block m-auto"
                        >
                          <AiOutlineDelete size={30} className="text-danger" />
                        </motion.button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ManageProducts;
