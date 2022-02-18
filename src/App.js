import React, { useState } from "react";
import "./App.css";

function App() {
  const api_key = "02cd73cf8b9f1986e7b76ac273869958";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key == "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setCity("");
        });
    }
  };

  return (
    <div className="container">
      <input
        className="input"
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
        placeholder="Enter City"
      />

      {typeof weatherData.main === "undefined" ? (
        <div>
          <p>Welcome to weather App ! Enter a city to get the weather of.</p>
        </div>
      ) : (
        <div>
          <p>{weatherData.name}</p>
          <p>{Math.round(weatherData.main.temp)} F</p>
        </div>
      )}
    </div>
  );
}

export default App;
