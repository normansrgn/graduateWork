import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

import "../../SneakersPromo/__SneakersPromo.scss";

import SneakerCard from "../../SneakersPromo/SneakersCard";
import { menSneakers } from "./data";
import SlideBarCatalog from "../../SlideBarCatalog/SlideBarCatalog";

export default function SneakersPromoMen() {
  Aos.init({ duration: 1000 });
  return (
    <>
      <section className="sneaker__cnt">
        <SlideBarCatalog />
        <div className="sneaker__CardCont">
          <div className="sneaker__PriceFiltr" data-aos="fade-up">
            <span>
              Сортировка по: цена{" "}
              <select name="" id="">
                <option value="">возрастанию</option>
                <option value="">убыванию</option>
              </select>
            </span>
          </div>
          <Row className="sneaker__row">
            {menSneakers.map((sneaker) => (
              <SneakerCard
                key={sneaker.id}
                id={sneaker.id}
                img={sneaker.img}
                title={sneaker.title}
                price={sneaker.price}
              />
            ))}
          </Row>
        </div>
      </section>
    </>
  );
}
