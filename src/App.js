import axios from "axios";
import React, { useState } from "react";

function App() {
  //const url = "https://api.openweathermap.org/data/2.5/weather?lat=9.0192&lon=38.7525&appid=06aa447f4c130cdeaa572a966e9fd761";

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">Dallas</div>
          <div className="temp">
            <h1> 60° F </h1>
          </div>
          <div className="description">Clouds</div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">65° F </p>
            <p>feels like</p>
          </div>
          <div className="humiduty">
            <p className="bold">20%</p>
            <p>himudity</p>
          </div>
          <div className="wind">
            <p className="bold">12 MPH</p>
            <p>himudity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
