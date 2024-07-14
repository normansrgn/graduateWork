function SneakerCard(props) {
  return (
    <div className="col-xxl-4 col-sm-6 col-md-7">
      <div className="sneaker__card">
        <img src={props.img} alt="" />
        <div className="sneaker__cardText">
          <h2 className="sneaker__cardTitle">{props.title}</h2>
          <div className="sneaker__cardPrice">
            <span>${props.price}</span>
            <button>BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SneakerCard;
