import React from "react";
import "./StudentProfile.css";

const StudentProfile = () => {
  return (
    <div className="student-profile">
      <div className="sidebar">
        <div className="menu-item">Dashboard</div>
        <div className="menu-item">Profile</div>
        <div className="menu-item">Community</div>
        <div className="menu-item">Scholarship Application</div>
        <div className="menu-item">Logout</div>
      </div>
      <div className="content">
        <div className="header">
          <img
            src="./assets/rectangle-3-3.svg"
            alt="Header"
            className="header-image"
          />
        </div>
        <div className="profile-section">
          <img
            src="./assets/ellipse-2-2.svg"
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-name">Nina Macintire</div>
        </div>
        <div className="cards">
          {/* Contact Card */}
          <div className="card">
            <div className="card-title">Contact</div>
            <div className="card-content">
              <div>Email: mashikur@gmail.com</div>
              <div>Phone: 2348181934961</div>
            </div>
          </div>
          {/* Skills Card */}
          <div className="card">
            <div className="card-title">Skills</div>
            <div className="card-content">
              <div>PHP, C, C++, Java</div>
            </div>
          </div>
          {/* Education Card */}
          <div className="card">
            <div className="card-title">Education</div>
            <div className="card-content">
              <div>Bsc in CSE from City University</div>
              <div>HSE from City College</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
