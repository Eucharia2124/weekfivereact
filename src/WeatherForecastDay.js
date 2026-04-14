import React from 'react';
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemperture() {
        let temperature = Math.round(props.data.temperature.max);
        return `${temperature}°`;
    }

    function minTemperture() {
        let temperature = Math.round(props.data.temperature.min);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }
    
    return (
        <div className="WeatherForecast-day">
            {day()}
            <WeatherIcon code={props.data.condition.icon} size={36} />
            <div className="WeatherForecast-temperature">
                <span className="WeatherForecast-temperature-max">{maxTemperture()}</span>
                <span className="WeatherForecast-temperature-min">{minTemperture()}</span>
            </div>
        </div>
    );
}
            