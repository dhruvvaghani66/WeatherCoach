import React from "react";
import "./Footer.css";
import logo from "../../assets/whitelogo.png"; // Update the path as needed
import facebookIcon from "../../assets/facebook.png"; // Update the path as needed
import twitterIcon from "../../assets/twit.png"; // Update the path as needed
import instagramIcon from "../../assets/insta.png"; // Update the path as needed
import linkedinIcon from "../../assets/link.png"; // Update the path as needed
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="footer-nav">
        <Link to="/">Home</Link>
        <Link to="/climate-change">Climate Change</Link>
        <Link to="/news">News</Link>
        <Link to="/map">Map</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <p>© 2022 Weathercoach. All Rights Reserved.</p>
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/dhruv-vaghani-745222219"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>{" "}
          <img src={instagramIcon} alt="Instagram" />
          <img src={twitterIcon} alt="Twitter" />
          <img src={facebookIcon} alt="Facebook" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
