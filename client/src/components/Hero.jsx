import React from "react";

const Hero = () => {
  return (
    <div className="cont">
      <div className="navbar-cont">
        <div className="hero-img">
          <img
            src="https://img.freepik.com/free-photo/emergency-call-urgent-accidental-hotline-paramedic-concept_53876-125088.jpg?w=740&t=st=1691489640~exp=1691490240~hmac=33a4b55dccfeed2a5ea9349278df1eeacdd7bfcc57b5c7cd770ed37788653784"
            alt="..."
          />
        </div>
        <div className="navbar-wrapper">
          <div className="header-wrapper">
            <h6 className="h6">Emergency Support</h6>
            <div className="navbar-right">
              <button>Sign Up</button>
            </div>
          </div>
          <div className="hero-main">
            <p className="info-text">Connecting Care, Saving Lives</p>
            <h4 className="h4">Your Emergency Response Hub</h4>
            <button className="call-btn">Report</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
