// src/components/CheckoutPage.jsx
import React from "react";

import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./__check.scss";

function CheckoutPage() {
  const location = useLocation();
  const { cartItems, totalPrice } = location.state;

  return (
    <div className="checkoutPage">
      <Container>
        <h1 className="checkoutPage__title">Оформление заказа</h1>
        {cartItems.length > 0 ? (
          <>
            <div className="col-xxl-6 checkoutPage__card">
              <div className="checkoutPage__items">
                {cartItems.map((item, index) => (
                  <div key={index} className="checkoutPage__item">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="checkoutPage__image"
                    />
                    <div className="checkoutPage__details">
                      <span className="checkoutPage__itemTitle">
                        {item.title}
                      </span>
                      <span className="checkoutPage__itemPrice">
                        ${item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="checkoutPage__total">
                <span>Итого:</span> <span>${totalPrice}</span>
              </div>
            </div>

            <button className="checkoutPage__confirmButton">
              Перейти к оплате
            </button>
          </>
        ) : (
          <p>Ваша корзина пуста</p>
        )}
      </Container>
    </div>
  );
}

export default CheckoutPage;
