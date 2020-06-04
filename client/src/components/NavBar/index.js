// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css";
// src/components/NavBar.js
// .. other imports

// NEW - import the Link component
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand style={{ color: "#66fcf1" }} href="/">
          EasyBLAST
        </Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink style={{ color: "#66fcf1" }} className="NavButton" to="/">
            Home
          </NavLink>
          <NavLink
            style={{ color: "#66fcf1" }}
            className="NavButton"
            to="/blast"
          >
            BLAST
          </NavLink>
          <NavLink
            style={{ color: "#66fcf1" }}
            className="NavButton"
            to="/explanation"
          >
            Explanation
          </NavLink>
        </Nav>
        <Form inline></Form>
        {!isAuthenticated && (
          <button className="LogButton" onClick={() => loginWithRedirect({})}>
            Log in
          </button>
        )}

        {isAuthenticated && (
          <button className="LogButton" onClick={() => logout()}>
            Log out
          </button>
        )}
      </Navbar>
    </div>
    //..
  );
};

export default NavBar;
