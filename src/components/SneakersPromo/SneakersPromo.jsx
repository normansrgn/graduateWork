import React, { Component } from "react";

import { Container, Row } from "react-bootstrap";

import { sneakers } from "./data";
import SneakerCard from "./SneakersCard";
import "./__SneakersPromo.scss";

const brands = ["air jordan", "nike", "dior", "zara", "adidas"];

export default class SneakersPromo extends Component {
  constructor(props) {
    super(props);
    const initialBrand = "air jordan";
    this.state = {
      filteredSneakers: sneakers.filter((sneaker) =>
        sneaker.title.toLowerCase().includes(initialBrand)
      ),
      activeBrand: initialBrand,
    };
  }

  filterSneakers = (brand) => {
    const filtered = sneakers.filter((sneaker) =>
      sneaker.title.toLowerCase().includes(brand)
    );
    this.setState({ filteredSneakers: filtered, activeBrand: brand });
  };

  render() {
    const { activeBrand, filteredSneakers } = this.state;

    return (
      <section className="sneaker">
        <Container className="sneaker__container">
          <div className="sneaker__text">
            <h1>Browse our best collections</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Est eros in commodo
              pellentesque neque tempus imperdiet enim a. Sit morbi convallis
              suscipit vitae lacus vitae id urna pharetra.
            </p>
            <nav className="sneaker__nav">
              <ol>
                {brands.map((brand) => (
                  <li
                    key={brand}
                    className={`${activeBrand === brand ? "active" : ""}`}
                    onClick={() => this.filterSneakers(brand)}
                  >
                    {brand}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
          <Row className="sneaker__row">
            {filteredSneakers.slice(0, 3).map((sneaker) => (
              <SneakerCard key={sneaker.title} {...sneaker} />
            ))}
          </Row>
          <div className="sneaker__button">
            <button className="sneaker__btn">View all</button>
          </div>
        </Container>
      </section>
    );
  }
}
