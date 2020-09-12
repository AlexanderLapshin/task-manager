import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="navbar">
      <img src={logo} alt="Logo" width="100px" />
        <Link className="navbar__item" to="task-manager">
          Manager
        </Link>
        <Link className="navbar__item" to="dashboard">
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Header;
