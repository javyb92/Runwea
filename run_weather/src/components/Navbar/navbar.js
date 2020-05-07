import React from "react";
import "./style.css";
import Searchbar from "../SearchBar/searchbar";
import logo from "../../img/logo.png";

function Navbar() {
  return (
    <nav className="container">
      <div className="logospace">
        <img className="logo" src={logo}></img>
        <h1>RUNWEA</h1>
      </div>
      <div className="search">
        <Searchbar />
        <div className="searched-cities">
          <p>searched cities</p>
        </div>
      </div>
      <div className="githubInfo">
        <a href="https://github.com/javyb92" className="github-link">
          <i class="fab fa-github-square"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
