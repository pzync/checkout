import React, { Component } from "react";
import "./App.css";
import Appbar from "./components/appbar";
import CouponSec from "./components/couponSec";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Appbar />
        <CouponSec />
      </div>
    );
  }
}

export default App;
