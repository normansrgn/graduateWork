import React from "react";

function SneakerCard(props) {
  const addToCart = () => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = {
      img: props.img,
      title: props.title,
      price: props.price
    };
    currentCart.push(newItem);
    localStorage.setItem('cart', JSON.stringify(currentCart));
  };

  return (
    <div className="col-xxl-4 col-sm-6 col-md-7">
      <div className="sneaker__card">
        <img src={props.img} alt={props.title} />
        <div className="sneaker__cardText">
          <h2 className="sneaker__cardTitle">{props.title}</h2>
          <div className="sneaker__cardPrice">
            <span>${props.price}</span>
            <button onClick={addToCart}>BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SneakerCard;
