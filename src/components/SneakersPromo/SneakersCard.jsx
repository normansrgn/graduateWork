import React from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

function SneakerCard({ id, img, title, price }) {
  return (
    <div
      className="col-12 col-sm-6 col-md-4 col-lg-4"
      data-aos="fade-up"
    >
      <div className="sneaker__card">
        <Link to={`/product/${id}`} className="text-decoration-none">
          <img src={img} alt={title} className="img-fluid" />
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