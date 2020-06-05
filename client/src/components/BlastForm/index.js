import React, { useContext, useRef } from "react";
import "./style.css";
import { Form, Button } from "react-bootstrap";
import BlastContext from "../../utils/blastContext";
import Row from "../row"

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
            <h1 className={` ${loadingVisibility ? "center" : "hidden"}`} id="blastLoader">Blast is comparing your sequence</h1>
            <fieldset  className={` ${outputVisibility ? "center" : "hidden"}`}  id="outputWrapper">
                <h1 className={` ${outputVisibility ? "center" : "hidden"}`}>Output</h1>
                {/* <textarea id="output" readOnly/> */}
                <Row>
                    <img className={` ${outputVisibility ? "centerImg" : "hidden"}`} src ={require("../../utils/searchimages/Image1.png")}></img>
                </Row>
                <Row>
                    <img className={` ${outputVisibility ? "centerImg" : "hidden"}`} src ={require("../../utils/searchimages/Image2.PNG")}></img>
                </Row>
                

                
          </fieldset>
        </>
    )
}

export default BlastForm;
