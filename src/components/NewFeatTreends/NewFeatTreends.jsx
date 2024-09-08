import React from "react";
import "./__NewFeatTreends.scss"; // Исправьте имя файла стилей
import { Row } from "react-bootstrap";
import SneakerCard from "../SneakersPromo/SneakersCard"; // Исправьте имя компонента
import { sneakers } from "../SneakersPromo/data"; // Убедитесь, что импортируете массив данных

export default function NewFeatTrends() {
  // Пример фильтрации данных, если нужно
  const filteredSneakers = sneakers; // Если фильтрация не нужна, используйте sneakers напрямую

  return (
    <section className="newFtrends">
      <h1 className="newFtrends__title">Тренды 2024</h1>
      <Row className="sneaker__row">
        {filteredSneakers.slice(0, 3).map((sneaker) => (
          <SneakerCard key={sneaker.id || sneaker.title} {...sneaker} /> // Используйте уникальный ключ
        ))}
      </Row>
    </section>
  );
}