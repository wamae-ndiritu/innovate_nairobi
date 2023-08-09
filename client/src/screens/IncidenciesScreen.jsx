import React from "react";
import Incident from "../components/Incident/Incident";
import Title from "../components/Title";

const IncidenciesScreen = () => {
  return (
    <div className="incidence-screen mt-3">
      <Title>Check Incidences Reported!</Title>
      <div className="incidence-screen-wrapper">
        <div className="incidence-filters">
          <h6 className="h6">Filter Incidences Reported</h6>
          <div className="input">
            <input type="text" placeholder="search location..." />
            <button>Search</button>
          </div>
          <div className="time-sort">
            <label>Sort By Time</label>
            <select>
              <option>Latest Incidence</option>
              <option>Old Incidence</option>
            </select>
          </div>
        </div>
        <div className="incidence-list">
          <Incident />
        </div>
      </div>
    </div>
  );
};

export default IncidenciesScreen;
