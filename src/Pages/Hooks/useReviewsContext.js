import { useContext } from "react";
import { ReviewsContext } from "./../Context/ReviewsProvider";

const useReviewsContext = () => {
  return useContext(ReviewsContext);
};
export default useReviewsContext;
