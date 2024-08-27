import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./__check.scss";
import axios from "axios";

function CheckoutPage() {
  const location = useLocation();
  const { cartItems, totalPrice } = location.state;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    telegramId: "" // Новое поле для Telegram ID
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:3001/send-order", {
        ...formData,
        cartItems,
        totalPrice,
      })
      .then((response) => {
        alert("Заказ отправлен!");
      })
      .catch((error) => {
        console.error("Ошибка при отправке заказа:", error);
        alert("Ошибка при отправке заказа");
      });
  };

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
              <input
                type="text"
                placeholder="Имя и Фамилия"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="number"
                placeholder="Телефон"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Электронная Почта"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Ваш адрес"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Ваш Telegram ID"
                name="telegramId"
                value={formData.telegramId}
                onChange={handleInputChange}
              />
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

                <button
                  className="checkoutPage__confirmButton"
                  onClick={handleSubmit}
                >
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