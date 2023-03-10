import React from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
const App = () => {
  return (
    <div>
      <Header />
      <div className="main"><Navbar />
      <Home/> </div>
      
    </div>
  );
};

export default App;
