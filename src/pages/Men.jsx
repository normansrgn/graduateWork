import { Component } from "react";
import { Container } from "react-bootstrap";

import SneakersPromoMen from "../components/MenSneakerPage/SneakersPromoMen/SneakersPromo";

import MenPage from "../components/MenSneakerPage/MenSneakerPage";

export default class Men extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <div className="men">
            <MenPage />
            <SneakersPromoMen />
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
