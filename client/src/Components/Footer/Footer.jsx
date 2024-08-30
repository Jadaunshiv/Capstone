import React from "react";
import "./Footer.css";
import logo from '../Assets/logo.png'
import insta_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import x_icon from '../Assets/x_icon.png'

const Footer = () => {
  const year = new Date().getFullYear();
  console.log(year);

  return (
    <footer>
      <div className="footer_container">
        <div className="footer_details">
          <p>Simple Goods</p>
          <p>4059, Lake Road, Somewhere on the Land. Planet Earth</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="footer_logo">
            <a href="/"><img src={logo} alt="logo" /></a>
            <div className="footer-icons">
              <div className="icons-container">
                <img src={insta_icon} alt="insta-icon" />
              </div>
              <div className="icons-container">
                <img src={whatsapp_icon} alt="whatsapp-icon" />
              </div>
              <div className="icons-container">
                <img src={x_icon} alt="x-icon" />
              </div>
            </div>
          <p>
            {year} Simple Goods<sup>&copy;</sup>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
