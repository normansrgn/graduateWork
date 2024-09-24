import React, { useState } from "react";
import "./__burgermenu.scss"; // Стили бургер-меню

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const closeMenuOnOutsideClick = (e) => {
    // Если клик произошел вне меню (по фону)
    if (e.target.classList.contains("blur-background")) {
      setIsOpen(false);
    }
  };

  return (
    <div className="burger_menu">
      {/* Кнопка открытия/закрытия меню */}
      <button id="burger__btn" type="button" onClick={toggleMenu}>
        <span
          id="burgerSpan"
          className={isOpen ? "btn-open-animation" : ""}
        ></span>
      </button>

      {/* Бургер-меню */}
      <aside className={`burger__container ${isOpen ? "open" : ""}`}>
        <div className="burger__content">
          <nav className="burger__nav">
            <ol className="burgerMenu_list">
              <li onClick={handleLinkClick}>home</li>
              <li onClick={handleLinkClick}>new & Featured</li>
              <li onClick={handleLinkClick}>men</li>
              <li onClick={handleLinkClick}>women</li>
              <li onClick={handleLinkClick}>About us</li>
            </ol>
          </nav>
        </div>
      </aside>

      {/* Размытый фон, который закрывает меню при клике */}
      <div
        className={`blur-background ${isOpen ? "show" : ""}`}
        onClick={closeMenuOnOutsideClick}
      ></div>
    </div>
  );
};

export default BurgerMenu;