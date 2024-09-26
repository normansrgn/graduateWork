import React, { useState, useEffect } from "react";
import "./__BasketCard.scss";
import trash from "./trash.svg";

import { Link, useNavigate } from "react-router-dom";

function BasketCard() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [removingItems, setRemovingItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);

    const total = cart.reduce(
      (sum, item) => sum + parseFloat(item.price.replace(/\D/g, "")),
      0
    );

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
                <div className="basketCard__overlay">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="basketCard__image"
                  />
                  <div className="basketCard__titleBl">
                    <div className="basketCard__title">{item.title}</div>
                    <div className="basketCard__size"> {item.size}</div>
                  </div>
                </div>
                <div className="basketCard__priceBlock">
                  <div className="basketCard__price">{item.price}₽</div>
                  <div
                    onClick={() => removeFromCart(index)}
                    className="basketCard__removeButton"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="19"
                      height="19"
                      fill="rgba(255,255,255,1)"
                    >
                      <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                    </svg>
                  </div>
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
