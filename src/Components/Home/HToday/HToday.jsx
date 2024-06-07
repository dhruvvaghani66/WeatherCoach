import React, { useState } from "react";
import "./HToday.css";

import cloudIcon from "../../../assets/cloudIcon.png";
import rainIcon from "../../../assets/rainIcon.png";
import suncloud from "../../../assets/suncloud.png";

import rainy from "../../../assets/rainy.png";
import sun from "../../../assets/sun.png";

const HToday = () => {
  const [view, setView] = useState("today");

  const handleViewChange = (view) => {
    setView(view);
  };

  return (
    <div className="htoday">
      <div className="buttons">
        <button
          className={view === "today" ? "active" : ""}
          onClick={() => handleViewChange("today")}
        >
          Today
        </button>
        <button
          className={view === "weekly" ? "active" : ""}
          onClick={() => handleViewChange("weekly")}
        >
          Weekly
        </button>
      </div>
      {view === "today" ? (
        <div className="today-content">
          <div className="car">
            <div className="carimg">
              <img src={cloudIcon} alt="Cloud Icon" />
            </div>
            <div className="row">
              <div className="small-box">Sun</div>
              <div className="small-box1">5:00PM</div>
            </div>
            <div className="row-c">
              <p>20℃</p>
              <span>25℃</span>
            </div>
            <div className="row01">
              <div className="row11">
                <img src={rainy} alt="Rain Icon" />
                <p>45Km/h</p>
              </div>
              <div className="row12">
                <img src={sun} alt="Sun Icon" />
                <p>70%</p>
              </div>
            </div>
            <div className="center-text">Cloudy</div>
          </div>
          <div className="car">
            <div className="carimg1">
              <img src={rainIcon} alt="Rain Icon" />
            </div>
            <div className="row">
              <div className="small-box">Mon</div>
              <div className="small-box1">6:00PM</div>
            </div>
            <div className="row-c">
              <p>20℃</p>
              <span>25℃</span>
            </div>
            <div className="row01">
              <div className="row11">
                <img src={rainy} alt="Rain Icon" />
                <p>45Km/h</p>
              </div>
              <div className="row12">
                <img src={sun} alt="Sun Icon" />
                <p>70%</p>
              </div>
            </div>
            <div className="center-text">Cloudy</div>
          </div>
          <div className="car">
            <div className="carimg3">
              <img src={suncloud} alt="Third Icon" />
            </div>
            <div className="row">
              <div className="small-box">Tue</div>
              <div className="small-box1">5:00PM</div>
            </div>
            <div className="row-c">
              <p>20℃</p>
              <span>25℃</span>
            </div>
            <div className="row01">
              <div className="row11">
                <img src={rainy} alt="Rain Icon" />
                <p>45Km/h</p>
              </div>
              <div className="row12">
                <img src={sun} alt="Sun Icon" />
                <p>70%</p>
              </div>
            </div>
            <div className="center-text">Cloudy</div>
          </div>
          <div className="car">
            <div className="carimg">
              <img src={cloudIcon} alt="Cloud Icon" />
            </div>
            <div className="row">
              <div className="small-box">Wed</div>
              <div className="small-box1">5:00PM</div>
            </div>
            <div className="row-c">
              <p>20℃</p>
              <span>25℃</span>
            </div>
            <div className="row01">
              <div className="row11">
                <img src={rainy} alt="Rain Icon" />
                <p>45Km/h</p>
              </div>
              <div className="row12">
                <img src={sun} alt="Sun Icon" />
                <p>70%</p>
              </div>
            </div>
            <div className="center-text">Cloudy</div>
          </div>
        </div>
      ) : (
        <div className="weekly-content">
          <p>Weekly content goes here...</p>
        </div>
      )}
    </div>
  );
};

export default HToday;
