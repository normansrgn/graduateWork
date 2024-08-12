import { Component } from "react";

import { Container } from "react-bootstrap";

import "./__basketitems.scss";
import BasketCard from "./BasketCard";

function BasketItems() {
  return (
    <>
      <section className="basketItem">
        <Container className="basketItem__container">
          <h1 className="basketItem__title">Корзина</h1>
          <BasketCard />
        </Container>
      </section>
    </>
  );
}

export default BasketItems;
