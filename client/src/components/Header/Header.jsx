import React, { useState } from "react";

import { BsHandbag } from "react-icons/bs";
import { HiX } from "react-icons/hi";
import { BiMenuAltRight } from "react-icons/bi";
// import shop from "../../assets/images/shoLogo.PNG";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header scroll-header">
      <nav className="nav container-div">
        <a href="#home" className="nav__logo">
          CART
        </a>

        <div className={"nav__menu " + (menuOpen && "show-menu")}>
          <ul className="nav__list nav__menu__list">
            <li className="nav__item">
              <Link
                to="/"
                className="nav__link"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="shop"
                onClick={() => setMenuOpen(false)}
                className="nav__link"
              >
                Shop
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="nav__link"
              >
                Contact
              </Link>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__wrapper nav__link">
                <BsHandbag />
                <span className="nav__icons__cart">0</span>
              </a>
            </li>
          </ul>

          <div
            className="nav__close"
            id="nav-close"
            onClick={() => setMenuOpen(false)}
          >
            <HiX />
          </div>
        </div>

        <div className="nav__btns">
          <div
            className="nav__btns__toggle"
            id="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <BiMenuAltRight />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
