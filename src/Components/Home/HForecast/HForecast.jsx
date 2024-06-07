import React from "react";
import "./HForecast.css";
import { Link } from "react-router-dom";

import forecast1Image from "../../../assets/forecast1.png";
import forecast2Image from "../../../assets/forecast2.png";
import forecast3Image from "../../../assets/forecast3.png";

const HForecast = () => {
  return (
    <div>
      <div className="forecast-content">
        <h2>Weather Forecast News</h2>
       <div className="pa">
       <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
          cursus quis Lorem ipsum dolor sit amet, consectetur adipiscing elit
          quis
        </p>
       </div>
        <div className="forecast-cards">
          <div className="forecast-card">
            <img src={forecast1Image} alt="News 1" className="forecast-image" />
            <div className="forecast-text">
              <span>19th jan, 2022 </span>
              <p>One of the daily rituals I often find myself doing</p>
              <Link to="" className="forecastread-more">
                Read More
              </Link>
            </div>
          </div>
          <div className="forecast-card">
            <img src={forecast2Image} alt="News 2" className="forecast-image" />
            <div className="forecast-text">
              <span>19th jan, 2022 </span>
              <p>Some parts of the state saw scant relief, as downtown</p>
              <Link to="" className="forecastread-more">
                Read More
              </Link>
            </div>
          </div>
          <div className="forecast-card">
            <img src={forecast3Image} alt="News 3" className="forecast-image" />
            <div className="forecast-text">
              <span>19th jan, 2022 </span>
              <p>Thunder is the sound caused by lightning.</p>
              <Link to="" className="forecastread-more">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <button className="read-more-btn">Read More</button>
      </div>
    </div>
  );
};

export default HForecast;
