import React from "react";
import "./__our.scss";

import { Link } from "react-router-dom";

import mainImg from "./img/main.png";
import women from "./img/women.png";
import men from "./img/men.png";

export default function Our() {
  return (
    <section className="our">
      <h1>Наши коллекции обуви</h1>
      <div className="our__images">
        <div className="our__mainContainer">
          <img className="our__main" src={mainImg} alt="Основная коллекция" />
          <div className="our__textOverlay">Основная коллекция</div>
        </div>
        <div className="our__secImages">
          <Link to="/men">
            <div className="our__secImageContainer">
              <img src={men} alt="Мужская обувь" />
              <div className="our__textOverlay">Мужская обувь</div>
            </div>
          </Link>
          <Link to="/women">
            <div className="our__secImageContainer">
              <img src={women} alt="Женская обувь" />
              <div className="our__textOverlay">Женская обувь</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
