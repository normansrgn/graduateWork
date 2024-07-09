import { Component } from "react";

import { Container } from "react-bootstrap";

import "./__header.scss";

import logo from "./logo.svg";

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

          <div className="header__navBlock">
            <nav>
              <ol>
                <li>new &Featured</li>
                <li>men</li>
                <li>women</li>
                <li>Kids</li>
              </ol>
            </nav>

            <div className="header__form">
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </Container>
      </header>
    );
  }
}
