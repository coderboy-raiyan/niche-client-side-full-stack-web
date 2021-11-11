import { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isReviewChanged, setIsReviewChanged] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/user/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [isReviewChanged]);

  return {
    reviews,
    setIsReviewChanged,
  };
};
export default useReviews;
