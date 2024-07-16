import { Component } from "react";
import React, { useState } from "react";

import "./__burgermenu.scss";
const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger_menu">
      <button id="burger__btn" type="button" onClick={toggleMenu}>
        <span id="burgerSpan"></span>
      </button>
      <aside className={`burger__container ${isOpen ? "open" : ""}`}>
        <div className="burger__content">
          <nav className="nav_bar burger_nav">
            <ul className="navigation_item">
              <li>
                <a href="./profile.html" className="navigation_link">
                  <i className="fa-regular fa-user"></i> Home
                </a>
              </li>
              <li>
                <a href="./basket.html" className="navigation_link">
                  <i className="fa-solid fa-basket-shopping"></i> About
                </a>
              </li>

              <li>
                <a href="./basket.html" className="navigation_link">
                  <i className="fa-solid fa-basket-shopping"></i> Lab
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default BurgerMenu;
