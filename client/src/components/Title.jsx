import React from "react";

const Title = ({ children }) => {
  return (
    <div className="cont">
      <div className="sub-title">
        <h4 className="h4 text-center">{children}</h4>
        <div className="hr"></div>
      </div>
    </div>
  );
};

export default Title;
