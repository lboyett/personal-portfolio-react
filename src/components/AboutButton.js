import Icon from "@mdi/react";
import { mdiPlus, mdiMinus } from "@mdi/js";
import { useState, useEffect } from "react";

const AboutButton = (props) => {
  const [contentClass, setContentClass] = useState("collapsable-content");
  const [buttonClass, setButtonClass] = useState("info-button");
  const [icon, setIcon] = useState(mdiPlus);
  const [active, setActive] = useState(false);

  return (
    <div className="about-content">
      <button
        onClick={() => {
          if (!active) {
            setButtonClass("info-button active");
            setContentClass("collapsable-content active");
            setIcon(mdiMinus);
            setActive(true);
          } else {
            setButtonClass("info-button");
            setContentClass("collapsable-content");
            setIcon(mdiPlus);
            setActive(false);
          }
        }}
        className={buttonClass}
      >
        <h3>{props.title}</h3>
        <div>
          <Icon path={icon} size={1} color="black" />
        </div>
      </button>
      <div className={contentClass}>{props.textContent}</div>
    </div>
  );
};

export default AboutButton;
