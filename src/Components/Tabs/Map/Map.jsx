import React from "react";
import "./Map.css";
import { Link } from "react-router-dom";

import tempImage from "../../../assets/maptemp.png"; // Update the path as needed
import cloudImage from "../../../assets/mapcloud.png"; // Update the path as needed
import windImage from "../../../assets/mapwind.png"; // Update the path as needed

import indiaIcon from "../../../assets/india.png"; // Update the path as needed
import germanyIcon from "../../../assets/germany.png"; // Update the path as needed
import denmarkIcon from "../../../assets/denmark.png"; // Update the path as needed

import france from "../../../assets/france.png"; // Update the path as needed
import Poland from "../../../assets/Poland.png"; // Update the path as needed
import Switzerland from "../../../assets/Switzerland.png"; // Update the path as needed

import netherland from "../../../assets/netherland.png"; // Update the path as needed
import newyork from "../../../assets/new york.png"; // Update the path as needed
import london from "../../../assets/london.png"; // Update the path as needed

const Map = () => {
  return (
    <>
      <div className="map">
        <div className="map-bg">
          <h1>Map</h1>
        </div>
      </div>
      <div className="map-content">
        <h2>Europe Map Finder</h2>
        <div className="map-rows">
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
        <div className="map-cards">
          <div className="map-card">
            <img src={indiaIcon} alt="India" className="country-icon" />
            <Link to="/maps-detail" className="detail-text">
              <p>India</p>
            </Link>
          </div>
          <div className="map-card">
            <img src={germanyIcon} alt="Germany" className="country-icon" />
            <p>Germany</p>
          </div>
          <div className="map-card">
            <img src={denmarkIcon} alt="Denmark" className="country-icon" />
            <p>Denmark</p>
          </div>
        </div>

        <div className="map-cards1">
          <div className="map-card">
            <img src={france} alt="India" className="country-icon" />
            <p>France</p>
          </div>
          <div className="map-card">
            <img src={Poland} alt="Germany" className="country-icon" />
            <p>Poland</p>
          </div>
          <div className="map-card">
            <img src={Switzerland} alt="Denmark" className="country-icon" />
            <p>Switzerland</p>
          </div>
        </div>

        <div className="map-cards2">
          <div className="map-card">
            <img src={netherland} alt="India" className="country-icon" />
            <p>Netherland</p>
          </div>
          <div className="map-card">
            <img src={newyork} alt="Germany" className="country-icon" />
            <p>New York</p>
          </div>
          <div className="map-card">
            <img src={london} alt="Denmark" className="country-icon" />
            <p>London</p>
          </div>
        </div>
      </div>

      <div className="map-content">
        <h2>Asia Map Finder</h2>
        <div className="map-rows">
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
        <div className="map-cards">
          <div className="map-card">
            <img src={indiaIcon} alt="India" className="country-icon" />
            <p>India</p>
          </div>
          <div className="map-card">
            <img src={germanyIcon} alt="Germany" className="country-icon" />
            <p>Germany</p>
          </div>
          <div className="map-card">
            <img src={denmarkIcon} alt="Denmark" className="country-icon" />
            <p>Denmark</p>
          </div>
        </div>

        <div className="map-cards1">
          <div className="map-card">
            <img src={france} alt="India" className="country-icon" />
            <p>France</p>
          </div>
          <div className="map-card">
            <img src={Poland} alt="Germany" className="country-icon" />
            <p>Poland</p>
          </div>
          <div className="map-card">
            <img src={Switzerland} alt="Denmark" className="country-icon" />
            <p>Switzerland</p>
          </div>
        </div>

        <div className="map-cards2">
          <div className="map-card">
            <img src={netherland} alt="India" className="country-icon" />
            <p>Netherland</p>
          </div>
          <div className="map-card">
            <img src={newyork} alt="Germany" className="country-icon" />
            <p>New York</p>
          </div>
          <div className="map-card">
            <img src={london} alt="Denmark" className="country-icon" />
            <p>London</p>
          </div>
        </div>
      </div>

      <div className="map-content">
        <h2>Africa Map Finder</h2>
        <div className="map-rows">
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
        <div className="map-cards">
          <div className="map-card">
            <img src={indiaIcon} alt="India" className="country-icon" />
            <p>India</p>
          </div>
          <div className="map-card">
            <img src={germanyIcon} alt="Germany" className="country-icon" />
            <p>Germany</p>
          </div>
          <div className="map-card">
            <img src={denmarkIcon} alt="Denmark" className="country-icon" />
            <p>Denmark</p>
          </div>
        </div>

        <div className="map-cards1">
          <div className="map-card">
            <img src={france} alt="India" className="country-icon" />
            <p>France</p>
          </div>
          <div className="map-card">
            <img src={Poland} alt="Germany" className="country-icon" />
            <p>Poland</p>
          </div>
          <div className="map-card">
            <img src={Switzerland} alt="Denmark" className="country-icon" />
            <p>Switzerland</p>
          </div>
        </div>

        <div className="map-cards2">
          <div className="map-card">
            <img src={netherland} alt="India" className="country-icon" />
            <p>Netherland</p>
          </div>
          <div className="map-card">
            <img src={newyork} alt="Germany" className="country-icon" />
            <p>New York</p>
          </div>
          <div className="map-card">
            <img src={london} alt="Denmark" className="country-icon" />
            <p>London</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
