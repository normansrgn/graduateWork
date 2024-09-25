import React from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";


function SneakerCard(props) {
  Aos.init({ duration: 1000 });
  return (
    <div className="col-xxl-4 col-sm-6 col-md-7" data-aos="fade-up">
      <div className="sneaker__card">
        <Link to={`/sneaker/${props.id}`}>
          <img src={props.img} alt={props.title} />
          <div className="sneaker__cardText">
            <h2 className="sneaker__cardTitle">{props.title}</h2>
            <div className="sneaker__cardPrice">
              <span>{props.price}₽</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SneakerCard;