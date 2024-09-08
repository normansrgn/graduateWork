import React from "react";

import { Container } from "react-bootstrap";
import NewFProm from "../components/NewFProm/NewFProm";

export default function NewFeautered() {
  return (
    <>
      <section className="newFeautered">
        <Container>
            <NewFProm />
        </Container>
      </section>
    </>
  );
}
