import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isProductLoading, setProductLoading] = useState(true);
  const [isProductChange, setIsProductCahnge] = useState(false);

  useEffect(() => {
    setProductLoading(true);
    setTimeout(() => {
      setProductLoading(false);
    }, 4000);
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [isProductChange]);

  return {
    products,
    isProductLoading,
    setIsProductCahnge,
  };
};

export default useProducts;
