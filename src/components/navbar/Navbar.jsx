import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-name">
        <Link to="body" spy={true} smooth={true} offset={-100} duration={1000}>
          Oam Shankar
        </Link>
      </div>
      <div className="nav-link">
        <Link to="about" spy={true} smooth={true} offset={0} duration={1000}>
          About
        </Link>
        <Link to="work" spy={true} smooth={true} offset={-30} duration={1000}>
          Projects
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={80} duration={1000}>
          Contact
        </Link>
      </div>
    </div>
  );
}
