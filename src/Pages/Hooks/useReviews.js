import { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isReviewChanged, setIsReviewChanged] = useState(false);

  useEffect(() => {
    fetch("https://arcane-dusk-87765.herokuapp.com/user/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [isReviewChanged]);

  return {
    reviews,
    setIsReviewChanged,
  };
};
export default useReviews;
