import React from "react";
import "./HSan.css";

import windIcon from "../../../assets/swind.png";
import rainIcon from "../../../assets/srain.png";
import weatherIcon from "../../../assets/scel.png";

const HSan = () => {
  const data = {
    date: "Monday, May 23",
    updateTime: "Update As Of 2:45 PM",
    windSpeed: 3,
    rainPercentage: 78,
    temperature: {
      min: 23,
      max: 31,
    },
  };
  return (
    <div className="san">
      <div className="weather-page">
        {/* Left side */}
        <div className="left-side1">
          <h2>San Francisco</h2>
          <div className="row1">
            <span>{data.date}</span>
            <span>{data.updateTime}</span>
          </div>
          <div className="box1">
            <div className="cloud">
              <div className="row2">
                <img src={windIcon} alt="Wind Icon" />
                Wind
                <p>{data.windSpeed}km/h</p>
              </div>
              <div className="row2">
                <img src={windIcon} alt="Wind Icon" />
                Wind
                <p>{data.windSpeed}km/h</p>
              </div>
            </div>
            <div className="rain">
              <div className="row3">
                <img src={rainIcon} alt="Rain Icon" />
                Rain
                <p>{data.rainPercentage}%</p>
              </div>
              <div className="row4">
                <img src={rainIcon} alt="Rain Icon" />
                <span>Rain</span>
                <p>{data.rainPercentage}%</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="right-side1">
          <img src={weatherIcon} alt="Weather Icon" />
          <p>{data.temperature.min}℃</p>
          <span>{data.temperature.min}℃ - {data.temperature.max}℃</span>
        </div>
      </div>
    </div>
  );
};

export default HSan;
