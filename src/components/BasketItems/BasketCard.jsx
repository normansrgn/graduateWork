import React, { useState, useEffect } from "react";
import "./__BasketCard.scss";
import { Link, useNavigate } from "react-router-dom";

import { BsFillBasket2Fill } from "react-icons/bs";


function BasketCard() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [removingItems, setRemovingItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
      price: typeof item.price === "string" ? parseFloat(item.price.replace(/\D/g, "")) : item.price,
    }));
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  }, []);

  const calculateTotal = (cart) => {
    const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
    setTotalPrice(total);
  };

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const removeFromCart = (indexToRemove) => {
    setRemovingItems([...removingItems, indexToRemove]);
    setTimeout(() => {
      const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
      updateCart(updatedCart);
      setRemovingItems(removingItems.filter((index) => index !== indexToRemove));
    }, 300);
  };

  const updateQuantity = (index, change) => {
    const updatedCart = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    );
    updateCart(updatedCart);
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems, totalPrice } });
  };

  const formatPrice = (price) => {
    return price.toLocaleString("ru-RU") + "₽";
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <section className="basketCard__empty">

          <span>Ваша корзина пуста</span>
          <BsFillBasket2Fill size={80} />
          <Link to="/men">
            <button>Перейти к покупкам</button>
          </Link>
        </section>
      ) : (
        <>
          <h1 className="basketItem__title">Корзина</h1>
          {cartItems.map((item, index) => (
            <div
              key={`${item.title}-${item.size}-${index}`}
              className={`col-xxl-6 basketCard__container ${
                removingItems.includes(index) ? "basketCard__removing" : ""
              }`}
            >
              <section className="basketCard">
                <img src={item.img} alt={item.title} className="basketCard__image" />
                <div className="basketCard__text">
                  <div className="basketCard__title">{item.title}</div>
                  <div className="basketCard__size">Размер: {item.size}</div>
                  <div className="basketCard__controls">
                    <button
                      onClick={() => updateQuantity(index, -1)}
                      aria-label="Уменьшить количество"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(index, 1)}
                      aria-label="Увеличить количество"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="basketCard__price">
                  {formatPrice(item.price * item.quantity)}
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="basketCard__removeButton"
                  aria-label="Удалить товар"
                >
                  x
                </button>
              </section>
            </div>
          ))}
          <div className="col-xxl-6">
            <section className="basketCardInfo">
              <div className="basketCardInfo__title">ИТОГО:</div>
              <div className="basketCardInfo__price">{formatPrice(totalPrice)}</div>
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