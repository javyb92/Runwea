import React from "react";
import Navbar from "./components/Navbar/navbar";
import Dashboard from "./components/DashBoard/dashboard";
import "./App.css";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
