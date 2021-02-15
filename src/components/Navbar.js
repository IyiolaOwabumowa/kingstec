import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as HomeLink } from "react-router-dom";
import { useLocation, Switch } from "react-router-dom";

import "../App.css";
import "./Navbar.css";

function Navbar(props) {
  const location = useLocation();

  console.log(location);
  var Scroll = require("react-scroll");
  var scroller = Scroll.scroller;

  useEffect(() => {}, []);

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <HomeLink to="/" className="navbar-logo">
            <img className="logo" src="/images/logo.png" />
          </HomeLink>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu-clicked active" : "nav-menu"}>
            <li className="nav-item">
              {location.pathname != "/" ? (
                <HomeLink
                  to={{
                    pathname: "/",
                    brandProps: {
                      path: "projects",
                    },
                  }}
                  className="nav-links"
                  onClick={() => {
                    closeMobileMenu();
                  }}
                >
                  PROJECTS
                </HomeLink>
              ) : (
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-links"
                  onClick={() => {
                    closeMobileMenu();
                  }}
                >
                  PROJECTS
                </Link>
              )}
            </li>
            <li className="nav-item">
              {location.pathname != "/" ? (
                <HomeLink
                  to={{
                    pathname: "/",
                    brandProps: {
                      path: "process",
                    },
                  }}
                  className="nav-links"
                  onClick={() => {
                    closeMobileMenu();
                  }}
                >
                  PROCESS
                </HomeLink>
              ) : (
                <Link
                  to="process"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-links"
                  onClick={() => {
                    closeMobileMenu();
                  }}
                >
                  PROCESS
                </Link>
              )}{" "}
            </li>
            <li className="nav-item">
              {location.pathname != "/" ? (
                <HomeLink
                  to={{
                    pathname: "/",
                    brandProps: {
                      path: "about",
                    },
                  }}
                  className="nav-links"
                  onClick={() => {
                    closeMobileMenu();
                  }}
                >
                  ABOUT
                </HomeLink>
              ) : (
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-links"
                  onClick={() => {
                    closeMobileMenu();
                  }}
                >
                  ABOUT
                </Link>
              )}
            </li>
            <li className="nav-item">
              {location.pathname != "/" ? (
                <HomeLink
                  to={{
                    pathname: "/",
                    brandProps: {
                      path: "contact",
                    },
                  }}
                  className="nav-links"
                  onClick={() => {
                    closeMobileMenu();
                  }}
                >
                  CONTACT
                </HomeLink>
              ) : (
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-links"
                  onClick={() => {
                    closeMobileMenu();
                  }}
                >
                  CONTACT
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
