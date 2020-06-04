import React from "react";
import {Image, Col, Container, Row} from "react-bootstrap"

function images(Props) {
    return(
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <Image src={Props.image} thumbnail />
                </Col>
            </Row>
        </Container>
    )
}

export default images;