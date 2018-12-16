import React from "react";
import "./savedOptionCard.css";

const SavedOptionCard = props => {
  return (
    <div className="saved-option-card">
      <div className="saved-option-tophalf">
        <img
          className="saved-option-icon"
          alt=""
          src={require("../images/icici-logo.svg")}
        />
        <div className="saved-option-details">
          <p className="saved-option-title">ICICI Credit Card</p>
          <img
            className="saved-option-network-icon"
            alt=""
            src={require("../images/mastercard-logo.svg")}
          />
          <div className="saved-option-numbers">5001 **** **** 1234</div>
        </div>
      </div>
      <div className="saved-option-cta">Pay Now</div>
    </div>
  );
};

export default SavedOptionCard;
