import React, { useState, useEffect } from "react";
import "./home.css";

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
      <div className="DNA">
        <h1>What is EasyBLAST?</h1>
        <br></br>
        <p>EasyBLAST is a blahblahblahlahblah</p>
      </div>
    </div>
  );
}

export default Home;
