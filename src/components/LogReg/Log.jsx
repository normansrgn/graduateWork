import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./__logReg.scss";

function Login() {
  return (
    <>
      <section className="login">
        <div className="login__container">
          <h1 className="login__title">Вход</h1>
          <form action="" className="login__form">
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
                  <path d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z"></path>
                </svg>
              </i>
              <input
                type="password"
                className="login__input"
                placeholder="Пароль"
              />
            </div>
            <div className="login__button">
              <Link to="/">
                <button>Войти</button>
              </Link>
              <div className="login__btnText">
                <Link to="/reg">
                  <span>Зарегистрироваться</span>
                </Link>
                , если первый раз на сайте
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
