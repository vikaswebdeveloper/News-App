import './Navbar.css';
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <header>
      <nav>
        <div className="left">
          <Link to="/">Dainik Jagran</Link>
        </div>
        <div className="right">
          <Link to="/News">News</Link>
          <Link to="/Weather">Weather</Link>
          <Link to="/About">About</Link>
        </div>
      </nav>
    </header>
    </>
  );
};

export default Navbar;
