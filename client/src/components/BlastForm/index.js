import React, { useContext, useRef } from "react";
import "./style.css";
import { Form, Button } from "react-bootstrap";
import BlastContext from "../../utils/blastContext";

function BlastForm() {
  const inputRef = useRef();
  const { nucleotides, setBlast } = useContext(BlastContext);
  const submitForm = (e) => {
    e.preventDefault();
    setBlast({ nucleotides: inputRef.current.value });
  };
  return (
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
      <fieldset className="hidden" id="outputWrapper">
        <h1>Output</h1>
        <textarea id="output" readOnly />

        <div className="loader hidden" id="blastLoader">
          Blasting...
        </div>
      </fieldset>
    </>
  );
}

export default BlastForm;
