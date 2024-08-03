import { Component } from "react";
import { Container } from "react-bootstrap";

import { Link } from "react-router-dom";

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
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <HeaderNav />
          <BurgerMenu />
        </Container>
      </header>
    );
  }
}
