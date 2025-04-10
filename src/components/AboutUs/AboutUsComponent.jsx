import React from "react";
import { Link } from "react-router-dom";
import { FaShippingFast, FaHeadset, FaShieldAlt } from "react-icons/fa";
import "./__aboutus.scss";

export default function AboutUsComponent() {
  return (
    <section className="aboutus">
      <div className="aboutus__header">
        <h1 className="aboutus__title">О НАС</h1>
        <p className="aboutus__subtitle">Почему выбирают именно нас?</p>
      </div>

      <div className="aboutus__features">
        <div className="feature-card">
          <FaShippingFast className="feature-icon" />
          <h3>Быстрая доставка</h3>
          <p>По всей стране за 3-5 дней</p>
        </div>
        <div className="feature-card">
          <FaShieldAlt className="feature-icon" />
          <h3>Гарантия качества</h3>
          <p>Официальная гарантия на все товары</p>
        </div>
        <div className="feature-card">
          <FaHeadset className="feature-icon" />
          <h3>Поддержка 24/7</h3>
          <p>Круглосуточная онлайн-помощь</p>
        </div>
      </div>

      <div className="aboutus__contacts">
        <div className="contact-info">
          <h2>Наши контакты</h2>
          <p>📞 +7 (999) 123-45-67</p>
          <p>✉️ support@sneakershub.ru</p>
          <p>📍 Москва, ул. Спортивная, 15</p>
        </div>
        <div className="map-container">
          <h2 className="map-title">Мы на карте</h2>
          <iframe
            className="aboutus__map"
            title="store-location"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae1f7f0c36befb9a52293aadb2324cf8c7583f5b2728c331e89eec73462a48792&amp;source=constructor"
            width="100%"
            height="340"
            frameBorder="0"
          ></iframe>
          <Link 
            to="https://yandex.ru/maps/-/CDqjbOMo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="map-link"
          >
            <button className="aboutus__btn">ОТКРЫТЬ НА КАРТЕ</button>
          </Link>
        </div>
      </div>
    </section>
  );
}