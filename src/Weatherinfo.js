import React from "react";
import FormattedDate from "./FormattedDate";

export default function Weatherinfo(props) {
    const { data } = props;
    return (
        <div className="Weatherinfo">
            <h1>{weatherData.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={weatherData.date} />
                </li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left" />
                        <div className="float-left">
                            <span className="temperature">{Math.round(weatherData.temperature)}</span>
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
    
}