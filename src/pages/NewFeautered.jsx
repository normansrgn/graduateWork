import React from "react";

import { Container } from "react-bootstrap";
import NewFProm from "../components/NewFProm/NewFProm";
import NewFBlock from "../components/NewFBlock/NewFBlock";
import NewFeatTreends from "../components/NewFeatTreends/NewFeatTreends";
import Our from "../components/Our/Our";

export default function NewFeautered() {
  return (
    <>
      <section>
        <NewFProm />
        <Container>
          <NewFBlock />
          <NewFeatTreends />
          <Our />
        </Container>
      </section>
    </>
  );
}
