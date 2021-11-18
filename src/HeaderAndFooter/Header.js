import React from "react";
import { Container, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Header.css";
import Logo from "../Images/logo.png";
const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-success">
      <a class="navbar-brand" href="/">
        <img className="logo" src={Logo} />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav ml-auto mt- mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/portfolio">
              Portfolio
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="videography">
              Videography
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/social">
              Social
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
