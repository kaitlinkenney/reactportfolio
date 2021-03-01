import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

//header will appear on every page with buttons to navigate between pages
function Header() {
  return (
        <div className="topnav">
          <Link to="/"
          className="homelink"
            >
            Home
          </Link>
          <Link to="/about"
          className="aboutlink">
            About
          </Link>
          <Link to="/projects"
          className="projectslink">
            Projects
          </Link>
        </div>
  )
}

export default Header;