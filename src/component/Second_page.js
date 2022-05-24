import React from "react";
import { useRef } from "react";
import { Link } from "react-scroll";
import Gallery from "./Gallery";
import "./home.css";
function Second_page() {
  return (
    <div className="second_page" id="#second_page_id">
      <p>
        {" "}
        A set of unique 7,777 collectable
        <br></br> card with unique look.{" "}
      </p>
      <h1>meet the MAD ANGLES</h1>
      <div className="Second_image"></div>
      <div className="click_here">
        <h1>click here to get Mad</h1>
        <p>
          scroll up to know about <span>ANGLES</span>{" "}
        </p>
      </div>
    </div>
  );
}
export default Home;
