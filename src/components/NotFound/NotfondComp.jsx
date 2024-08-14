import React from "react";

import { Container } from "react-bootstrap";

import "./__notfound.scss";

function NotfondComp() {
  return (
    <>
      <section className="notfound">
        <Container className="notfound__container">
          <h1> Page is non found</h1>
        </Container>
      </section>
    </>
  );
}

export default NotfondComp;
