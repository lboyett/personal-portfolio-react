import lukeImg from "./images/luke.jpeg";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";

const About = () => {
  return (
    <div className="body-div" id="about-body">
      <img id="luke-img" alt="Image of Luke" src={lukeImg} />
      <div className="about-div">
        <h2>Who am I?</h2>
        <button className="info-button">
          <h3>Anarchism</h3>
          <div>
            <Icon path={mdiPlus} title="User Profile" size={1} color="black" />
          </div>
        </button>
        <button className="info-button">
          <h3>BASE Jumping</h3>
          <div>
            <Icon path={mdiPlus} title="User Profile" size={1} color="black" />
          </div>
        </button>
        <button className="info-button">
          <h3>Psychedelics & Other Substances</h3>
          <div>
            <Icon path={mdiPlus} title="User Profile" size={1} color="black" />
          </div>
        </button>
        <button className="info-button">
          <h3>Web Development</h3>
          <div>
            <Icon path={mdiPlus} title="User Profile" size={1} color="black" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default About;
