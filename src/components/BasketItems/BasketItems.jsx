import React from "react";

import { Container } from "react-bootstrap";

import "./__basketitems.scss";
import BasketCard from "./BasketCard";

function BasketItems() {
  return (
    <>
      <section className="basketItem">
        <Container className="basketItem__container">
          <BasketCard />
        </Container>
      </section>
    </>
  );
}

export default BasketItems;
