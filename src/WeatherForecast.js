import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {

    function handleResponse(response) {
        console.log(response.data);
    }
    console.log(props.coordinates);

    const apiKey = "35f4a664892ct08f69ca41oe92eb5099"
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Thu</div>
                    <WeatherIcon code="scattered-clouds-day" size="36" />
                    <div className="WeatherForecast-temperature">
                        <span className="WeatherForecast-temperature-max">19°</span>
                        <span className="WeatherForecast-temperature-min">10°</span>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}