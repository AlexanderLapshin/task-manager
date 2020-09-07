import React from "react";
import logo from "../../images/logo.png"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <div className="header-container">
    <img src={logo} alt="Logo" width="100px"/>
    <Link to="task-manager">Manager</Link>
    <Link to="dashboard">Dashboard</Link>
    </div>
  );
}

export default Header;
