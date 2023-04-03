import React from "react";
import { Link } from "react-router-dom";
import footer_images from "../../../assets/footer_img.jpg";
import "./Footer.css";
const Footer = () => {
  return (
    <footer
      id="background"
      className="footer footer-center p-5 text-primary-content"
    >
      <div>
        <div className="avatar online">
          <div className="w-24 rounded-full">
            <img src={footer_images} alt="Footer Images" />
          </div>
        </div>
        <p className="font-bold">
          Rezvi Rayhan <br />
          MERN Stack Web Developer
        </p>
        <p>
          Copyright © 2023 - All right reserved By{" "}
          <Link to="https://web.facebook.com/devrezvirayhan">Rezvi Rayhan</Link>{" "}
        </p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4"></div>
      </div>
    </footer>
  );
};

export default Footer;
