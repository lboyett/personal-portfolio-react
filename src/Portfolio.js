import { useState, useEffect } from "react";
import charlieImg from "./images/charlie.jpg";

const Portfolio = () => {
  const [charlie, setCharlie] = useState(false);

  function displayBitch() {
    setCharlie(true);
    console.log(charlie);
  }

  if (!charlie) {
    return (
      <div className="body-div" id="about-body">
        <h1>Portfolio</h1>
        <button onClick={() => displayBitch()}>Click Me</button>
      </div>
    );
  } else if (charlie) {
    <div className="body-div" id="about-body">
      <h1>Portfolio</h1>
      <button onClick={() => displayBitch()}>Click Me</button>
      {/* <img src={charlieImg}></img> */}
    </div>;
  }
};

export default Portfolio;
