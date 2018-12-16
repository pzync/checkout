import React from "react";
import "./couponSec.css";

const CouponSec = props => {
  return (
    <div className="coupon-section">
      <img
        className="coupon-icon"
        src={require("../images/coupon-icon.png")}
        alt=""
      />
      <div className="coupon-details">
        <p className="coupon-desc">
          Get 10% discount on orders above Rs. 99. No need for coupon code.
        </p>
        <div className="coupon-cta">More Offers</div>
      </div>
    </div>
  );
};

export default CouponSec;
