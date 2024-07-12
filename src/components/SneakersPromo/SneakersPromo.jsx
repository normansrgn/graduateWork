import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import "./__SneakersPromo.scss";

import { sneakers } from "./data";
import SneakerCard from "./SneakersCard";

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
                <li
                  className={`sneaker__li ${
                    activeBrand === "air jordan" ? "active" : ""
                  }`}
                  onClick={() => this.filterSneakers("air jordan")}
                >
                  air jordan
                </li>
                <li
                  className={`${activeBrand === "nike" ? "active" : ""}`}
                  onClick={() => this.filterSneakers("nike")}
                >
                  nike
                </li>
                <li
                  className={`${activeBrand === "dior" ? "active" : ""}`}
                  onClick={() => this.filterSneakers("dior")}
                >
                  dior
                </li>
                <li
                  className={`${activeBrand === "zara" ? "active" : ""}`}
                  onClick={() => this.filterSneakers("zara")}
                >
                  zara
                </li>
                <li
                  className={`${activeBrand === "adidas" ? "active" : ""}`}
                  onClick={() => this.filterSneakers("adidas")}
                >
                  adidas
                </li>
              </ol>
            </nav>
          </div>
          <Row className="sneaker__cards">
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
