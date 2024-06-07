import React from "react";
import "./Home.css";
import weatherGif from "../../assets/Girl Cycling in autumn.gif"; 
import HPocket from "./HPocket/HPocket";
import HSan from "./HSan/HSan";
import HToday from "./HToday/HToday";
import HRecent from "./HRecent/HRecent";
import HDetails from "./HDetails/HDetails";
import HForecast from "./HForecast/HForecast";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-content">
          <h1>Weather Forecast for Everyone</h1>
          <p>
            The forecast for today is sunny and bright, with a high of 68
            degrees. Enjoy the beautiful weather and make sure to wear
            sunscreen.
          </p>
          <button className="notification-button">Get Notifications</button>
        </div>
        <div className="home-image">
          <img src={weatherGif} alt="Weather GIF" />
        </div>
      </div>
      <div>
        <HPocket />
        <HSan />
        <HToday />
        <HRecent />
        <HDetails />
        <HForecast />
      </div>
    </>
  );
};

export default Home;
