import React from "react";
import { Link } from "react-router-dom";
import "./__aboutus.scss";

export default function AboutUsComponent() {
  return (
    <>
      <section className="aboutus">
        <h1 className="aboutus__title">Мы на карте</h1>
        <iframe
          className="aboutus__map"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae1f7f0c36befb9a52293aadb2324cf8c7583f5b2728c331e89eec73462a48792&amp;source=constructor"
          width="100%"
          height="340"
          frameBorder="0"
        ></iframe>
        <Link to="https://yandex.ru/maps/-/CDqjbOMo" target="_blank" rel="noopener noreferrer">
          <button className="aboutus__btn">ОТКРЫТЬ НА КАРТЕ</button>
        </Link>
      </section>
    </>
  );
}