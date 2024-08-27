// src/components/CheckoutPage.jsx
import React from "react";

import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./__check.scss";

function CheckoutPage() {
  const location = useLocation();
  const { cartItems, totalPrice } = location.state;

  return (
    <>
      <h1 className="checkoutPage__title">Оформление заказа</h1>

      <Container>
        <h2 className="userInfo__title">Личные данные</h2>
      </Container>
      <Container className="checkCont">
        <div className="userInfo">
          <div className="userInfo__content">
            <form action="" className="userInfo__form">
              <input type="text" placeholder="Имя и Фамилия" />
              <input type="number" placeholder="Телефон" />
              <input type="text" placeholder="Электронная Почта" />
            </form>
          </div>
          <div className="userInfo__content">
            <h2 className="userInfo__title">Адрес доставки</h2>
            <form action="" className="userInfo__form">
              <input type="text" placeholder="Ваш адрес" />
            </form>
          </div>
        </div>
        <div className="checkoutPage">
          {cartItems.length > 0 ? (
            <>
              <div className="checkoutPage__card">
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
                  <span>К оплате:</span> <span>${totalPrice}</span>
                </div>

                <button className="checkoutPage__confirmButton">
                  Перейти к оплате
                </button>
              </div>
            </>
          ) : (
            <p>Ваша корзина пуста</p>
          )}
        </div>
      </Container>
    </>
  );
}

export default CheckoutPage;
