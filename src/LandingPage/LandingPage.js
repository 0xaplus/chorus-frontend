import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">
          <img src="./assets/vector-3.svg" alt="Logo" />
          <div className="title">
            <span>S</span>
            <span>U</span>
            <span>R</span>
            <span>O</span>
            <span>H</span>
            <span>C</span>
          </div>
        </div>
        <h1 className="headline">
          CHORUS FOR CHANGE
          <br />
          CHORUS FOR SCHOLARSHIP
        </h1>
        <p className="tagline">
          A decentralized platform designed to offer educational scholarships
          and innovation in Africa funded via DeFi protocols
        </p>
        <button className="donate-button">DONATE</button>
      </header>

      <section className="banner">
        <div className="banner-content">
          <img
            src="./assets/mask-group.svg"
            alt="Banner Image"
            className="banner-image"
          />
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">As Seen In...</h2>
        <img
          src="./assets/frame-21.svg"
          alt="Feature Logos"
          className="features-image"
        />
      </section>

      <section className="impact-stats">
        <div className="stat-item">
          <h3>6054</h3>
          <p>Students/year</p>
        </div>
        <div className="stat-item">
          <h3>124</h3>
          <p>Staff Members</p>
        </div>
        <div className="stat-item">
          <h3>1245</h3>
          <p>Scholarships Awardees</p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="about">
            <h4>ABOUT</h4>
            <ul>
              <li>OUR TEAM</li>
              <li>OUR STORY</li>
              <li>CONTACT US</li>
            </ul>
          </div>
          <div className="help">
            <h4>WAYS TO HELP</h4>
            <ul>
              <li>DONATE</li>
            </ul>
          </div>
          <div className="work">
            <h4>OUR WORK</h4>
            <ul>
              <li>CHORUS EDUCATION</li>
              <li>CHORUS HEALTH</li>
              <li>OUR VALUES</li>
            </ul>
          </div>
        </div>
        <div className="footer-note">
          <img src="./assets/vector-2.svg" alt="Logo" />
          <span>2024 CHORUS NETWORK. ALL RIGHTS RESERVED</span>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
