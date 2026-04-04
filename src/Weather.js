import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({});
    const [ready, setReady] = useState(false);
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            temperature: response.data.main.temp,
            wind: response.data.main.wind.speed,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
            city: response.data.name,
            });

        setReady(true);
    }

    if (ready) {
        return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>Wednesday 07:00</li>
                <li>{weatherData.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left" />
                        <div className="float-left">
                            <span className="temperature">{weatherData.temperature}</span>
                            <span className="unit">°C</span>
                        </div>
                    </div>
                </div>
    
                <div className="col-6">
                    <ul>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {weatherData.wind} km/h</li>
                    </ul>
                   
                </div>

            </div>
        </div>
    );
    } else {
        const apiKey = "35f4a664892ct08f69ca41oe92eb5099";
        
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}
    
    