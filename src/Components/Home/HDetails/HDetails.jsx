import React from "react";
import "./HDetails.css";
import sunriseImg from "../../../assets/sunrisebg.png"; // Update the path as needed
import sunsetImg from "../../../assets/sunsetbg.png"; // Update the path as needed
import cloudIcon from "../../../assets/detailcloud.png"; // Update the path as needed
import rainIcon from "../../../assets/1.png"; // Update the path as needed
import r2 from "../../../assets/r2.png"; // Update the path as needed
import r3 from "../../../assets/r3.png"; // Update the path as needed
// import r4 from "../../../assets/r4.png"; // Update the path as needed
import rightarrow from "../../../assets/rightarrow.png"; // Update the path as needed

const HDetails = () => {
  return (
    <div className="hdetail">
      <div className="hdetail-page">
        <div className="hdetail-left">
          <h2>Today’s Weather Details</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
            cursus quis Lorem ipsum dolor sit amet, consectetur adipiscing elit
            quis
          </p>
          <div className="detail-cards">
            <div className="detail-card">
              <p>Sunrise</p>
              <span>6:42 Am</span>
            </div>
            <div className="detail-card1">
              <p>Sunset</p>
              <span>7:15 Pm</span>
            </div>
          </div>
          <div className="detail-card-large">
            <div className="row">
              <div className="item">
                <img src={cloudIcon} alt="Wind" />
                <>Wind 3km/h</>
              </div>
              <div className="item">
                <img src={cloudIcon} alt="Wind" />
                <>Wind 3km/h</>
              </div>
            </div>
            <div className="row">
              <div className="item">
                <img src={rainIcon} alt="Rain" />
                <>Rain 78%</>
              </div>
              <div className="item">
                <img src={rainIcon} alt="Rain" />
                <>Rain 78%</>
              </div>
            </div>
          </div>
        </div>
        <div className="hdetail-right">
          
          <div className="forecast-columns">
            {/* <div className="current-temp-card"> */}
            <div className="temp-row">
              <p>20℃</p>
              <span>20℃</span>
            </div>
            {/* </div> */}
            <div className="righ">
              <div className="forecast-column1">
                <img src={cloudIcon} alt="Rain" />
                <p>24℃</p>
                <p>1:00 pm</p>
                <p>Light Rain</p>
              </div>
              <div className="forecast-column1">
                <img src={r2} alt="Rain" />
                <p>24℃</p>
                <p>1:00 pm</p>
                <p>Light Rain</p>
              </div>
              <div className="forecast-column1">
                <img src={r3} alt="Rain" />
                <p>24℃</p>
                <p>1:00 pm</p>
                <p>Light Rain</p>
              </div>
              <div className="forecast-column1">
                <img src={r2} alt="Rain" />
                <p>24℃</p>
                <p>1:00 pm</p>
                <p>Light Rain</p>
              </div>
              <div className="forecast-column1">
                <img src={rainIcon} alt="Rain" />
                <p>24℃</p>
                <p>1:00 pm</p>
                <p>Light Rain</p>
              </div>
            </div>
            <div className="detail-end">
              <div className="news-update">News Upadte</div>
              <div className="news-tomorrow">
                View Tomorrow forecast
                <img src={rightarrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HDetails;
