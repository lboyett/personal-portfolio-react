import { useState, useEffect } from "react";
import charlieImg from "./images/charlie.jpg";

const Portfolio = () => {
  const [charlie, setCharlie] = useState(false);

  function displayBitch() {
    setCharlie(!charlie);
    console.log(charlie);
  }

  if (!charlie) {
    return (
      <div className="body-div">
        <h1>Portfolio</h1>
        <button onClick={() => displayBitch()}>Click Me</button>
      </div>
    );
  } else if (charlie) {
    return (
      <div className="body-div">
        <h1>Portfolio</h1>
        <button onClick={() => displayBitch()}>Click Me</button>
        <img src={charlieImg}></img>
      </div>
    );
  }
};

export default Portfolio;
