import React from 'react';

export const WeatherDesc = (props) => {
    return (
        <div className="font-weight-bold">
            <span>Weather in </span>
            <span>{props.city}</span>
            <span>, </span>
            <span>{props.country}</span>
        </div>
    );
}
