import React, { useState } from "react";
import "./__burgermenu.scss"; // Предполагается, что стили находятся в этом файле
import "../Header/__header.scss";

import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (e) => {
    // Закрываем меню, если клик произошел вне содержимого меню
    if (!e.target.classList.contains("burger__content")) {
      setIsOpen(false);
    }
  };

  return (
    <div className="burger_menu">
      <button id="burger__btn" type="button" onClick={toggleMenu}>
        <span
          id="burgerSpan"
          className={isOpen ? "btn-open-animation" : ""}
        ></span>
      </button>
      <aside
        className={`burger__container ${isOpen ? "open" : ""}`}
        onClick={closeMenu}
      >
        <div className="burger__content">
          <div className="burger__content">
            <nav className="burger__nav">
              <ol className="burgerMenu_list">
                <Link to="/">
                  <li>home</li>
                </Link>
                <Link to="/home">
                  <li>new & Featured</li>
                </Link>
                <Link to="/men">
                  <li>men</li>
                </Link>
                <Link to="/women">
                  <li>women</li>
                </Link>
                <div className="header__navIc">
                  <Link to="/Log">
                    <div className="header__navIcon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="rgba(255,254,254,1)"
                      >
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              style={{
                                stopColor: "rgb(6, 193, 252)",
                                stopOpacity: 1,
                              }}
                            />
                            <stop
                              offset="33%"
                              style={{
                                stopColor: "rgb(172, 66, 255)",
                                stopOpacity: 1,
                              }}
                            />
                            <stop
                              offset="57%"
                              style={{
                                stopColor: "rgb(255, 0, 214)",
                                stopOpacity: 1,
                              }}
                            />
                            <stop
                              offset="90%"
                              style={{
                                stopColor: "rgb(255, 0, 61)",
                                stopOpacity: 1,
                              }}
                            />
                          </linearGradient>
                        </defs>
                        <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
                      </svg>
                    </div>
                  </Link>
                  <Link to="/basket">
                    <div className="header__navIcon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="rgba(255,255,255,1)"
                      >
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              style={{
                                stopColor: "rgb(6, 193, 252)",
                                stopOpacity: 1,
                              }}
                            />
                            <stop
                              offset="33%"
                              style={{
                                stopColor: "rgb(172, 66, 255)",
                                stopOpacity: 1,
                              }}
                            />
                            <stop
                              offset="57%"
                              style={{
                                stopColor: "rgb(255, 0, 214)",
                                stopOpacity: 1,
                              }}
                            />
                            <stop
                              offset="90%"
                              style={{
                                stopColor: "rgb(255, 0, 61)",
                                stopOpacity: 1,
                              }}
                            />
                          </linearGradient>
                        </defs>
                        <path d="M12.0049 2C15.3186 2 18.0049 4.68629 18.0049 8V9H22.0049V11H20.8379L20.0813 20.083C20.0381 20.6013 19.6048 21 19.0847 21H4.92502C4.40493 21 3.97166 20.6013 3.92847 20.083L3.17088 11H2.00488V9H6.00488V8C6.00488 4.68629 8.69117 2 12.0049 2ZM13.0049 13H11.0049V17H13.0049V13ZM9.00488 13H7.00488V17H9.00488V13ZM17.0049 13H15.0049V17H17.0049V13ZM12.0049 4C9.86269 4 8.1138 5.68397 8.00978 7.80036L8.00488 8V9H16.0049V8C16.0049 5.8578 14.3209 4.10892 12.2045 4.0049L12.0049 4Z"></path>
                      </svg>
                    </div>
                  </Link>
                </div>
              </ol>
            </nav>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default BurgerMenu;
