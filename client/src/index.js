import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { CurrentWeather } from './current-weather';
import { WeatherForecast } from './weather-forecast';

import './app.css';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            city: '',
            country: undefined,
            currentWeather: undefined,
            weatherForecast: undefined,
            error: ''
        }
    }

    handleCity(e) {
        this.setState({city: e.target.value})
    }

    handleCountry(e) {
        this.setState({country: e.target.value})
    }

    handleClick() {
        if(this.state.city !== '') {
            const country = this.state.country || 'US';
            const url = `/weather/${this.state.city}/${country}`;

            axios.get(url)
            .then((resp) => {
                this.setState({
                    currentWeather: resp.data.currentWeather,
                    weatherForecast: resp.data.weatherForecast,
                    error: ''
                })
            })
            .catch((err) => {
                this.setState({error: err.response.data.error});
            });
        } else {
            this.setState({error: 'Please enter a city'});
        }
    }

    render() {
        return (
            <>
                <div className="main">
                    <form>
                        <div className="form-group">
                            <label for="city">City Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="city" 
                                placeholder="e.g. Berlin"
                                value={this.state.city}
                                onChange={(e) => this.handleCity(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label for="country">Country</label>
                            <input 
                                type="text"
                                className="form-control"
                                id="country"
                                placeholder="e.g. DE, Default is US"
                                value={this.state.country}
                                onChange={(e) => this.handleCountry(e)}
                            />
                        </div>
                    </form>
                    <button type="submit" className="btn btn-primary" onClick={() => {this.handleClick()}}>Search</button>
                </div>
                <div className="weather__heading">
                    Current weather and forecasts in your city
                </div>
                {
                    this.state.error !== '' && 
                    <div className="weather__error">
                        {this.state.error}
                    </div>
                }
                <div className="weather__main">
                    <CurrentWeather
                        currentWeather={this.state.currentWeather}
                    />
                    <WeatherForecast
                        weather={this.state.weatherForecast}
                    />
                </div>
            </>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
