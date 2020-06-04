import React, { useState, useEffect } from "react";
import Image from "../components/Images"
// import FigureOne from "../utils/blast images/FigureOne.jpg"
function Explanation () {
    return(
        <>
        <h1>So How Does this Search Work</h1>
        <li className ="bold">Remove low-complexity region or sequence repeats in the query sequence</li>
        <p>"Low-complexity region" means a region of a sequence composed of few kinds of elements. These regions might give high scores that confuse the program to find the actual significant sequences in the database, so they should be filtered out. The regions will be marked with an X (protein sequences) or N (nucleic acid sequences) and then be ignored by the BLAST program. To filter out the low-complexity regions, the SEG program is used for protein sequences and the program DUST is used for DNA sequences. On the other hand, the program XNU is used to mask off the tandem repeats in protein sequences.</p>
        <Image ></Image>
        <li> Make a k-letter word list of the query sequence</li>
        <p>Take k=3 for example, we list the words of length 3 in the query protein sequence (k is usually 11 for a DNA sequence) "sequentially", until the last letter of the query sequence is included. The method is illustrated in figure 1.</p>
        <li>List the possible matching words.</li>
        <p></p>
        <li>Organize the remaining high-scoring words into an efficient search tree.</li>
        <p>This allows the program to rapidly compare the high-scoring words to the database sequences.</p>
        <li>Repeat step 3 to 4 for each k-letter word in the query sequence.</li>
        <p></p>
        <li>Scan the database sequences for exact matches with the remaining high-scoring words.</li>
        <p>The BLAST program scans the database sequences for the remaining high-scoring word, such as PEG, of each position. If an exact match is found, this match is used to seed a possible un-gapped alignment between the query and database sequences.</p>
        <li>Extend the exact matches to high-scoring segment pair (HSP).</li>
        <p>The original version of BLAST stretches a longer alignment between the query and the database sequence in the left and right directions, from the position where the exact match occurred. The extension does not stop until the accumulated total score of the HSP begins to decrease. A simplified example is presented in figure 2.</p>
        <li>List all of the HSPs in the database whose score is high enough to be considered.</li>
        <p>We list the HSPs whose scores are greater than the empirically determined cutoff score S. By examining the distribution of the alignment scores modeled by comparing random sequences, a cutoff score S can be determined such that its value is large enough to guarantee the significance of the remaining HSPs.</p>
        <li>Evaluate the significance of the HSP score.</li>
        <p></p>
        <li>Make two or more HSP regions into a longer alignment.</li>
        <p>Sometimes, we find two or more HSP regions in one database sequence that can be made into a longer alignment. This provides additional evidence of the relation between the query and database sequence. There are two methods, the Poisson method and the sum-of-scores method, to compare the significance of the newly combined HSP regions. Suppose that there are two combined HSP regions with the pairs of scores (65, 40) and (52, 45), respectively. The Poisson method gives more significance to the set with the maximal lower score (45>40). However, the sum-of-scores method prefers the first set, because 65+40 (105) is greater than 52+45(97). The original BLAST uses the Poisson method; gapped BLAST and the WU-BLAST uses the sum-of scores method.</p>
        <li>Show the gapped Smith-Waterman local alignments of the query and each of the matched database sequences.</li>
        <p></p>
        <li>Report every match whose expect score is lower than a threshold parameter E.</li>
        <p></p>
        </>
        
    )
}

export default Explanation;