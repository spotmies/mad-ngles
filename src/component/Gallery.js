import React from "react";
import { useState } from "react";
import "./Nav.css";
import Nav from "./Nav";
import Road_Map from "./Road_Map";

import "./Gallery.css";

export default function Gallery() {
  const [showAbout, setAbout] = useState(false);

  return (
    <div className="mainAbout">
      <div className="image"> </div>
    </div>
  );
}
