import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";

import Home from "./Pages/Home";
import AuthPage from "./Pages/AuthPage";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <AuthPage />
        </Route>
        <PrivateRoute path="/home" exact>
          <Home />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
