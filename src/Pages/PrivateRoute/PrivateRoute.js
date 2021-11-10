import { css } from "@emotion/react";
import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import useAuth from "./../Hooks/useAuth";

const override = css`
  display: block;
  margin: 20px auto;
`;

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isAuthLoading } = useAuth();
  let [color, setColor] = useState("#00BB6D");

  if (isAuthLoading) {
    return <MoonLoader color={color} css={override} size={100} />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
