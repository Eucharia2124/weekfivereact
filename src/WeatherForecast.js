import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  // if the coordinates change 
  // set loaded false
  useEffect(() => {
    setLoaded(false);
  }, [props.cooordinates]);

  function handleResponse(response) {
    console.log(response.data);

    setForecast(response.data.daily);
    setLoaded(true);
  }
  
  function load() {
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
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
              );
            } else {
              return null;
            }
          })}
          
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}