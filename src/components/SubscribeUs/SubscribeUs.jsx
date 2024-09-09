import React from "react";

import "./__SubscribeUs.scss";

export default function SubscribeUs() {
  return (
    <>
      <section className="SubscribeUs">
        <div className="SubscribeUs__card">
          <h1 className="SubscribeUs__title">
            Subscribe Us to get monthly voucher or <br /> <span> 25 % off</span>
          </h1>
          <input type="email" placeholder="normanmagic2004@gmail.com" />
          <button>Subscribe</button>
        </div>
      </section>
    </>
  );
}
