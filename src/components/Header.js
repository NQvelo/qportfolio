import logo from "../assets/qveloLogo.png";

import "./Header.css";

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // Add state for responsive menu

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolling ? "scrolling" : ""}`}>
      <div className="menu-button" onClick={toggleMenu}>
        <div className={`menu-icon ${showMenu ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav className={`nav ${showMenu ? "open" : ""}`}>
        <ul>
          <div className="logo">
            <img src={logo} alt="ss" className="logoImage" />
          </div>
          <div></div>
          <li>
            <Link
              to="section1"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            ></Link>
          </li>
          <li>
            <Link to="Home" smooth={true} duration={500} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="#" smooth={true} duration={500} onClick={toggleMenu}>
              Work
            </Link>
          </li>
          <li>
            <Link to="Home" smooth={true} duration={500} onClick={toggleMenu}>
              About
            </Link>
          </li>
          {/* Add more navigation items */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
