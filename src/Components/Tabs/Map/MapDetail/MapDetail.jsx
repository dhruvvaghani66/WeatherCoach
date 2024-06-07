import React from "react";
import "./MapDetail.css";

import indiaImage from "../../../../assets/indiaimg.png"; // Update the path as needed
import tempImage from "../../../../assets/maptemp.png"; // Update the path as needed
import cloudImage from "../../../../assets/mapcloud.png"; // Update the path as needed
import windImage from "../../../../assets/mapwind.png"; // Update the path as needed
import cloudGif from "../../../../assets/cloud.gif"; // Update the path as needed
import blackGif from "../../../../assets/wed.gif"; // Update the path as needed
import thuGif from "../../../../assets/thu.gif"; // Update the path as needed
import sunCloudIcon from "../../../../assets/cloudsun.png"; // Update the path as needed
import locationIcon from "../../../../assets/loca.png"; // Update the path as needed
import cloudIcon from "../../../../assets/patchycloud.png"; // Update the path as needed
import moonIcon from "../../../../assets/mooon.png"; // Update the path as needed
import uvIcon from "../../../../assets/uv.png"; // Update the path as needed

import sunrise1 from "../../../../assets/sunrise1.png"; // Update the path as needed
import sunrise2 from "../../../../assets/sunrise2.png"; // Update the path as needed

const MapDetail = () => {
  return (
    <>
      <div className="maps-detail">
        <div className="maps-bg">
          <h1>Map Details</h1>
        </div>
      </div>
      <div className="maps-content">
        <h2>India Weather Map</h2>
        <div className="para">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="maps-row">
          <div className="map-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15281577.78722944!2d72.09980978957589!3d20.75671284294001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1717583751388!5m2!1sen!2sin"
              width="610"
              height="760"
              className="map-iframe"
              title="India Map"
            ></iframe>
            {/* <img src={indiaImage} alt="India" className="india-image" /> */}
          </div>
          <div className="map-right">
            <div className="map-column">
              <img src={tempImage} alt="Temperature Map" className="map-icon" />
              <p>Temperature Map</p>
            </div>
            <div className="map-column">
              <img src={cloudImage} alt="Cloud Map" className="map-icon" />
              <p>Cloud Map</p>
            </div>
            <div className="map-column">
              <img src={windImage} alt="Wind Map" className="map-icon" />
              <p>Wind Map</p>
            </div>
          </div>
        </div>
        <div className="weekly">
          <h2>India Weekly Forecast</h2>
          <div className="weekly-row">
            <div className="weekly-card">
              <p>Sun</p>
              <img src={cloudGif} alt="Sun" className="weather-icon" />
              <span>12° / 2°</span>
            </div>
            <div className="weekly-card">
              <p>Mon</p>
              <img src={cloudGif} alt="Cloud" className="weather-icon" />
              <span>12° / 2°</span>
            </div>
            <div className="weekly-card">
              <p>Tue</p>
              <img src={cloudGif} alt="Rain" className="weather-icon" />
              <span>12° / 2°</span>
            </div>
            <div className="weekly-card">
              <p>Wed</p>
              <div className="wed">
                <img src={blackGif} alt="Cloud" className="weather-icon1" />
              </div>
              <div className="wedd">
                <span>12° / 2°</span>
              </div>
            </div>
            <div className="weekly-card">
              <p>Thu</p>
              <img src={thuGif} alt="Sun" className="weather-thu" />
              <span>12° / 2°</span>
            </div>
            <div className="weekly-card">
              <p>Fri</p>
              <img src={cloudGif} alt="Rain" className="weather-icon" />
              <span>12° / 2°</span>
            </div>
            <div className="weekly-card">
              <p>Sat</p>
              <div className="wed">
                <img src={blackGif} alt="Cloud" className="weather-icon1" />
              </div>
              <div className="wedd">
                <span>12° / 2°</span>
              </div>
            </div>
          </div>
          <div className="divider"></div>

          <div className="main-card">
            <div className="main-card-left">
              <div className="main-weather-card">
                <img
                  src={sunCloudIcon}
                  alt="Sun Cloud"
                  className="weather-icon-main"
                />
                <span>12°C</span>
              </div>
              <div className="main-weather-info">
                <div className="main-weather-row">
                  <div className="main-weather-info-row">
                    <img
                      src={locationIcon}
                      alt="Location"
                      className="weather-icon-small"
                    />
                    <span>Mumbai</span>
                  </div>
                  <div className="main-weather-info-row">
                    <span>Sunday, May 4</span>
                  </div>
                </div>

                <div className="divider-small"></div>
                <div className="main-weather-col">
                  <div className="main-weather-info-patchy">
                    <img
                      src={cloudIcon}
                      alt="Cloud"
                      className="weather-icon-small"
                    />
                    <span>Patchy Cloudy Day</span>
                    <div className="main-weather-info-moon">
                      <img src={moonIcon} alt="Moon" className="" />
                      <span>19:30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="main-card-right">
                <div className="extra-card-row">
                  <div className="extra-card">
                    <p>UV Index</p>
                    <img
                      src={uvIcon}
                      alt="UV Index"
                      className="extra-card-icon"
                    />
                    <span>234568</span>
                  </div>
                  <div className="extra-card">
                    <div className="wind">
                      <p>Wind Staus</p>
                      <div className="km">
                        <p>7.70</p>
                        <span>km</span>
                      </div>
                    </div>
                  </div>
                  <div className="extra-card">
                    <div className="sunrise">
                      <p>Sunrise & Sunset</p>

                      <div className="sun-col">
                        <div className="sun-row">
                          <img src={sunrise1} alt="" />
                          <p>6:30 Am</p>
                        </div>
                        <div className="sun-row1">
                          <img src={sunrise2} alt="" />
                          <p>6:30 Am</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="extra-card-row">
                  <div className="extra-card">
                    <div className="humidity">
                      <p>Humidity</p>
                      <span>20%</span>
                    </div>
                  </div>
                  <div className="extra-card">
                    <div className="visibility">
                      <p>Visibility</p>
                      <div className="visi">
                        <p>8.9</p>
                        <span>km</span>
                      </div>
                    </div>
                  </div>
                  <div className="extra-card">
                    <div className="air">
                      <p>Air Quality</p>
                      <span>105</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapDetail;
