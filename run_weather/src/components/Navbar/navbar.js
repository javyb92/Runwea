import React from "react";
import "./style.css";
import Searchbar from "../SearchBar/searchbar";
import logo from "../../img/logo.png";

function Navbar() {
  return (
    <nav className="container">
      <div className="logo">
        <img className="logo" src={logo}></img>
      </div>
      <div className="search">
        <Searchbar />
        <div className="searched-cities">
          <p>searched cities</p>
        </div>
      </div>
      <div className="githubInfo">
        <p>github Icon</p>
      </div>
    </nav>
  );
}

export default Navbar;
