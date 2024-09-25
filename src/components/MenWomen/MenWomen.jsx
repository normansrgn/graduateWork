import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

import "./__menwomen.scss";

import man from "./cards/men.png";
import woman from "./cards/woman.png";

export default class MenWomen extends Component {
  componentDidMount() {
    Aos.init({ duration: 1000 });
  }
  render() {
    return (
      <section className="WomanMan">
        <Container>
          <Row className="WomanMan__row">
            <div className="col-xxl-5 col-sm-5 col-md-6" data-aos="fade-up">
              <Link to="/men">
                <div className="WomanMan__card">
                  <div className="WomanMan__cardImage">
                    <img src={man} alt="" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-xxl-5 col-sm-5 col-md-6" data-aos="fade-up">
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
