import React from "react";
import { ReactComponent as Book } from "../images/logo-bookmark.svg";
import Face from "../images/icon-facebook.svg";
import Twitter from "../images/icon-twitter.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="details-footer">
        <div className="logo-container">
          <Book />
        </div>
        <div className="footer-menu">
          <h4>Features</h4>
          <h4>Prices</h4>
          <h4>Contact</h4>
        </div>
      </div>
      <div className="social-media-footer">
        <img src={Face} alt="facebook" />
        <img src={Twitter} alt="twitter" />
      </div>
    </div>
  );
};

export default Footer;
