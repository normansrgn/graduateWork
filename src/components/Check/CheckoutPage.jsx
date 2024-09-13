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
              <div className="login__input">
                <i className="login__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    fill="rgba(255,254,254,1)"
                  >
                    <path d="M3 6H21V18H3V6ZM2 4C1.44772 4 1 4.44772 1 5V19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19V5C23 4.44772 22.5523 4 22 4H2ZM13 8H19V10H13V8ZM18 12H13V14H18V12ZM10.5 10C10.5 11.3807 9.38071 12.5 8 12.5C6.61929 12.5 5.5 11.3807 5.5 10C5.5 8.61929 6.61929 7.5 8 7.5C9.38071 7.5 10.5 8.61929 10.5 10ZM8 13.5C6.067 13.5 4.5 15.067 4.5 17H11.5C11.5 15.067 9.933 13.5 8 13.5Z"></path>
                  </svg>
                </i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="Имя и Фамилия"
                />
              </div>
              <div className="login__input">
                <i className="login__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    fill="rgba(255,255,255,1)"
                  >
                    <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
                  </svg>
                </i>
                <input
                  type="number"
                  className="login__input"
                  placeholder="Номер телефона"
                />
              </div>
              <div className="login__input">
                <i className="login__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    fill="rgba(255,255,255,1)"
                  >
                    <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                  </svg>
                </i>
                <input
                  type="email"
                  className="login__input"
                  placeholder="Электронная почта"
                />
              </div>
            </form>
          </div>
          <div className="userInfo__content">
            <h2 className="userInfo__titleAdres">Адрес доставки</h2>
            <form action="" className="userInfo__form">
              <div className="login__input">
                <i className="login__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    fill="rgba(255,255,255,1)"
                  >
                    <path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM8 15H16V17H8V15Z"></path>
                  </svg>
                </i>
                <input
                  type="number"
                  className="login__input"
                  placeholder="Ваш адрес"
                />
              </div>
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
                          {item.price}₽
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <form action="" className="userInfo__form">
                  <div className="login__input">
                    <i className="login__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="28"
                        height="28"
                        fill="rgba(255,254,254,1)"
                      >
                        <path d="M2.00488 9.49979V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V9.49979C20.6242 9.49979 19.5049 10.6191 19.5049 11.9998C19.5049 13.3805 20.6242 14.4998 22.0049 14.4998V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V14.4998C3.38559 14.4998 4.50488 13.3805 4.50488 11.9998C4.50488 10.6191 3.38559 9.49979 2.00488 9.49979ZM4.00488 7.96755C5.4866 8.7039 6.50488 10.2329 6.50488 11.9998C6.50488 13.7666 5.4866 15.2957 4.00488 16.032V18.9998H20.0049V16.032C18.5232 15.2957 17.5049 13.7666 17.5049 11.9998C17.5049 10.2329 18.5232 8.7039 20.0049 7.96755V4.99979H4.00488V7.96755ZM9.00488 8.99979H15.0049V10.9998H9.00488V8.99979ZM9.00488 12.9998H15.0049V14.9998H9.00488V12.9998Z"></path>
                      </svg>
                    </i>
                    <input
                      type="text"
                      className="login__input"
                      placeholder="Введите промокод"
                    />
                  </div>
                </form>
                <div className="checkoutPage__total">
                  <div>К оплате:</div> <span>{totalPrice}₽</span>
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
