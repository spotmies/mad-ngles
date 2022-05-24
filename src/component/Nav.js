import "./Nav.css";
import "./Gallery.css";
//import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

import { useState } from "react";

// import {
//   Link,
//   DirectLink,
//   Element,
//   Events,
//   animateScroll as scroll,
//   scrollSpy,
//   scroller,
// } from "react-scroll";

import { BsTwitter } from "react-icons/bs";

import { FaDiscord, FaYoutubeSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <nav className="main_nav">
      <div className="logo">
        <h2>MAD ANGLES</h2>
      </div>
      <div
        className={showMediaIcons ? "menu_link mobile-menu-link" : "menu_link"}
      >
        <ul>
          <li>
            <Link className="home" activeClass="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="gallery"
              to="Gallery"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="Road_Map"
              to="Road_Map"
            >
              Road Map
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={70}
              duration={1000}
              className="Mad_Story"
              to="Mad_Story"
            >
              Mad Story
            </Link>
          </li>
        </ul>
      </div>
      <div className="social_media">
        <ul className="social_media_desktop">
          <li>
            <a
              href="https://www.instagram.com/explore/locations/1025876748/india/bhopal-madhya-pradesh/
          oriental-institute-of-science-and-technologybhopal/"
            />
            <FaDiscord className="discord" />
          </li>
          <li>
            <a
              href="https://www.instagram.com/explore/locations/1025876748/india/bhopal-madhya-pradesh/
          oriental-institute-of-science-and-technologybhopal/"
            />
            <BsTwitter className="twitter" />
          </li>
          <li>
            <a
              href="https://www.instagram.com/explore/locations/1025876748/india/bhopal-madhya-pradesh/
          oriental-institute-of-science-and-technologybhopal/"
            />
            <FaYoutubeSquare className="youtube" />
          </li>
        </ul>
      </div>
      <div className="hamburger-menu">
        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
          <GiHamburgerMenu />
        </a>
      </div>
    </nav>
  );
}
export default Nav;
