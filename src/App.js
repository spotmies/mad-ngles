import "./App.css";
import React from "react";
import Nav from "./component/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Gallery from "./component/Gallery";
import Road_Map from "./component/Road_Map";
import Mad_Story from "./component/Mad_Story";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Road_Map" element={<Road_Map />} />
        <Route path="/Mad_Story" element={<Mad_Story />} />
      </Routes>
    </div>
  );
}

export default App;
