import React from "react";
import Nav from "../componets/navbar/nav";
import Foot from "../componets/Footer/foot";
import "./model.css";
import axios from "axios";
import { useState } from "react";
const Model = () => {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"72f907a9a33b93c3b595fa3260960337"}`
      );
      setWeather(response);
    } catch (error) {
      alert("Error occur in fetching ", error);
    }
  };
  const getWeather = () => {
    fetchWeather(), [];
  };
  return (
    <>
      <Nav />
      <div className="box">
        <input
          type="text"
          placeholder="Enter the city "
          value={city}
          onChange={handleCityChange}
          required
        />
        <button onClick={getWeather}>Get Weather</button>
        {weather && (
          <>
            <div className="weather-info">
              <h3>{weather.data.name}</h3>
              <p>Temp is {weather.data.main.temp}</p>
              <p>Wind is {weather.data.wind.speed}</p>
              <p>{weather.data.weather[0].description}</p>
            </div>
          </>
        )}
      </div>
      <Foot />
    </>
  );
};

export default Model;
