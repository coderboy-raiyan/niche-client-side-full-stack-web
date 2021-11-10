import { useContext } from "react";
import { ProductContext } from "./../Context/ProductProvider";

const useProductContext = () => {
  return useContext(ProductContext);
};
export default useProductContext;
