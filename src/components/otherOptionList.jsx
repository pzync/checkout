import React from "react";
import "./otherOptionList.css";

const OtherOptionList = props => {
  return (
    <div className="other-option-list">
      <img
        src={require("../images/pay-later-icon.svg")}
        alt=""
        className="other-list-icon"
      />
      <p className="other-option-title">Pay Later</p>
      <p className="coupon-title">5% Cashback</p>
      <img
        src={require("../images/chevron-right.svg")}
        alt=""
        className="chevron-icon"
      />
    </div>
  );
};

export default OtherOptionList;
