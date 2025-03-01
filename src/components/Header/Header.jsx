import { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./__header.scss";

import HeaderNav from "./HeaderNav";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import logo from "./logo.svg";

export default function Header() {

  const [scrollUp, setScrollUp] = useState(true);
  const lastScrollPos = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos === 0) {
        setScrollUp(true);
        
      } else {
        setScrollUp(currentScrollPos < lastScrollPos.current);
      }
      lastScrollPos.current = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    
  }, [scrollUp]);

  return (
    <header
      className={`header ${scrollUp ? "header--visible" : "header--hidden"}`}
    >
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
