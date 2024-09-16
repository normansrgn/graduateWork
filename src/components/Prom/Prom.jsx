import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./__prom.scss";

import image from "./image.png";
import pro from "./pro.png";

export default class Prom extends Component {
  render() {
    return (
      <section className="prom">
        <Container className="prom__container">
          <h1 className="promo_title">
            All <span> the sneakers </span> You want are here
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lorem sit aenean erat
            tincidunt nulla potenti vulputate.{" "}
          </p>
          <div className="prom__buttons">
            <button className="prom__shopBtn">SHOP NOW</button>
            {/* <button className="prom__collectiobBtn">ALL COLLECTIONS</button> */}
          </div>
        </Container>
        <img className="prom__hrImg" src={image} alt="" />
      </section>
    );
  }
}
