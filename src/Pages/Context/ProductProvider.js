import React, { createContext } from "react";
import useProducts from "./../Hooks/useProducts";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const allProducts = useProducts();
  return (
    <ProductContext.Provider value={allProducts}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
