import React, { useState, useEffect } from "react";
import "./__BasketCard.scss";

import { Link, useNavigate } from "react-router-dom";

function BasketCard() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [removingItems, setRemovingItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  
    const total = cart.reduce((sum, item) => {
      const priceString = String(item.price).replace(/\D/g, "");
      return sum + parseFloat(priceString);
    }, 0);
  
    setTotalPrice(total);
  }, []);

  const removeFromCart = (indexToRemove) => {
    setRemovingItems([...removingItems, indexToRemove]);

    setTimeout(() => {
      const updatedCart = cartItems.filter(
        (_, index) => index !== indexToRemove
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItems(updatedCart);

      const total = updatedCart.reduce(
        (sum, item) => sum + parseFloat(item.price.replace(/\D/g, "")),
        0
      );

      setTotalPrice(total);

      setRemovingItems(
        removingItems.filter((index) => index !== indexToRemove)
      );
    }, 500);
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems, totalPrice } });
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <section className="basketCard__emty">
          <span>Ваша корзина пуста</span>
          <Link to="home">
            <button>Перейти к покупкам</button>
          </Link>
        </section>
      ) : (
        <>
          <h1 className="basketItem__title">Корзина</h1>

          {cartItems.map((item, index) => (
            <div
              key={index}
              className={`col-xxl-6 basketCard__container ${
                removingItems.includes(index) ? "basketCard__removing" : ""
              }`}
            >
              <section className="basketCard">
                <img
                  src={item.img}
                  alt={item.title}
                  className="basketCard__image"
                />
                <div className="basketCard__title">{item.title}</div>
                <div className="basketCard__price">
                  {item.price}₽
                  <button
                    onClick={() => removeFromCart(index)}
                    className="basketCard__removeButton"
                  >
                    x
                  </button>
                </div>
              </section>
            </div>
          ))}
          <div className="col-xxl-6">
            <section className="basketCardInfo">
              <div className="basketCardInfo__title">ИТОГО:</div>
              <div className="basketCardInfo__price">{totalPrice}₽</div>
            </section>
          </div>
          <div className="col-xxl-6">
            <button className="basketButton" onClick={handleCheckout}>
              ПЕРЕЙТИ К ОФОРМЛЕНИЮ
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default BasketCard;