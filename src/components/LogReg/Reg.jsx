import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./__logReg.scss";

function Registr() {
  return (
    <>
      <section className="reg">
        <Container className="login__container">
          <h1 className="reg__title">Регистрация</h1>
          <form action="" className="login__form">
            <input type="text" className="login__input" placeholder="Имя" />
            <input type="number" className="login__input" placeholder="Номер телефона" />
            <input
              type="password"
              className="login__input"
              placeholder="Придумайте пароль"
            />
             <input
              type="password"
              className="login__input"
              placeholder="Повотрите пароль"
            />
            <div className="login__button">
              <Link to="/">
                <button>Зарегистрироваться</button>
              </Link>
              <div className="login__btnText">
                <Link to="/log">
                  <span>Войти</span>
                </Link>
                , если уже есть аккаунт
              </div>
            </div>
          </form>
        </Container>
      </section>
    </>
  );
}

export default Registr;
