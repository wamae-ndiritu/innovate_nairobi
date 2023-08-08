import React from "react";

const Hero = () => {
  return (
    <div className="cont">
      <div className="hero-wrapper">
        <img
          src="https://img.freepik.com/free-photo/emergency-call-urgent-accidental-hotline-paramedic-concept_53876-125088.jpg?w=740&t=st=1691530407~exp=1691531007~hmac=7bd122d0fb2fb9626e0f6f0c62632db8a8e0116de641e4e85a460de1bd4cd6b4"
          alt="..."
        />
        <div className="hero-overlay">
          <div className="hero-header">
            <h5 className="h5">Emergency Support</h5>
            <button className="header-btn">Sign Up</button>
          </div>
          <div className="hero-info">
            <p>Connecting Care, Saving Lives:</p>
            <h6 className="h6">Your Emergency Response Hub</h6>
            <div className="call-btn">
              <button>
                <i
                  className="fa fa-volume-control-phone"
                  aria-hidden="true"
                ></i>
                CALL FOR HELP{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
