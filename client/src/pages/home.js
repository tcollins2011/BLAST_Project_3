import React, { useState, useEffect } from "react";
import "./home.css";
import {Card,Body,Text} from "react-bootstrap";

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
      <Card className= "header">
      <div className="DNA">
        <h1>What is EasyBLAST?</h1>
        <br></br>
      </div>
      </Card>
      <Card className = 'cardBody'>
      <p>EasyBLAST is a site designed to teach you the basics of how a BLAST search works. Please start by creating an account and then try a BLAST search. </p>
      </Card>
      
    </div>
  );
}

export default Home;
