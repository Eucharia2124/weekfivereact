import React, { useState } from "react";

import Weatherinfo from "./Weatherinfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            wind: response.data.wind.speed, 
            description: response.data.weather[0].description,
            iconUrl: `https://ssl.gstatic.com/onebox/weather/64/${response.data.weather[0].icon}.png`,
            city: response.data.name,
    });
}

function handleSubmit(event) {
    event.preventDefault();
    search();
    
}

function handleCityChange(event) {
    setCity(event.target.value);
}

function search() {
    const apiKey = "35f4a664892ct08f69ca41oe92eb5099";   
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

}


    if (weatherData.ready) {
        return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input 
                        type="search" 
                        placeholder="Enter a city..." 
                        className="form-control" 
                        autoFocus="on"
                        onChange={handleCityChange} />
                    </div>
                    <div className="col-3">
                        <input type="submit" 
                        value="Search" 
                        className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>
            <Weatherinfo data={weatherData} />
            </div>
           
    );
    } else {
        search();
        return "Loading...";
    }
}
    
    