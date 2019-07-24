import React from 'react';
import { DayForecast } from './day-forecast';

export const WeatherForecast = (props) => {
    if(props.weather !== undefined) {
        let weatherList = [];

        for(let key in props.weather) {
            weatherList.push(<DayForecast day={props.weather[key]}/>)
        }

        return (
            <div className="weather__list">
                {weatherList}
            </div>    
        );
    }
    
    return null;
};
