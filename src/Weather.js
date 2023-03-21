import React, { useState } from "react";
import "./Weather.css";
import axios from "axios"
import FormattedDate from "./FormattedDate";

export default function Weather() {
    
    const [weatherData, setWeatherData] = useState({ready: false});
   function handleResponse(response){
   
    setWeatherData({
        ready: true,
        city: response.data.city,
        temperature: response.data.temperature.current,
        wind: Math.round(response.data.wind.speed),
        humidity: Math.round(response.data.temperature.humidity),
        description: response.data.condition.description,
        imgUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
        time: new Date(response.data.time * 1000)
    })
    
}

 


  if (weatherData.ready) {
    return (
        <div className="Weather">
          <form className="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter city..."
                  className="form-control"
                  autoComplete="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-dark w-100"
                />
              </div>
            </div>
          </form>
          <div className="dataset">
            <h1>{weatherData.city}</h1>
            <ul>
              <li><FormattedDate date={weatherData.time} /></li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="float-left"
                />
                <div className="float-left">
                  <strong>{Math.round(weatherData.temperature)}</strong>
                  <span className="units">
                    <a href="/">°C</a> | <a href="/">°F</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul className="extra-data">
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      );
  } else {
    const apiKey = "6734baf8b2off87a45fcbec75c30t717";
    let units = "imperial";
    let city = "Los Angeles"
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."
 
  }
  
}
