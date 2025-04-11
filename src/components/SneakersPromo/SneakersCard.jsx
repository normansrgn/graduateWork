import React from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

function SneakerCard({ id, img, title, price }) {
  return (
    <div className="col-xxl-4 col-sm-6 col-md-7" data-aos="fade-up">
      <div className="sneaker__card">
        <Link to={`/product/${id}`}>
          <img src={img} alt={title} />
          <div className="sneaker__cardText">
            <h2 className="sneaker__cardTitle">{title}</h2>
            <div className="sneaker__cardPrice">
              <span>{price}₽</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SneakerCard;