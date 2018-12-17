import React from "react";
import "./otherOptionList.css";

const OtherOptionList = ({ icon, title, coupon }) => {
  return (
    <div className="other-option-list">
      <img src={icon} alt="" className="other-list-icon" />
      <p className="other-option-title">{title}</p>
      <p className="coupon-title">{coupon}</p>
      <img
        src={require("../images/chevron-right.svg")}
        alt=""
        className="chevron-icon"
      />
    </div>
  );
};

export default OtherOptionList;
