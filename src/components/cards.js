import React from "react";
import { Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Cards.css";

function CardsComponent({ icon }) {
  return (
    <Container className="cc">
      <FontAwesomeIcon className="fastyle" icon={icon} />
      <div style={{ flex: 1 }}>
        <h2 style={{ color: "white" }}>cjdncjdncj</h2>
        <p style={{ color: "white" }}>cjdndjcndjcdjndnc</p>
      </div>
    </Container>
  );
}

export default CardsComponent;
