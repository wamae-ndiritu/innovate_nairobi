import React from "react";

const Services = () => {
  return (
    <div className="cont">
      <div className="container">
        <h6 className="h6 text-center sub-title  my-3">
          Get Responses for your Emergencies!
        </h6>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="service-card shadow-sm">
              <div className="service-img">
                <img src="/assets/call-center.png" alt="..." />
              </div>
              <h6 className="service-title">Ambulance</h6>
              <p>
                Jelly sweet roll jelly beans biscuit pie macaroon chocolate
                donut. Carrot cake caramels pie sweet apple pie tiramisu carrot
                cake.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">card</div>
          <div className="col-lg-3 col-md-4 col-sm-6">card</div>
          <div className="col-lg-3 col-md-4 col-sm-6">card</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
