import React from "react";
import "./Footer.css";

const Footer = ({ author }) => (
  <footer className="hero hero-sm">
    <div className="navbar">
      <section className="navbar-section">
        <div className="text-gray">
          Copyright © 2020 <strong>{author || ""}</strong>. All rights reserved.
        </div>
      </section>
      <section className="navbar-section">
        <div className="text-gray">
          Made with 🧠🤲💻❤️
        </div>
      </section>
    </div>
  </footer>
);

export default Footer;