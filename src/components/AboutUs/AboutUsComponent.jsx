import React from "react";
import { Link } from "react-router-dom";
import {
  FaShippingFast,
  FaHeadset,
  FaShieldAlt,
  FaRegClock,
  FaInstagram,
  FaVk,
  FaTelegram,
} from "react-icons/fa";
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
          <p>Круглосуточная онлайн-помощь в чате боте</p>
        </div>
      </div>

      <div className="aboutus__contacts">
        <div className="contact-info">
          <h2>Наши контакты</h2>

          {/* Новый блок для Telegram-бота */}
          <div className="telegram-bot-card">
            <div className="telegram-bot-icon-wrapper">
              <FaTelegram className="telegram-bot-icon" />
            </div>
            <div className="telegram-bot-content">
              <h3 className="telegram-bot-title">Наш Telegram-бот</h3>
              <p className="telegram-bot-text">
                Получайте мгновенные ответы, отслеживайте заказы и узнавайте о новинках первым с нашим умным ботом!
              </p>
              <a
                href="https://t.me/wartsneakerbot"
                target="_blank"
                rel="noopener noreferrer"
                className="telegram-bot-btn"
              >
                Подключиться к боту
              </a>
            </div>
          </div>

          <div className="divider"></div>

          <div className="contact-item">
            <div className="icon-wrapper">
              <FaHeadset className="contact-icon" />
            </div>
            <div>
              <p className="contact-type">Телефон</p>
              <p className="contact-value">+7 (999) 123-45-67</p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="contact-item">
            <div className="icon-wrapper">
              <FaRegClock className="contact-icon" />
            </div>
            <div>
              <p className="contact-type">График работы</p>
              <p className="contact-value">Пн-Вс: 10:00 - 22:00</p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="contact-item">
            <div className="icon-wrapper">
              <FaShippingFast className="contact-icon" />
            </div>
            <div>
              <p className="contact-type">Адрес</p>
              <p className="contact-value">Москва, ул. Спортивная, 15</p>
              <p className="contact-note">(магазин на 1 этаже)</p>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-link">
              <FaInstagram className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <FaVk className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <FaTelegram className="social-icon" />
            </a>
          </div>
        </div>

        <div className="map-container">
          <h2 className="map-title">Мы на карте</h2>
          <iframe
            className="aboutus__map"
            title="store-location"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae1f7f0c36befb9a52293aadb2324cf8c7583f5b2728c331e89eec73462a48792&source=constructor"
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