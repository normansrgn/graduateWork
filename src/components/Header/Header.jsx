import { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./__header.scss";

import HeaderNav from "./HeaderNav";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import logo from "./logo.svg";

// Header component with logo, navigation links, and burger menu.
export default function Header() {
  const [scrollUp, setScrollUp] = useState(true);
  const lastScrollPos = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollUp(currentScrollPos < lastScrollPos.current || currentScrollPos === 0);
      lastScrollPos.current = currentScrollPos;
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);  

  return (
    <header className={`header ${scrollUp ? "header--visible" : "header--hidden"}`}>
      <Container className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <HeaderNav />
        <BurgerMenu />
      </Container>
    </header>
  );
}