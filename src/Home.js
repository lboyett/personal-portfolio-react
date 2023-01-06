import beachSunsetImg from "./images/beach-sunset.jpg";
import { useState, useEffect, useRef } from "react";

const Home = () => {
  const [spanClass, setSpanClass] = useState("");

  return (
    <div className="content">
      <div className="topdiv">
        <div id="beach-img-container">
          <img
            onMouseEnter={() => setSpanClass("journey-shimmer")}
            onMouseLeave={() => setSpanClass("")}
            id="beach-sunset"
            src={beachSunsetImg}
            alt=""
          />
        </div>
        <div id="journey">
          <span className={spanClass}>Your journey starts here.</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
