import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import "./__SneakersPromo.scss";

import SneakerCard from "./SneakersCard";
import { sneakers } from "./data";
import SlideBarCatalog from "../../SlideBarCatalog/SlideBarCatalog";

export default class SneakersPromoMen extends Component {

  render() {
    return (
      <>
        <section className="sneaker__cnt">
          <SlideBarCatalog />
          <Row className="sneaker__row">
            {sneakers.map((sneaker) => (
              <SneakerCard key={sneaker.title} {...sneaker} />
            ))}
          </Row>
        </section>
      </>
    );
  }
}
