import React, { Component } from "react";
import "./Marquee.scss";

export default class Marquee extends Component {
  render() {
    return (
      <div className="marquee" data-aos="fade-up">
        <div className="marquee__content">
          <span>🔥 НОВЫЕ ПОСТУПЛЕНИЯ КАЖДУЮ НЕДЕЛЮ 🔥</span>
          <span>🚀 БЕСПЛАТНАЯ ДОСТАВКА ПРИ ЗАКАЗЕ ОТ 5000₽ 🚀</span>
          <span>💥 СКИДКА 15% НА ПЕРВЫЙ ЗАКАЗ ПО ПРОМОКОДУ: WELCOME15 💥</span>
        </div>
      </div>
    );
  }
}