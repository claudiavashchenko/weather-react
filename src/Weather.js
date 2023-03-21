import React, { useState } from "react";
import "./Weather.css";
import axios from "axios"


import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
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

  function search() {
    const apiKey = "6734baf8b2off87a45fcbec75c30t717";
    let units = "imperial";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
 
  function handleCityChange(event) {
    setCity(event.target.value);

  }


  if (weatherData.ready) {
    return (
        <div className="Weather">
          <form onSubmit={handleSubmit} className="mb-3">
           
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter city..."
                  className="form-control"
                  autoComplete="off"
                  onChange={handleCityChange}
                
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-dark w-100"
                  autoFocus="on"
                  
                />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          </div>
      );
  } else {
    search();
    return "Loading..."
 
  }
  
}
