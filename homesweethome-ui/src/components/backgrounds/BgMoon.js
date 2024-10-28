import React from "react";
import "./BgMoon.scss";

function BgMoon() {
  return (
    <div className="background-container">
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
        alt=""
      />
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
    </div>
  );
}

export default BgMoon;
