import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import "./__SneakersPromo.scss";

import SneakerCard from "./SneakersCard";
import { sneakers } from "./data";

export default class SneakersPromoMen extends Component {
  render() {
    return (
      <Row className="sneaker__row">
        {sneakers.map((sneaker) => (
          <SneakerCard key={sneaker.title} {...sneaker} />
        ))}
      </Row>
    );
  }
}
