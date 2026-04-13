import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = React.useState(false);
  const [forecast, setForecast] = React.useState(null);

  function handleResponse(response) {
    console.log(response.data);

    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <WeatherIcon code="scattered-clouds-day" size="36" />
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">{forecast[0].temperature.max}°</span>
              <span className="WeatherForecast-temperature-min">{forecast[0].temperature.min}°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "35f4a664892ct08f69ca41oe92eb5099";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
    return null;
  }
}