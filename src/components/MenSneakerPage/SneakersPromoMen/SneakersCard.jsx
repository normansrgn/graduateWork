import React, { useState } from "react";
import { Link } from "react-router-dom";

function SneakerCard(props) {
  const [showNotification, setShowNotification] = useState(false);

  const addToCart = () => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const newItem = {
      img: props.img,
      title: props.title,
      price: props.price,
    };
    currentCart.push(newItem);
    localStorage.setItem("cart", JSON.stringify(currentCart));

    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="col-xxl-4 col-sm-6 col-md-7">
      <div className="sneaker__card">
        <img src={props.img} alt={props.title} />
        <div className="sneaker__cardText">
          <h2 className="sneaker__cardTitle">{props.title}</h2>
          <div className="sneaker__cardPrice">
            <span>{props.price}₽</span>
            <button onClick={addToCart}>Купить</button>
          </div>
        </div>
      </div>

      {showNotification && (
        <Link to="/basket">
          <div className="notification">Товар добавлен в корзину!</div>
        </Link>
      )}
    </div>
  );
}

export default SneakerCard;
