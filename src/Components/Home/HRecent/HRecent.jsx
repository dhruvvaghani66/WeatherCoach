import React from "react";
import "./HRecent.css";

import card1 from "../../../assets/card1.png";
import card2 from "../../../assets/card2.png";

const HRecent = () => {
  return (
    <div className="hrecent">
      <div className="left-side">
        <h1>
          Recent
          <br /> Search
          <br /> Weather
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </p>
      </div>
      <div className="right-side11">
        <div className="card-container11">
          <img src={card1} alt="Cloud Icon" />
          <img src={card2} alt="Rain Icon" className="card2img" />
        </div>
      </div>
    </div>
  );
};

export default HRecent;
