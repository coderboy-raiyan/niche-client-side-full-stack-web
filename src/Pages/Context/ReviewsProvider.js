import React, { createContext } from "react";
import useReviews from "./../Hooks/useReviews";

export const ReviewsContext = createContext();

const ReviewsProvider = ({ children }) => {
  const alldata = useReviews();
  return (
    <ReviewsContext.Provider value={alldata}>
      {children}
    </ReviewsContext.Provider>
  );
};

export default ReviewsProvider;
