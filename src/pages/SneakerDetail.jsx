import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { menSneakers } from "../components/MenSneakerPage/SneakersPromoMen/data";
import { womenSneakers } from "../components/WomenSneakerPage/SneakersPromoMen/data";
import { Container } from "react-bootstrap";
import "./SneakerDetail.scss";

function SneakerDetail() {
  const { id } = useParams();
  const [showNotification, setShowNotification] = useState(false);
  const sneakerId = parseInt(id);

  let sneaker = menSneakers.find((s) => s.id === sneakerId);

  if (!sneaker) {
    sneaker = womenSneakers.find((s) => s.id === sneakerId);
  }

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
    <section className="SneakerDetail">
      <Container className="SneakerDetail__container">
        <div className="SneakerDetail__pageCont">
          <div className="SneakerDetail__img">
            <img src={sneaker.img} alt={sneaker.title} />
          </div>
          <div className="SneakerDetail__text">
            <h2 className="SneakerDetail__cardTitle">{sneaker.title}</h2>
            <div className="SneakerDetail__cardPrice">
              <span>{sneaker.price}₽</span>
              <button onClick={handleAddToCart}>Купить</button>
            </div>
          </div>
        </div>
        <div className="SneakerDetail__aboutItem">
          <h3>О товаре</h3>
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
