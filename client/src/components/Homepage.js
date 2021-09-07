import React, { Component } from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

export default class Homepage extends Component {
  render() {
    window.onload = () => {
      const video = document.querySelector(".video-hero");
      if (video) {
        video.play();
      }
    };

    return (
      <div>
        <div className="video-hero">
          <video width="100%" height="100%" loop muted autoPlay>
            <source
              src="/assets/homepageVideo/salpiconHeroMovie.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="position-main-box">
          <div className="main-box">
            <h1>
              Get the<span className="highlight-yellow">best</span> manicures
              and pedicures at your{" "}
              <span className="highlight-pink">place</span>
              <h2>
                Stop scrolling and{" "}
                <Link to="/signup" className="navbar-button">
                  Sign Up
                </Link>
              </h2>
              <h6>
                {" "}
                <span className="highlight-white">By.</span>{" "}
                <span className="highlight-white">Juan</span>{" "}
                <span className="highlight-white">Ramirez</span>
              </h6>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
