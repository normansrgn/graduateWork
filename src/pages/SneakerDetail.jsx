import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { menSneakers } from "../components/MenSneakerPage/SneakersPromoMen/data";
import { womenSneakers } from "../components/WomenSneakerPage/SneakersPromoMen/data";
import { Container } from "react-bootstrap";
import "./SneakerDetail.scss";
import Aos from "aos";
import "aos/dist/aos.css";

function SneakerDetail() {
  Aos.init({ duration: 1000 });
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
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  fill="rgba(250,245,245,1)"
                >
                  <path d="M15.3709 3.44L18.5819 9.002L22.0049 9.00218V11.0022L20.8379 11.002L20.0813 20.0852C20.0381 20.6035 19.6048 21.0022 19.0847 21.0022H4.92502C4.40493 21.0022 3.97166 20.6035 3.92847 20.0852L3.17088 11.002L2.00488 11.0022V9.00218L5.42688 9.002L8.63886 3.44L10.3709 4.44L7.73688 9.002H16.2719L13.6389 4.44L15.3709 3.44ZM18.8309 11.002L5.17788 11.0022L5.84488 19.0022H18.1639L18.8309 11.002ZM13.0049 13.0022V17.0022H11.0049V13.0022H13.0049ZM9.00488 13.0022V17.0022H7.00488V13.0022H9.00488ZM17.0049 13.0022V17.0022H15.0049V13.0022H17.0049Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="SneakerDetail__aboutItem" data-aos="fade-left">
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