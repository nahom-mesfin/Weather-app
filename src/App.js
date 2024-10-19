import axios from "axios";
import React, { useState } from "react";

function App() {
  //const url = "https://api.openweathermap.org/data/2.5/weather?lat=9.0192&lon=38.7525&appid=06aa447f4c130cdeaa572a966e9fd761";

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>
              <h1>Dallas</h1>
            </p>
          </div>
          <div className="temp">
            <h1> 65° F</h1>
          </div>
          <div className="description">Clouds</div>
          <div className="bottom">
            <div className="feels">
              <p>65° F</p>
            </div>
            <div className="himuduty">
              <p>20%</p>
            </div>
            <div className="wind">12 MPH</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
