import React, { useState, useEffect } from "react";
import './home.css'


function Home() {  
    const imgMyimageexample = require('../utils/backgroundImages/DNA_Helix.png');
    const divStyle = {
    width: '100wh',
    height: '100vh  ',
    backgroundImage: `url(${imgMyimageexample})`,
    backgroundSize: 'cover',
    opacity: '50%'
}; 
    return(

        <div style ={divStyle}>
            <h1>Look at me</h1>
            <h2 style={{opacity: '100%'}}>IM here as well</h2>
    
        </div>
        
        
    )
}

export default Home