import React, { useState } from "react";

import { ReactComponent as Logo } from "../images/logo-bookmark.svg";
import { ReactComponent as Hamburger } from "../images/icon-hamburger.svg";
import { ReactComponent as Close } from "../images/icon-close.svg";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <header>
      <div className={`container ${menuIsOpen ? "triggered" : ""}`}>
        <div className="logo">
          <Logo />
        </div>

        <div className={`menu ${menuIsOpen ? "visible" : ""}`}>
          <ul>
            <li>
              <button className="link">Features</button>
            </li>
            <li>
              <button className="link">Pricing</button>
            </li>
            <li>
              <button className="link">Contact</button>
            </li>
            <li>
              <button className="login">Login</button>
            </li>
          </ul>
        </div>

        <button
          className={`menu-opener ${menuIsOpen ? "active" : ""}`}
          onMouseUp={toggleMenu}
        >
          <Hamburger className="hamburger" />
          <Close className="close" />
        </button>
      </div>
    </header>
  );
};

export default Header;
