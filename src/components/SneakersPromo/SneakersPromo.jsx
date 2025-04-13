import React, { Component } from "react";

import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import aos from "aos";
import "aos/dist/aos.css";

import "./__SneakersPromo.scss";

import SneakerCard from "./SneakersCard";
import { menSneakers } from "../MenSneakerPage/SneakersPromoMen/data";

const brands = [ "nike", "adidas", "new balance", "puma"];

export default class SneakersPromo extends Component {
  constructor(props) {
    super(props);
    const initialBrand = "nike";
    this.state = {
      filteredSneakers: menSneakers.filter((sneaker) =>
        sneaker.title.toLowerCase().includes(initialBrand)
      ),
      activeBrand: initialBrand,
      isMobile: window.innerWidth <= 768,
    };
  }

  componentDidMount() {
    aos.init();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ isMobile: window.innerWidth <= 768 });
  };

  filterSneakers = (brand) => {
    const filtered = menSneakers.filter((sneaker) =>
      sneaker.title.toLowerCase().includes(brand)
    );
    this.setState({ filteredSneakers: filtered, activeBrand: brand });
  };

  handleSelectChange = (event) => {
    const brand = event.target.value;
    this.filterSneakers(brand);
  };

  render() {
    const { activeBrand, filteredSneakers, isMobile } = this.state;

    return (
      <section className="sneaker">
        <Container className="sneaker__container">
          <div className="sneaker__text" data-aos="fade-up">
            <h1>Просмотрите наши лучшие коллекции</h1>
            <p>
              Твоя обувь, твои правила. Здесь нет ограничений — только стиль,
              скорость и свобода. Взгляни на кроссовки, которые созданы для тех,
              кто не боится быть первым.
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
            {filteredSneakers.slice(0, 3).map((menSneaker) => (
              <SneakerCard key={menSneaker.id} {...menSneaker} />
            ))}
          </Row>

          <div className="sneaker__button">
            <Link to="/men">
              <button className="sneaker__btn" data-aos="fade-up">Посмотреть все</button>
            </Link>
          </div>
        </Container>
      </section>
    );
  }
}