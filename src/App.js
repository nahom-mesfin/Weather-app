import axios from "axios";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState(false); // Track if location is not found

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=06aa447f4c130cdeaa572a966e9fd761`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      if (location === "") {
        setError(true); // Handle empty location input
        setData({});
      } else {
        axios
          .get(url)
          .then((response) => {
            setData(response.data);
            setError(false); // Reset error if the location is found
            console.log(response.data);
          })
          .catch((err) => {
            setError(true); // Set error to true if location not found
            setData({});
          });
      }
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

      {error ? (
        <p className="error-message">Location Not Found</p>
      ) : (
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>

            <div className="temp">
              <h1>
                {data.main && data.main.temp
                  ? `${data.main.temp.toFixed()} °C`
                  : null}
              </h1>
            </div>

            <div className="description">
              {data.weather && data.weather[0] ? (
                <p>{data.weather[0].main}</p>
              ) : null}
            </div>
          </div>

          <div className="bottom">
            <div className="feels">
              {data.main && data.main.feels_like ? (
                <p className="bold">{data.main.feels_like.toFixed()} °C</p>
              ) : null}
              <p>Feels like</p>
            </div>

            <div className="humidity">
              {data.main && data.main.humidity ? (
                <p className="bold">{data.main.humidity} %</p>
              ) : null}
              <p>Humidity</p>
            </div>

            <div className="wind">
              {data.wind && data.wind.speed ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Wind</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
