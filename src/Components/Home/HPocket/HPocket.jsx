import React from "react";
import "./HPocket.css";

import placeholderImage from "../../../assets/pocket_cloud.png";
import dropIcon from "../../../assets/p_drop.png";
import cloudyIcon from "../../../assets/p_cloud.png";
import sunIcon from "../../../assets/p_sun.png";

const HPocket = () => {
  const data = [
    {
      city: "Cape Town",
      temperature: "13.32",
      unit: "°C",
      day: "Tuesday",
      icon: dropIcon,
      percentage: "66",
      weather: "Partly Cloudy",
      extraStats: [
        { icon: dropIcon, value: "66", unit: "%" },
        { icon: cloudyIcon, value: "14", unit: "%" },
        { icon: sunIcon, value: "20", unit: "%" },
      ],
    },
    {
      city: "Cape Town",
      temperature: "13.32",
      unit: "°C",
      day: "Tuesday",
      icon: dropIcon,
      percentage: "66",
      weather: "Partly Cloudy",
      extraStats: [
        { icon: dropIcon, value: "66", unit: "%" },
        { icon: cloudyIcon, value: "14", unit: "%" },
        { icon: sunIcon, value: "20", unit: "%" },
      ],
    },
  ];

  return (
    <div className="pocket">
      <div className="pocket-left">
        <div className="hpocket">
          {data.map((item, index) => (
            <div
              key={index}
              className={`box ${index % 2 === 0 ? "right-box" : "left-box"}`}
            >
              <div className="box-content">
                <div className="text-content">
                  <h2>{item.city}</h2>
                  <p>
                    {item.temperature}
                    <span className="unit">{item.unit}</span>
                  </p>
                  {item.day}
                </div>
                <div className="r">
                  <img
                    src={placeholderImage}
                    alt="Weather"
                    className="weather-image"
                  />
                  <p>{item.weather}</p>
                </div>
              </div>
              <div className="divider"></div>
              <div className="stats-row">
                {item.extraStats.map((stat, statIndex) => (
                  <div key={statIndex} className="stat-item">
                    <img src={stat.icon} alt="Icon" className="icon" />
                    <p>
                      {stat.value}
                      <span className="unit">{stat.unit}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pocket-right">
        <h2>Weather in Your Pocket</h2>
        <span>Directly From Your Phone</span>
        <p>
          The forecast for today is sunny and bright, with a high of 68 degrees.
          Enjoy the beautiful weather and make sure to wear sunscreen.
        </p>
        <p>
          The forecast for today is sunny and bright, with a high of 68 degrees.
          Enjoy the beautiful weather and make sure to wear sunscreen.
        </p>
      </div>
    </div>
  );
};

export default HPocket;
