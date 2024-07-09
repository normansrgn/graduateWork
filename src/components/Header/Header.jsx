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
                <li>
                  <a href=""> new &Featured </a>
                </li>
                <li>
                  <a href=""> men </a>
                </li>
                <li>
                  <a href=""> women </a>
                </li>
                <li>
                  <a href="">Kids</a>
                </li>
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
