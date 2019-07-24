import React from 'react';
import { WeatherDesc } from './weather-desc';
import { Temperature } from './temperature';
import { WeatherTable } from './weather-table';

export const CurrentWeather = (props) => {
    const { currentWeather } = props;
    const weatherDetails = {
        windSpeed: 0,
        cloudiness: undefined,
        sunrise: undefined,
        sunset: undefined,
        pressure: undefined,
        humidity: undefined,
        lat: undefined,
        lon: undefined
    };

    for(var key in currentWeather) {
        if(key === 'wind') {
            weatherDetails.windSpeed = currentWeather[key].speed;
        } else if(key === 'clouds') {
            weatherDetails.cloudiness = currentWeather[key].all;
        } else if(key === 'sys') {
            weatherDetails.sunrise = currentWeather[key].sunrise;
            weatherDetails.sunset = currentWeather[key].sunset;
        } else if(key === 'main') {
            weatherDetails.pressure = currentWeather[key].pressure;
            weatherDetails.humidity = currentWeather[key].humidity;
        } else if(key === 'coord') {
            weatherDetails.lat = currentWeather[key].lat;
            weatherDetails.lon = currentWeather[key].lon;
        }
    }
    if(currentWeather !== undefined) {
        return (
            <>
                <div className="weather__details">
                    <WeatherDesc
                        city={currentWeather.name}
                        country={currentWeather.sys.country}
                    />
                    <Temperature
                        temp={currentWeather.main.temp}
                        icon={currentWeather.weather[0].icon}
                    />
                    <div>
                        {currentWeather.weather[0].description}
                    </div>
                    <WeatherTable
                        {...weatherDetails}
                    />
                </div>
            </>
        );
    }

    return null;
    
}
