import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
function Home() {
  return (
    <div className="main_div">
      <div className="text_content">
        <h1>
          Discover,<br></br>collect,<br></br>sell <span>MAD</span> angles.
        </h1>
        <p>
          ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor
          incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
          ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div className="image_box"></div>
      <div className="Scroll_down">
        <p>scroll down to get mad</p>
      </div>
      <div className="scroll_down_image"></div>
      <div className="second_page">
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
    </div>
  );
}
export default Home;
