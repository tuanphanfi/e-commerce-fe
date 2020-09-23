import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken && accessToken !== "undefined") {
      dispatch(authActions.getCurrentUser(accessToken));
    } else {
      dispatch(authActions.logOut());
    }
  }, [dispatch]);

  return (
    <>
      {isAuthenticated === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <Router>
          <Routes />
        </Router>
      )}
    </>
  );
}

export default App;
