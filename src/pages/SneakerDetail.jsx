import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { sneakers } from "../components/MenSneakerPage/SneakersPromoMen/data";
import { Container } from "react-bootstrap";
import "./SneakerDetail.scss";

function SneakerDetail() {
  const { id } = useParams();
  const [showNotification, setShowNotification] = useState(false);

  const sneaker = sneakers.find((s) => s.id === parseInt(id));

  if (!sneaker) {
    return <h2>Товар не найден</h2>;
  }

  const handleAddToCart = () => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const newItem = {
      img: sneaker.img,
      title: sneaker.title,
      price: sneaker.price,
    };
    currentCart.push(newItem);
    localStorage.setItem("cart", JSON.stringify(currentCart));

    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <section className="sneaker__detail">
      <Container>
        <div className="sneaker__card">
          <img src={sneaker.img} alt={sneaker.title} />
          <div className="sneaker__cardText">
            <h2 className="sneaker__cardTitle">{sneaker.title}</h2>
            <div className="sneaker__cardPrice">
              <span>{sneaker.price}₽</span>
              <button onClick={handleAddToCart}>Купить</button>
            </div>
          </div>
        </div>
        {showNotification && (
          <Link to="/basket">
          <div className="notification">Товар добавлен в корзину!</div>
          </Link>
        )}
      </Container>
    </section>
  );
}

export default SneakerDetail;
