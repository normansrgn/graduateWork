import { Component } from "react";

import { Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

import "./__menwomen.scss";

import man from "./cards/men.png";
import woman from "./cards/woman.png";

export default class MenWomen extends Component {
  render() {
    return (
      <section className="WomanMan">
        <Container>
          <Row className="WomanMan__row">
            <div className="col-xxl-5 col-sm-5 col-md-6">
              <Link to="/men">
                <div className="WomanMan__card">
                  <div className="WomanMan__cardImage">
                    <img src={man} alt="" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-xxl-5 col-sm-5 col-md-6">
              <Link to="/women">
                <div className="WomanMan__card">
                  <div className="WomanMan__cardImage">
                    <img src={woman} alt="" />
                  </div>
                </div>
              </Link>
            </div>
          </Row>
        </Container>
      </section>
    );
  }
}
