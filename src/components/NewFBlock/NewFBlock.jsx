import React from "react";

import "./__NewFBlock.scss";

import MMY from "./MMY.png";
import imgg from "./image.png";


export default function NewFBlock() {
  return (
    <>
      <section className="NewFBlock">
        <img src={MMY} alt="NewFBlock" />
        <div className="NewFBlock__textBlock">
          <h1>Будь на своем уровне</h1>
          <p>
            Правильная обувь может превратить любой наряд из простого в стильный
            всего за несколько шагов. В нашем обувном магазине представлен
            широкий ассортимент стильной обуви, которая поможет вам создать
            идеальный образ. От современных кроссовок до классических лоферов —
            у нас есть что-то на любой вкус и случай. Наша обувь разработана
            так, чтобы быть удобной, прочной и модной, чтобы вы могли выглядеть
            и чувствовать себя наилучшим образом, независимо от того, что на вас
            надето.
          </p>
          <button>ВЫБРАТЬ</button>
        </div>
      </section>
    </>
  );
}
