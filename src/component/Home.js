import React from "react";
import { useRef } from "react";
import { Link } from "react-scroll";
import Gallery from "./Gallery";
import "./home.css";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
function Home() {
  return (
    <div>
      <div className="main_div" id="Main_div">
        <div className="text_content">
          <h1>
            Discover,<br></br>collect,<br></br>sell <span>MAD</span> angles.
          </h1>
          <p>
            ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor
            incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
          </p>
        </div>
        <div className="image_box"></div>
        <div className="collect_wallet_button">
          {" "}
          <a href="#second_page_id">collect wallet</a>
        </div>
        {/* <div className="Scroll_down">
          <p>scroll down to get mad</p>
          <div className="href">
            <a href="#second_page_id">heyyyyyy</a>
          </div>
        </div>
        <div className="scroll_down_image"></div> */}
      </div>
      <div className="Second_page">
        <section id="second_page_id">
          <div className="second_page">
            <div className="second_text">
              <p>
                {" "}
                A set of unique 7,777 collectable
                <br></br> card with unique look.{" "}
              </p>
              <h1>meet the MAD ANGLES</h1>
            </div>
            <div className="Second_image"></div>
            <div className="click_here">
              <p>
                click here to get <span>Mad</span>
              </p>
              <div className="numbers">
                <div>
                  <FaMinus className="minus"></FaMinus>
                </div>

                <div>
                  {" "}
                  <h1 className="count_number">3</h1>
                </div>
                <div>
                  <BsPlusLg className="plus"></BsPlusLg>
                </div>
              </div>
            </div>

            <div className="Mint_button">
              {" "}
              <a href="#">mint</a>
            </div>
            <div className="scroll_up">
              <a href="#Main_div">
                scroll up to know about <span>angles</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Home;
