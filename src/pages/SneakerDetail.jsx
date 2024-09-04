import React from "react";
import { useParams } from "react-router-dom";
import { sneakers } from "../components/SneakersPromo/data"; // Импортируйте данные о товарах

function SneakerDetail() {
  const { id } = useParams(); // Получаем ID из URL параметра
  const sneaker = sneakers.find((item, index) => index.toString() === id); // Ищем товар по ID

  if (!sneaker) {
    return <h2>Товар не найден</h2>;
  }

  return (
    <div className="sneaker__detail">
      <img src={sneaker.img} alt={sneaker.title} />
      <h2>{sneaker.title}</h2>
      <p>Цена: {sneaker.price}₽</p>
      <button>Добавить в корзину</button>
    </div>
  );
}

export default SneakerDetail;