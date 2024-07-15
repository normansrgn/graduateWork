import { Component } from "react";
import { Container } from "react-bootstrap";

import "./__header.scss";
import logo from "./logo.svg";

import HeaderNav from "./HeaderNav";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <Container className="header__container">
          <div className="header__logo">
            <a href="">
              <img src={logo} alt="" />
            </a>
          </div>
          <HeaderNav />
        </Container>
      </header>
    );
  }
}
