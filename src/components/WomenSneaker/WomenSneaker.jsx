import { Component } from "react";

import { Container } from "react-bootstrap";

import "./womensneak.scss";

export default class WomenSneak extends Component {
  render() {
    return (
      <>
        <section className="womenSneak">
          <Container className="womenSneak__container">
            <h1 className="womenSneak__title">women sneakers</h1>
          </Container>
        </section>
      </>
    );
  }
}
