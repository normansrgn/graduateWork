import { Component } from "react";
import { Container, Row } from "react-bootstrap";

import "./__SneakersPromo.scss";

export default class SneakersPromo extends Component {
  render() {
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
                <li className="sneaker__li">air jordan</li>
                <li>nike</li>
                <li>dior</li>
                <li>zara</li>
                <li>adidas</li>
              </ol>
            </nav>
          </div>
        </Container>
      </section>
    );
  }
}
