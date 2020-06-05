import React, { useState, useEffect } from "react";
import Image from "../components/Images";
import "./explanation.css";
import {Container, Row, Col} from "react-bootstrap"
import Image1 from "../utils/blastImages/Figure_1.jpg"
import Image2 from "../utils/blastImages/Figure_2.png"
import Image3 from "../utils/blastImages/Figure_3.jpg"
// import FigureOne from "../utils/blast images/FigureOne.jpg"
function Explanation() {
  return (
    <Container fluid>
      <h1>So How Does this Search Work?</h1>
      <Container className = 'textArea'>
        <Row>
          <li>Remove low-complexity query regions </li>
          <p>
            A "low-complexity region" refers to any area of the query that is
            composed of repeating elements. These regions have the possibility to
            confuse the program to cause it to incorrectly determine areas of
            significance. As a result these areas are filtered by an algorithm known
            as SEG to remove them.
          </p>
        </Row>
        <Row>
          <li> Make a k-letter word list of the query sequence</li>
          <p>
            For a protein we create as many sequential words of length 3, known as
            kmers, from the query as possible (see figure 1).{" "}
          </p>
        </Row>
        <Row>
          <li>Determine word score with BLOSUM 62.</li>
          <p>BLAST then assigns a score to each 3 letter word based on </p>
        </Row>
        <Row>
          <li>Organize the remaining high-scoring words into an efficient search tree.</li>
          <p>
            This allows the program to rapidly compare the high-scoring words to the
            database sequences.
          </p>
        </Row>
        <Row>
          <li>Repeat step 3 to 4 for each k-letter word in the query sequence.</li>
        </Row>
        <Row>
           <li>Scan the database sequences for exact matches with the remaining high-scoring words.</li>
          <p>
            The BLAST program scans the database sequences for the remaining
            high-scoring word, such as PEG, of each position. If an exact match is
            found, this match is used to seed a possible un-gapped alignment between
            the query and database sequences.
          </p>
        </Row>
        <Row>
          <li>Extend the exact matches to high-scoring segment pair (HSP).</li>
          <p>
            The original version of BLAST stretches a longer alignment between the
            query and the database sequence in the left and right directions, from
            the position where the exact match occurred. The extension does not stop
            until the accumulated total score of the HSP begins to decrease. A
            simplified example is presented in figure 2.
          </p>
        </Row>
        <Row>
          <li> List all of the HSPs in the database whose score is high enough to be considered. </li>
          <p>
            We list the HSPs whose scores are greater than the empirically
            determined cutoff score S. By examining the distribution of the
            alignment scores modeled by comparing random sequences, a cutoff score S
            can be determined such that its value is large enough to guarantee the
            significance of the remaining HSPs.
          </p>
        </Row>
        <Row>
          <li>Evaluate the significance of the HSP score.</li>
        </Row>
        <Row>
          <li>Make two or more HSP regions into a longer alignment.</li>
          <p>
            Sometimes, we find two or more HSP regions in one database sequence that
            can be made into a longer alignment. This provides additional evidence
            of the relation between the query and database sequence. There are two
            methods, the Poisson method and the sum-of-scores method, to compare the
            significance of the newly combined HSP regions. Suppose that there are
            two combined HSP regions with the pairs of scores (65, 40) and (52, 45),
            respectively. The Poisson method gives more significance to the set with
            the maximal lower score (45>40). However, the sum-of-scores method
            prefers the first set, because 65+40 (105) is greater than 52+45(97).
            The original BLAST uses the Poisson method; gapped BLAST and the
            WU-BLAST uses the sum-of scores method.
          </p>
        </Row>
        <Row>
        <li>Show the gapped Smith-Waterman local alignments of the query and each of the matched database sequences.</li>
        </Row>
        <Row>
        <li> Report every match whose expect score is lower than a threshold parameter E.</li>
        </Row>
      </Container>
      <Container className = 'imageArea'>
        <Row>
          <img src={Image1}  alt =""></img> 
          
        </Row>
        <Row>
        <img src={Image2}  alt =""></img>  
        
        </Row>
        <Row>
        <img src={Image3}  alt =""></img> 
        
        </Row>
      </Container>
    </Container>
  );
}

export default Explanation;
