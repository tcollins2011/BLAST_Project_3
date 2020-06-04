import React, { useState, useEffect } from "react";
import Form from "../components/BlastForm"
import BlastContext from "../utils/blastContext"

<<<<<<< HEAD
function Blast(props) {
  const [blast, setBlast] = useState({});

  // function saveUserInfo(id) {
  //     API.saveUser(id)
  //       .then(res => console.log('worked'))
  //       .catch(err => console.log(err));
  //   }

  // Make a state that uses the id from the logged in user
  // Make api call to blast
  //
  return <div>Im the Blast page</div>;
}

export default Blast;
=======


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
>>>>>>> 94621b3f77aa8ff0300234f83343d6a9ed049f89
