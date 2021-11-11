import { css } from "@emotion/react";
import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import useAuth from "./../../Hooks/useAuth";

const override = css`
  display: block;
  margin: 20px auto;
`;

const PrivateDashBoard = ({ children, ...rest }) => {
  const { admin, isAdminLoading } = useAuth();
  let [color, setColor] = useState("#00BB6D");

  if (isAdminLoading) {
    return <MoonLoader color={color} css={override} size={100} />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        admin.admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateDashBoard;
