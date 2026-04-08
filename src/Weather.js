import React, { useState } from "react";

import Weatherinfo from "./Weatherinfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        const data = response.data;
        setWeatherData({
            ready: true,
            temperature: data.temperature.current,
            humidity: data.temperature.humidity,
            date: new Date(data.time * 1000),
            wind: data.wind.speed,
            description: data.condition.description,
            icon: data.condition.icon,
            city: data.city,
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
    let apiKey = "35f4a664892ct08f69ca41oe92eb5099";   
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
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