import React from "react";

import { Container } from "react-bootstrap";
import NewFProm from "../components/NewFProm/NewFProm";
import NewFBlock from "../components/NewFBlock/NewFBlock";
import NewFeatTreends from "../components/NewFeatTreends/NewFeatTreends";
import Our from "../components/Our/Our";
import SubscribeUs from "../components/SubscribeUs/SubscribeUs";

export default function NewFeautered() {
  return (
    <>
      <section>
        <NewFProm />
        <Container>
          {/* <NewFBlock /> */}
          <NewFeatTreends />
          <Our />
          <SubscribeUs />
        </Container>
      </section>
    </>
  );
}
