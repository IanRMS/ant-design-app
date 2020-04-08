import React from "react";
import { Route, Redirect } from "react-router-dom";
import Session from "../../Services/session";

export default function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        Session.isAuthenticated() ? (
          children
        ) : (
          <Redirect to={{ pathname: "/", state: { from: location } }} />
        )
      }
    />
  );
}
