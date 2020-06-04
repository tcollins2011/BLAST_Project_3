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
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink
            style={{ margin: "0 30px" color: "#66fcf1" }}
            
            class="NavButton"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={{ margin: "0 30px" }}
            style={{ color: "#66fcf1" }}
            class="NavButton"
            to="/profile"
          >
            Features
          </NavLink>
          <NavLink
            style={{ margin: "0 30px" }}
            style={{ color: "#66fcf1" }}
            class="NavButton"
            to="#pricing"
          >
            Pricing
          </NavLink>
        </Nav>
        <Form inline>
          {!isAuthenticated && (
            <button onClick={() => loginWithRedirect({})}>Log in</button>
          )}

          {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
        </Form>
      </Navbar>
    </div>
    //..
  );
};

export default NavBar;
