import { Component } from "react";
import React, { useState } from "react";

import { Link } from "react-router-dom";

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
          <div className="burger__nav">
            <nav>
              <ol>
                <Link to="/home">
                  <li>new & Featured</li>
                </Link>
                <Link to="/men">
                  <li>men</li>
                </Link>
                <Link to="/women">
                  <li>women</li>
                </Link>
              </ol>
            </nav>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default BurgerMenu;
