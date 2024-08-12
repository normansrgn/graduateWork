import { Component } from "react";
import { Container } from "react-bootstrap";

import BasketItems from "../components/BasketItems/BasketItems";

export default class Basket extends Component {
  render() {
    return (
      <>
        <Container>
            <BasketItems />
        </Container>
      </>
    );
  }
}
