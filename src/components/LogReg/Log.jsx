import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./__logReg.scss";

function Login() {
  return (
    <>
      <section className="login">
        <Container className="login__container">
          <h1 className="login__title">Вход</h1>
          <form action="" className="login__form">
            <input
              type="number"
              className="login__input"
              placeholder="Номер телефона"
            />
            <input
              type="password"
              className="login__input"
              placeholder="Пароль"
            />
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
        </Container>
      </section>
    </>
  );
}

export default Login;
