import React, { useState } from "react";
import "./ClimateChange.css";

import climate_sunIcon from "../../../assets/climate_sun.png";
import divide from "../../../assets/divider.png";
import tempImage from "../../../assets/temp.png";
// import { Chart } from "chart.js";
// import precipitationImage from "../../../assets/precipitation.png";
// import windImage from "../../../assets/wind.png";
import MyChart from "../../chart/MyChart";

const ClimateChange = () => {
  const [activeButton, setActiveButton] = useState("temperature");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderActiveImage = () => {
    switch (activeButton) {
      case "temperature":
        return (
          <div className="active-image">
            <MyChart />
          </div>
          // <img src={tempImage} alt="Temperature" className="active-image" />
        );
      case "precipitation":
        return (
          <div className="active-image">
            <MyChart />
          </div>
        );
      case "wind":
        return (
          <div className="active-image">
            <MyChart />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="climate-change">
        <div className="bg">
          <h1>Climate Change</h1>
        </div>
      </div>
      <div className="content">
        <div className="content-text">Today’s Weather Details</div>
        <div className="main-row">
          <img src={climate_sunIcon} alt="Sun Icon" className="sun-icon" />
          <div className="weather-details">
            <div className="city">San Francisco</div>
            <div className="day-condition">
              <span>Monday, May 23</span>
              <span>Partly Cloudy</span>
            </div>
          </div>
          <div className="additional-details">
            <div>Precipitation: 0%</div>
            <div>Humidity: 51%</div>
            <div>Wind: 16 km/h</div>
          </div>
        </div>
        <div className="content-buttons">
          <button
            className={activeButton === "temperature" ? "active" : ""}
            onClick={() => handleButtonClick("temperature")}
          >
            Temperature
          </button>
          <div className="div">
            <img src={divide} alt="" />
          </div>
          <button
            className={activeButton === "precipitation" ? "active" : ""}
            onClick={() => handleButtonClick("precipitation")}
          >
            Precipitation
          </button>
          <div className="div">
            <img src={divide} alt="" />
          </div>
          <button
            className={activeButton === "wind" ? "active" : ""}
            onClick={() => handleButtonClick("wind")}
          >
            Wind
          </button>
        </div>
        <div className="active-image-container">{renderActiveImage()}</div>
      </div>
      {/* <MyChart /> */}
    </>
  );
};

export default ClimateChange;
