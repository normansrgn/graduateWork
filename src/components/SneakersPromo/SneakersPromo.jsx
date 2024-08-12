import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import "./__SneakersPromo.scss";

import SneakerCard from "./SneakersCard";
import { sneakers } from "./data";

const brands = ["air jordan", "nike", "dior", "zara", "adidas"];

export default class SneakersPromo extends Component {

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  handleResize = () => {
    this.setState({ isMobile: window.innerWidth <= 765 });
  };
  filterSneakers = (brand) => {
    const filtered = sneakers.filter((sneaker) =>
      sneaker.title.toLowerCase().includes(brand)
    );
    this.setState({ filteredSneakers: filtered, activeBrand: brand });
  };

  handleSelectChange = (event) => {
    const brand = event.target.value;
    this.filterSneakers(brand);
  };

  constructor(props) {
    super(props);
    const initialBrand = "air jordan";
    this.state = {
      filteredSneakers: sneakers.filter((sneaker) =>
        sneaker.title.toLowerCase().includes(initialBrand)
      ),
      activeBrand: initialBrand,
      isMobile: window.innerWidth <= 768,
    };
  }

  render() {
    const { activeBrand, filteredSneakers, isMobile } = this.state;
    return (
      <>
        <section className="sneaker">
          <Container className="sneaker__container">
            <div className="sneaker__text">
              <h1>Browse our best collections</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Est eros in commodo
                pellentesque neque tempus imperdiet enim a. Sit morbi convallis
                suscipit vitae lacus vitae id urna pharetra.
              </p>
              {isMobile ? (
                <select
                  className="sneaker__select"
                  value={activeBrand}
                  onChange={this.handleSelectChange}
                >
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              ) : (
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
              )}
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
      </>
    );
  }
}
