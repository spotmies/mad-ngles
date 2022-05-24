import React from "react";
import { useState } from "react";
import { Button } from "react-scroll/modules";
import images from "../images";

import "./Gallery.css";

export default function Gallery() {
  const [items, setItems] = useState(images);
  const [showAbout, setAbout] = useState(false);
  const FilterItems = (categItems) => {
    const updateItems = images.filter((curElemt) => {
      return curElemt.category === categItems;
    });
    setItems(updateItems);
  };

  return (
    <React.Fragment>
      <div className="main_body">
        <div className="Filter">
          <h1>Filter</h1>
          <div className="checkbox">
            <div className="button">
              <button
                className="btn"
                onClick={() => FilterItems("chain")}
              ></button>
              <br></br>
              <button
                className="btn"
                onClick={() => FilterItems("gold")}
              ></button>
              <br></br>
              <button
                className="btn"
                onClick={() => FilterItems("hat")}
              ></button>
              <br></br>
              <button
                className="btn"
                onClick={() => FilterItems("gold")}
              ></button>
              <br></br>
              <button
                className="btn"
                onClick={() => FilterItems("chain")}
              ></button>
              <br></br>
              <button
                className="btn"
                onClick={() => FilterItems("hat")}
              ></button>
              <br></br>
              <button
                className="btn"
                onClick={() => FilterItems("gold")}
              ></button>
              <br></br>
              <button
                className="btn"
                onClick={() => FilterItems("river")}
              ></button>
              <br></br>
            </div>
            <div>
              <p>Chain</p>
              <p>Gold</p>
              <p>Hat</p>
              <p>Goldx</p>
              <p>Chain</p>
              <p>Hat</p>
              <p>Gold</p>
              <p>river</p>
            </div>
          </div>
        </div>
        <div className="heading">
          {" "}
          <h1>7,777 mad angles</h1>
        </div>
      </div>
      <div className="row1_photogallery">
        {/* <div className="child"> */}
        {items.map((elem) => {
          const { id, image, NO } = elem;
          return (
            <div>
              <div className="images" style={{ height: "150px" }}>
                <img src={image} />
              </div>
            </div>
          );
        })}
        {/* </div> */}
      </div>
      {/* <div className="row2_photogallery">
        {items.map((elem) => {
          const { id, image, NO } = elem;
          return (
            <div>
              <div className="images">
                <img src={image} />
              </div>
            </div>
          );
        })}
      </div> */}
    </React.Fragment>
  );
}
