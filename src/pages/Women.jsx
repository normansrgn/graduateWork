import { Component } from "react";
import WomenSneak from "../components/WomenSneaker/WomenSneaker";
import SneakersPromoMen from "../components/WomenSneaker/SneakersPromoMen/SneakersPromo";

import { Container } from "react-bootstrap";
export default class WomenPg extends Component {
  render() {
    return (
      <>
        <Container>
          <WomenSneak />
          <SneakersPromoMen />
        </Container>
      </>
    );
  }
}
