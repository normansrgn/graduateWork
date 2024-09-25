import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

import "./__prom.scss";

import image from "./image.png";
import pro from "./pro.png";

export default class Prom extends Component {
  componentDidMount() {
    Aos.init({ duration: 1000 }); // Инициализация AOS с настройками
  }

  render() {
    return (
      <section className="prom">
        <Container className="prom__container">
          <h1 className="promo_title" data-aos="fade-up">
            All <span> the sneakers </span> You want are here
          </h1>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur. Lorem sit aenean erat
            tincidunt nulla potenti vulputate.{" "}
          </p>
          <div className="prom__buttons" data-aos="fade-up">
            <button className="prom__shopBtn">SHOP NOW</button>
            {/* <button className="prom__collectiobBtn">ALL COLLECTIONS</button> */}
          </div>
        </Container>
        <img data-aos="fade-up" className="prom__hrImg" src={image} alt="" />
      </section>
    );
  }
}