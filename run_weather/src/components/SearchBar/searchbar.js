import React from "react";
import "./style.css";

function Searchbar() {
  return (
    <div className="searchbar">
      <input
        type="text"
        className="searchTerm"
        placeholder="Search for your area"
      />
      <button type="submit" className="searchButton">
        <i class="fa fa-search"></i>
      </button>
    </div>
  );
}

export default Searchbar;
