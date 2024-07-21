import { Component } from "react";
import { Container } from "react-bootstrap";

import "./__header.scss";

import HeaderNav from "./HeaderNav";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

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
          <HeaderNav />щ
          
          <BurgerMenu />
        </Container>
      </header>
    );
  }
}
