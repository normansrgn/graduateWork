import React from "react";

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./__logReg.scss";

function Login() {
  return (
    <>
      <section className="login">
        <Container className="login__container">
          <h1 className="login__title">Войти</h1>
          <form action="" className="login__form">
            <input type="text" className="login__input" placeholder="Логин" />
            <input
              type="password"
              className="login__input"
              placeholder="Пароль"
            />
            <div className="login__button">
              <button>Войти</button>
              <div className="login__btnText">
                <Link to="/">
                  <span>Зарегистрироваться</span>
                </Link>
                , если первый раз на сайте
              </div>
            </div>
          </form>
        </Container>
      </section>
    </>
  );
}

export default Login;
