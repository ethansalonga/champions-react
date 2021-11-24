import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Champions.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure className="footer__logo">
              <img src={Logo} alt="" className="footer__logo--img" />
            </figure>
          </Link>
          <div className="footer__list">
            <Link to="/" className="footer__link">
              Home
            </Link>
            <Link to="/about" className="footer__link">
              About
            </Link>
            <Link to="/champs" className="footer__link">
              Champs
            </Link>
            <Link to="/cart" className="footer__link">
              Cart
            </Link>
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2021 Champions
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
