import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { menSneakers } from "../components/MenSneakerPage/SneakersPromoMen/data";
import { womenSneakers } from "../components/WomenSneakerPage/SneakersPromoMen/data";
import { Container } from "react-bootstrap";
import "./SneakerDetail.scss";
import Aos from "aos";
import "aos/dist/aos.css";

function SneakerDetail() {
  Aos.init({ duration: 600 });
  const { id } = useParams();
  const [showNotification, setShowNotification] = useState(false);
  const [activeSize, setActiveSize] = useState(41); 
  const sneakerId = parseInt(id);

  let sneaker = menSneakers.find((s) => s.id === sneakerId);

  if (!sneaker) {
    sneaker = womenSneakers.find((s) => s.id === sneakerId);
  }

  if (!sneaker) {
    return <h2>Товар не найден</h2>;
  }

  const handleAddToCart = () => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const newItem = {
      img: sneaker.img,
      title: sneaker.title,
      price: sneaker.price,
      size: activeSize, 
    };
    currentCart.push(newItem);
    localStorage.setItem("cart", JSON.stringify(currentCart));

    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const handleSizeClick = (size) => {
    setActiveSize(size); 
  };
  return (
    <section className="SneakerDetail">
      <Container className="SneakerDetail__container">
        <div className="SneakerDetail__pageCont" data-aos="fade-down">
          <div className="SneakerDetail__img">
            <img src={sneaker.img} alt={sneaker.title} />
          </div>
          <div className="SneakerDetail__text">
            <div className="SneakerDetail__textTitleBlock">
              <h2 className="SneakerDetail__cardTitle">{sneaker.title}</h2>
              <div className="SneakerDetail__cardRating">
                <span>Размер:</span>
                <div className="SneakerDetail__sizes">
                  {[41, 42, 43, 44, 45].map((size) => (
                    <div
                      key={size}
                      className={`SneakerDetail__size ${activeSize === size ? "active" : ""}`}
                      onClick={() => handleSizeClick(size)}
                    >
                      <span>{size}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="SneakerDetail__cardPrice">
              <span>{sneaker.price}₽</span>
              <button onClick={handleAddToCart}>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="22px"
                  width="22px"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="#ffffff"
                    d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192 32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512L430 512c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32l-85.6 0L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192l-232.6 0L253.3 35.1zM192 304l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zm128 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="SneakerDetail__aboutItem" data-aos="fade-right">
          <h3>О кроссовках</h3>
          <p>{sneaker.description}</p>
        </div>
        {showNotification && (
          <Link to="/basket">
            <div className="notification">Товар добавлен в корзину!</div>
          </Link>
        )}
      </Container>
    </section>
  );
}

export default SneakerDetail;