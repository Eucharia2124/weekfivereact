import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city..." className="form-control" />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                </div>
            </form>
            <h1>Lisbon</h1>
            <ul>
                <li>Monday: Sunny, 25°C</li>
                <li>Tuesday: Cloudy, 22°C</li>
                <li>Wednesday: Rainy, 18°C</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny" />
                    25°C
                </div>
                <div className="col-6">
                    <ul>
                        <li> precipitation: 0%</li>
                        <li>Humidity: 48%</li>
                        <li>Wind: 23 km/h</li>
                        <li>UV-Index: 0</li>
                    </ul>
                   
                </div>

            </div>
        </div>
    );
}