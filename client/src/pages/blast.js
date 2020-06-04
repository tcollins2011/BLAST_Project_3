import React, { useState, useEffect } from "react";
import Form from "../components/BlastForm"
import BlastContext from "../utils/blastContext"



function Blast() {
    const [blast, setBlast] = useState({
        nucleotides: "",
        outputVisibility: "hidden"
    })
   
    useEffect(() => {
        
    })
    const searchBlast = (e) => {
        console.log('hi')
    }
      
    return(
        <BlastContext.Provider value = {{nucleotides: blast.nucleotides, setBlast: setBlast}}> 
             <div>
                <h1>Test Blast</h1>
                <Form />
             </div>
        </BlastContext.Provider> 
    
    )
}


export default Blast