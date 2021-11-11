import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ManageOrderSke = () => {
  return (
    <tr>
      <td>
        <Skeleton height={30} />
      </td>
      <td>
        <Skeleton height={30} />
      </td>
      <td>
        <Skeleton height={30} />
      </td>
      <td>
        <Skeleton height={30} />
      </td>
    </tr>
  );
};

export default ManageOrderSke;
