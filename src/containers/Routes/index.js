import React from "react";
import { Route, Switch } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import PrivateRoute from "./PrivateRoute";
import DashboardPage from "../DashboardPage";

const Routes = (props) => {
  return (
    <Switch>
      <PrivateRoute exact path="/dashboard" component={DashboardPage} />
      <Route path="/" component={PublicLayout} />
    </Switch>
  );
};
export default Routes;
