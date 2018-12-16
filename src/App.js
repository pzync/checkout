import React, { Component } from "react";
import "./App.css";
import Appbar from "./components/appbar";
import CouponSec from "./components/couponSec";
import SavedOptionCard from "./components/savedOptionCard";
import AddMode from "./components/addMode";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Appbar />
        <CouponSec />
        <div className="saved-section-container">
          <h3 className="section-title">SAVED</h3>
          <div className="saved-section">
            <SavedOptionCard />
            <AddMode />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
