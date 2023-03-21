import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="dataset">
            <h1>{props.data.city}</h1>
            <ul>
              <li><FormattedDate date={props.data.time} /></li>
              <li className="text-capitalize">{props.data.description}</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <div  className="float-left">
                <WeatherIcon code={props.data.icon} alt={props.data.description}/>
                </div>
                <div className="float-left">
                    <WeatherTemperature celsius={props.data.temperature} />
                 
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul className="extra-data">
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind} km/h</li>
              </ul>
            </div>
            </div>
            </div>
    );
}