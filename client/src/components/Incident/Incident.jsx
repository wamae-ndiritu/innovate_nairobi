import React from "react";
import "./Incident.scss";

const Incident = () => {
  return (
    <div className="container">
      <div className="row incident">
        <img src="/assets/call-center.png" alt="" />
        <div className="detail">
          <span>
            <b>Nairobi, Kenya</b>
          </span>
          <span>
            Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut.
            Carrot cake caramels pie sweet apple pie tiramisu carrot cake.
            Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon
            drops bear claw gummies.
          </span>
          <p>25 days ago</p>
        </div>
      </div>
    </div>
  );
};

export default Incident;
