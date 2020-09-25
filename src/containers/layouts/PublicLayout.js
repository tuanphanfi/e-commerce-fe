import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import { Container } from "react-bootstrap";
import PublicNavbar from "../PublicNavbar";
import NotFoundPage from "./NotFoundPage";
import AlertMsg from "./Alert";
import PrivateRoute from "../Routes/PrivateRoute";
import AddEditItemPage from "../AddEditItemPage";
import Cart from "../../components/Cart";

import CheckoutSuccess from "../CheckoutSuccess";

const PublicLayout = () => {
  return (
    <>
      <PublicNavbar />
      
      <Container>
        <AlertMsg />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <PrivateRoute exact path="/item/add" component={AddEditItemPage} />

          <PrivateRoute exact path="/item/cart" component={Cart} />
          <PrivateRoute
            exact
            path="/item/checkout_success"
            component={CheckoutSuccess}
          />

        <PrivateRoute
            exact
            path="/item/edit/:id"
            component={AddEditItemPage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </>
  );
};

export default PublicLayout;
