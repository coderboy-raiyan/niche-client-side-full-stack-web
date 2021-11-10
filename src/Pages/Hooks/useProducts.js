import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isProductLoading, setProductLoading] = useState(true);

  useEffect(() => {
    setProductLoading(true);
    setTimeout(() => {
      setProductLoading(false);
    }, 4000);
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => {
        // setProductLoading(false);
      });
  }, []);

  return {
    products,
    isProductLoading,
  };
};

export default useProducts;
