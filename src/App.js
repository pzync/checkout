import React, { Component } from "react";
import "./App.css";
import Appbar from "./components/appbar";
import CouponSec from "./components/couponSec";
import SavedOptionCard from "./components/savedOptionCard";
import AddMode from "./components/addMode";
import SavedOptionList from "./components/savedOptionList";
import OtherOptionList from "./components/otherOptionList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Appbar />
        <CouponSec />
        <div className="saved-section-container">
          <h3 className="section-title">WE SUGGEST</h3>
          <div className="saved-section">
            <SavedOptionCard />
            <AddMode />
          </div>
        </div>
        <div className="other-section-container">
          <h3 className="section-title">OTHER</h3>
          <div className="other-section">
            <SavedOptionList />
            <OtherOptionList />
            <OtherOptionList />
            <OtherOptionList />
            <OtherOptionList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
