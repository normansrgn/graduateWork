import React from "react";

import { Container } from "react-bootstrap";

import "./__BasketCard.scss";
import image from "../SneakersPromo/images/1.png";

function BasketCard() {
  return (
    <>
      <div className="col-xxl-6">
        <section className="basketCard">
          <img src={image} alt="image" className="basketCard__image" />
          <div className="basketCard__title">Air Jordan 5 Retro</div>
          <div className="basketCard__price">$200</div>
        </section>
      </div>
    </>
  );
}

export default BasketCard;
