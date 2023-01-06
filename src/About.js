import lukeImg from "./images/luke.jpeg";
import Icon from "@mdi/react";
import { mdiPlus, mdiMinus } from "@mdi/js";
import { useState } from "react";
import AboutButton from "./components/AboutButton";

const About = () => {
  return (
    <div className="body-div" id="about-body">
      <img id="luke-img" alt="Image of Luke" src={lukeImg} />
      <div className="about-div">
        <h2>Who am I?</h2>
        <AboutButton
          title="Anarchism"
          textContent='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.'
        ></AboutButton>
        <AboutButton
          title="Base Jumping"
          textContent='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.'
        ></AboutButton>
        <AboutButton
          title="Psychedelics & Other Substances"
          textContent='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.'
        ></AboutButton>
        <AboutButton
          title="Web Development"
          textContent='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.'
        ></AboutButton>
      </div>
    </div>
  );
};

export default About;
