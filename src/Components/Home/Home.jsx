import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../1286_bird-01.png";

const Home = () => {
  return (
    <div className="Home">
      <div className="wrapper">
        <div className="left">
          <p>
            Welcome to my site Dainik Jagran. Just choose your way to start with
            us, either it can be news or weather.
          </p>
          <div className="buttons">
            <Link to="/News">News</Link>
            <Link to="/Weather">Weather</Link>
          </div>
        </div>
        <div className="right">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
