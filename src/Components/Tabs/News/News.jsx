import React from "react";
import { Link } from "react-router-dom";
import "./News.css";

import news1Image from "../../../assets/news1.png";
import news2Image from "../../../assets/news2.png";
import news3Image from "../../../assets/news3.png";

import live1Image from "../../../assets/viral1.png";
import live2Image from "../../../assets/viral2.png";
import live3Image from "../../../assets/viral3.png";

import space1Image from "../../../assets/space1.png";
import space2Image from "../../../assets/space2.png";
import space3Image from "../../../assets/space3.png";

const News = () => {
  return (
    <>
      <div className="news">
        <div className="new-bg">
          <h1>News</h1>
        </div>
      </div>
      <div className="news-content">
        <h2>Around The Weather News</h2>
        <div className="news-cards">
          <div className="news-card">
            <img src={news1Image} alt="News 1" className="news-image" />
            <div className="news-text">
              <span>2 hours ago</span>
              <p>One of the daily rituals I often find myself doing</p>
              <Link to="/news/1" className="read-more">
                Read More
              </Link>
            </div>
          </div>
          <div className="news-card">
            <img src={news2Image} alt="News 2" className="news-image" />
            <div className="news-text">
              <span>3 hours ago</span>
              <p>Some parts of the state saw scant relief, as downtown</p>
              <Link to="/news/2" className="read-more">
                Read More
              </Link>
            </div>
          </div>
          <div className="news-card">
            <img src={news3Image} alt="News 3" className="news-image" />
            <div className="news-text">
              <span>2 hours ago</span>
              <p>Thunder is the sound caused by lightning.</p>
              <Link to="/thunder" className="read-more">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="news-content">
        <h2>Viral Weather</h2>
        <div className="news-cards">
          <div className="news-card">
            <img src={live1Image} alt="News 1" className="news-image" />
            <div className="news-text">
              <span>2 hours ago</span>
              <p>One of the daily rituals I often find myself doing</p>
              <Link to="/news/1" className="read-more">
                Read More
              </Link>
            </div>
          </div>
          <div className="news-card">
            <img src={live2Image} alt="News 2" className="news-image" />
            <div className="news-text">
              <span>3 hours ago</span>
              <p>Some parts of the state saw scant relief, as downtown</p>
              <Link to="/news/2" className="read-more">
                Read More
              </Link>
            </div>
          </div>
          <div className="news-card">
            <img src={live3Image} alt="News 3" className="news-image" />
            <div className="news-text">
              <span>2 hours ago</span>
              <p>Thunder is the sound caused by lightning.</p>
              <Link to="" className="read-more">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="news-content">
        <h2>Space And Astronomy</h2>
        <div className="news-cards">
          <div className="news-card">
            <img src={space1Image} alt="News 1" className="news-image" />
            <div className="news-text">
              <span>2 hours ago</span>
              <p>One of the daily rituals I often find myself doing</p>
              <Link to="/news/1" className="read-more">
                Read More
              </Link>
            </div>
          </div>
          <div className="news-card">
            <img src={space2Image} alt="News 2" className="news-image" />
            <div className="news-text">
              <span>3 hours ago</span>
              <p>Some parts of the state saw scant relief, as downtown</p>
              <Link to="/news/2" className="read-more">
                Read More
              </Link>
            </div>
          </div>
          <div className="news-card">
            <img src={space3Image} alt="News 3" className="news-image" />
            <div className="news-text">
              <span>2 hours ago</span>
              <p>Thunder is the sound caused by lightning.</p>
              <Link to="" className="read-more">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
