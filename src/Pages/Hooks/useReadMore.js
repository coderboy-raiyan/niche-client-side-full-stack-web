import { useState } from "react";

const useReadMore = () => {
  const [readMore, setReadMore] = useState(false);

  const handelRead = () => {
    setReadMore(!readMore);
  };

  return {
    handelRead,
    readMore,
  };
};

export default useReadMore;
