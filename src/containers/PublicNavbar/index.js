import { Nav, Navbar } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../redux/actions/";

const PublicNavbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  const dispatch = useDispatch();

  const handleLogout = () => {
    // TODO: handle Logout
    dispatch(authActions.logOut());
  };

  const authLinks = (
    <Nav>
      <Nav.Link as={Link} to="/dashboard">
        <i className="fas fa-chart-line" /> Dashboard
      </Nav.Link>
      <Nav.Link onClick={handleLogout}>
        <i className="fas fa-sign-out-alt" /> Logout
      </Nav.Link>
    </Nav>
  );
  const publicLinks = (
    <Nav>
      <Nav.Link as={Link} to="/register">
        <i className="fas fa-registered" /> Register
      </Nav.Link>
      <Nav.Link as={Link} to="/login">
        <i className="fas fa-sign-in-alt" /> Login
      </Nav.Link>
    </Nav>
  );

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/" className="mr-auto">
        <img
          src="data:image/png;base64,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"
          alt="CoderSchool"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        {/* authLinks logout, publicLinks login */}
        {!loading && <>{isAuthenticated ? authLinks : publicLinks}</>} 
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PublicNavbar;
