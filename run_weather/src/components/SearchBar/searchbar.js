import React from "react";
import "./style.css";

function Searchbar() {
  return (
    <div className="searchbar">
      <input
        type="text"
        className="searchTerm"
        placeholder="What are you looking for?"
      />
      <button type="submit" class="searchButton"></button>
    </div>
  );
}

export default Searchbar;
