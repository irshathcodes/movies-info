import React from "react";
import logo from "./logo.png";
import Search from "./Search";

const Hero = () => {
  return (
    <>
      <header>
        <div className="hero-img">
          <div className="logo-container">
            <img src={logo} className="logo" alt="" />
          </div>
          <div className="company-name">movies info</div>

          <Search />
        </div>
      </header>
    </>
  );
};

export default Hero;
