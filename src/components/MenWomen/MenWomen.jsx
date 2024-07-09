import { Component } from "react";
import { Container, Row } from "react-bootstrap";

import "./__menwomen.scss";

import man from "./cards/men.png";
import woman from "./cards/woman.png";

export default class MenWomen extends Component {
  render() {
    return (
      <section className="WomanMan">
        <Container>
          <Row className="WomanMan__row">
            <div className="col-xxl-5">
              <div className="WomanMan__card">
                <div className="WomanMan__cardImage">
                  <img src={man} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xxl-5">
              <div className="WomanMan__card">
                <div className="WomanMan__cardImage">
                  <img src={woman} alt="" />
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    );
  }
}
