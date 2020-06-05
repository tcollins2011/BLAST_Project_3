import React, { useContext, useRef } from "react";
import "./style.css";
import { Form, Button } from "react-bootstrap";
import BlastContext from "../../utils/blastContext";

function BlastForm() {
    const inputRef = useRef()
    const {loadingVisibility,outputVisibility,blast,setBlast} = useContext(BlastContext);
    const submitForm = (e) => {
        e.preventDefault()
        setBlast({...blast,nucleotides:inputRef.current.value,loadingVisibility:"active",outputVisibility:""})
    }
    return(
        <>
            <Form>
                <Form.Group controlId="query">
                    <Form.Label className="title">Query:</Form.Label>
                    <Form.Control
                        className="textBox"
                        ref={inputRef}
                        as="textarea"
                        rows="3"
                    />
                </Form.Group>
                <Button
                    className="blastButton"
                    style={{ margin: "0 47%" }}
                    variant="primary"
                    onClick={submitForm}
                    type="submit"
                >
                BLAST!
                </Button>
            </Form>
            <div className={`loading ${loadingVisibility ? "" : "hidden"}`} id="blastLoader">Blast is comparing your sequence</div>
            <fieldset className={`loading ${outputVisibility ? "" : "hidden"}`}  id="outputWrapper">
                <h1>Output</h1>
                {/* <textarea id="output" readOnly/> */}
                <img src ={require("../../utils/searchimages/Image1.png")}></img>
                <img src ={require("../../utils/searchimages/Image2.PNG")}></img>

                
          </fieldset>
        </>
    )
}

export default BlastForm;
