import { Component } from "react";
import { Container } from "react-bootstrap";
import SneakersPromoMen from "../components/WomenSneakerPage/SneakersPromoMen/SneakersPromo";

import WomenPage from "../components/WomenSneakerPage/WomenSneakerPage";

export default class Women extends Component {
  render() {
    return (
      <>
        <Container>
          <div className="men">
            <WomenPage />
            <SneakersPromoMen />
          </div>
        </Container>
      </>
    );
  }
}