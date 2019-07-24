const express = require('express');
const axios = require('axios');

const Router = express.Router();

const API_KEY = 'fb8f209aa9974e6866644693d475f0f0';

Router.get('/weather/:city/:country', (req, res) => {
    const city = req.params.city;
    const country = req.params.country;
    const currentWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`;
    const forecastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
    
    let currentWeather = axios.get(currentWeatherUrl);
    let weatherForecast = axios.get(forecastUrl);

    axios.all([currentWeather, weatherForecast])
    .then((response) => {
        currentWeatherResp = response[0].data;
        forecastResponse = response[1].data;
        let weatherForecast = {};

        for(let i=0;i<forecastResponse.list.length;i++) {
            let date = new Date(forecastResponse.list[i].dt_txt).getDate();

            if(weatherForecast[date] !== undefined) {
                weatherForecast[date].push(forecastResponse.list[i]);
            } else {
                weatherForecast[date] = [];
                weatherForecast[date].push(forecastResponse.list[i]);
            }
        }
        res.json({currentWeather: currentWeatherResp, weatherForecast: weatherForecast})
    })
    .catch((err) => {
        if(err.response.status === 404) {
            res.status(err.response.status).send({ error: 'No data found for the city' });
        } else if(err.response.status === 500) {
            res.status(err.response.status).send({ error: 'Internal Server Error' });
        }
    });
});

module.exports = Router;
