import React, { Component } from "react";
import "./App.css";
import Appbar from "./components/appbar";
import CouponSec from "./components/couponSec";
import SavedOptionCard from "./components/savedOptionCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Appbar />
        <CouponSec />
        <div className="saved-section">
          <h3 className="section-title">SAVED</h3>
          <SavedOptionCard />
        </div>
      </div>
    );
  }
}

export default App;
