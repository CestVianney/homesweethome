import React from "react";
import "./BgMoon.scss";

function BgMoon() {
  return (
    <div class="background-container">
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
        alt=""
      />
      <div class="stars"></div>
      <div class="twinkling"></div>
      <div class="clouds"></div>
    </div>
  );
}

export default BgMoon;
