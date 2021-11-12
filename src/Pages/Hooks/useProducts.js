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
    fetch("https://arcane-dusk-87765.herokuapp.com/cars")
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
