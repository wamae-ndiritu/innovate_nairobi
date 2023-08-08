import React from "react";
import Title from "./Title";

const RecordIncidence = () => {
  return (
    <div className="container mt-5">
      <Title>Post an Incidence</Title>
      <div className="row record-cont mt-3">
        <div className="incidence-cont">
          <div className="col-lg-5 col-md-5 col-sm-6 col-10 incidence-note">
            <div className="line"></div>
            <p>
              By Posting an incidence you may have witnessed, you help create
              awareness to the public. This may also be used by social providers
              to know the state of the area and what measures to take.
            </p>
          </div>
          <form>
            <div className="photo-cont">
              <label htmlFor="photo" className="photo-wrapper">
                <div className="camera-cont">
                  <i className="fa fa-camera" aria-hidden="true"></i>
                </div>
              </label>
              <input
                type="file"
                id="photo"
                accept="image/*"
                capture="camera"
                className="d-none"
              />
              <p>Take a photo or upload</p>
            </div>
            <div className="incidence-details">
              <label htmlFor="loc">Location</label>
              <input type="text" className="form-control" id="loc" />
              <label htmlFor="desc">Describe the incidence</label>
              <textarea className="form-control" id="desc" rows="3"></textarea>
              <button className="btn-submit">Post Incidence</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecordIncidence;
