import React from "react";

import img from "./pics/1.png";

import "./Card.scss";

export default function Card() {
  return (
    <>
      <section className="card">
        <img src={img} alt="" />

      </section>
    </>
  );
}
