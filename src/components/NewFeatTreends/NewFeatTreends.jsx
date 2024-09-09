import React from "react";
import "./__NewFeatTreends.scss"; 
import { Row } from "react-bootstrap";
import SneakerCard from "../SneakersPromo/SneakersCard"; 
import { sneakers } from "../SneakersPromo/data"; 

export default function NewFeatTrends() {

  const filteredSneakers = sneakers; 

  return (
    <section className="newFtrends">
      <h1 className="newFtrends__title">Тренды 2024</h1>
      <Row className="sneaker__row">
        {filteredSneakers.slice(0, 3).map((sneaker) => (
          <SneakerCard key={sneaker.id || sneaker.title} {...sneaker} /> 
        ))}
      </Row>
    </section>
  );
}