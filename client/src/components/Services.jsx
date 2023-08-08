import React from "react";
import { servicesData } from "../data/services";
import Title from "./Title";

const Services = () => {
  return (
    <div className="container mt-5">
      <Title>Get Emergency Support Services!</Title>
      <div className="row mt-3">
        {servicesData.map((service) => {
          const { id, title, image, desc } = service;
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 service-card" key={id}>
              <div className="card">
                <div className="service-img">
                  <img src={image} alt="..." />
                </div>
                <h5 className="h5">{title}</h5>
                <p className="">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
