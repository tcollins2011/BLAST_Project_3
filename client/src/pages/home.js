import React, { useState, useEffect } from "react";
import "./home.css";
import {Jumbotron,Container} from "react-bootstrap";

function Home() {
  const imgMyimageexample = require("../utils/backgroundImages/DNA_Helix.png");
  const divStyle = {
    width: "100wh",
    height: "100vh  ",
    backgroundImage: `url(${imgMyimageexample})`,
    backgroundSize: "cover",
    opacity: "50%",
  };
  return (
    <div style={divStyle}>
      <Jumbotron fluid>
        <Container>
          <h1>Welcome To EasyBLAST</h1>
          <p>
            EasyBLAST is a site designed to teach you the basics of how a BLAST search works. Click on the links above to get started.
          </p>
        </Container>
      </Jumbotron> 
    </div>
  );
}

export default Home;
