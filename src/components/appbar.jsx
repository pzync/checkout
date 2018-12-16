import React from "react";
import "./appbar.css";

const Appbar = props => {
  return (
    <div className="appbar">
      <img
        src={require("../images/arrow-back.svg")}
        alt=""
        className="back-icon"
      />
      <h2>Payment</h2>
      <p>$1,800</p>
    </div>
  );
};

export default Appbar;
