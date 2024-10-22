import axios from "axios";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=06aa447f4c130cdeaa572a966e9fd761`;
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            <div className="temp">
              <h1>
                {data.main && data.main.temp ? `${data.main.temp} °K` : null}
              </h1>
            </div>
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
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
