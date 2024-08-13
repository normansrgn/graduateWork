import React, { useState, useEffect } from "react";
import "./__BasketCard.scss";

function BasketCard() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  }, []);

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);

    const total = updatedCart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  };

  return (
    <>
      {cartItems.map((item, index) => (
        <div key={index} className="col-xxl-6 ">
          <section className="basketCard">
            <img
              src={item.img}
              alt={item.title}
              className="basketCard__image"
            />
            <div className="basketCard__title">{item.title}</div>
            <div className="basketCard__price">
              ${item.price}
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
          <div className="basketCardInfo__price">${totalPrice}</div>
        </section>
      </div>
      <div className="col-xxl-6">
        <button className="basketButton">ПЕРЕЙТИ К ОФОРМЛЕНИЮ</button>
      </div>
    </>
  );
}

export default BasketCard;
