import React from "react";
import "./addMode.css";

const AddMode = props => {
  return (
    <div className="add-mode">
      <div className="content-container">
        <img
          className="add-icon"
          src={require("../images/add-icon.svg")}
          alt=""
        />
        <div className="add-cta-text">Add New</div>
      </div>
    </div>
  );
};

export default AddMode;
