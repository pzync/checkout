import React from "react";
import "./savedOptionList.css";

const SavedOptionList = props => {
  return (
    <div className="saved-option-list">
      <img
        src={require("../images/phonepe-logo.svg")}
        alt=""
        className="list-logo"
      />
      <div className="saved-option-details">
        <p className="saved-option-title">PhonePe UPI</p>
        <div className="saved-option-numbers">sheetalkumar@ybl</div>
      </div>
      <img
        src={require("../images/chevron-right.svg")}
        alt=""
        className="chevron-icon"
      />
    </div>
  );
};

export default SavedOptionList;
