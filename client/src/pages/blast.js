import React, { useState, useEffect } from "react";
import Form from "../components/BlastForm";
import BlastContext from "../utils/blastContext";

function Blast() {
  const [blast, setBlast] = useState({
    nucleotides: "",
    loadingVisibility: "",
    outputVisibility: "",
  });

  useEffect(() => {
    if (blast.loadingVisibility === 'active'){
      setTimeout(() => {
        console.log('I waited 20 seconds')
        setBlast({...blast, loadingVisibility: "", outputVisibility: "active"})
    }  
    ,10000)
    }
  });
 


  return (
    <BlastContext.Provider
      value={{loadingVisibility: blast.loadingVisibility, outputVisibility: blast.outputVisibility, blast:blast, nucleotides: blast.nucleotides, setBlast: setBlast }}
    >
      <div>
        <h1>Test Blast</h1>
        <Form />
      </div>
    </BlastContext.Provider>
  );
}

export default Blast;
