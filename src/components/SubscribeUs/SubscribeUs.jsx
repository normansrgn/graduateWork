import React from "react";

import "./__SubscribeUs.scss";

export default function SubscribeUs() {
  return (
    <>
      <section className="SubscribeUs">
        <div className="SubscribeUs__card">
          <h1 className="SubscribeUs__title">
            Подпишитесь на нашу рассылку и получите скидку <span> 25 %</span>
          </h1>
          <input type="email" placeholder="Введите вашу почту" />
          <button>Подписаться</button>
        </div>
      </section>
    </>
  );
}
