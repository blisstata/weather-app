import React from 'react';

export const DayForecast = (props) => {
    const date = new Date(props.day[0].dt_txt);
    const timesList = props.day.map((item) => {
        const time = new Date(item.dt_txt).toLocaleTimeString();
        const iconUrl = 'http://openweathermap.org/img/w/' + item.weather[0].icon +'.png';
        const kelvinConversion = 273.15;
        const tempMax = Math.round((item.main.temp_max - kelvinConversion), 2);
        const tempMin = Math.round((item.main.temp_min - kelvinConversion), 2);
        return (  
            <tr>
                <td>
                    <div>
                        <span>{time}</span>
                        <span><img src={iconUrl} alt=""/></span>
                    </div>
                </td>
                <td>
                    <div className="weather-details__flex">
                        <div className="badge badge-secondary mr-3 mb-2">
                            {tempMax} °C
                        </div>
                        <div className="badge badge-secondary mr-3 mb-2">
                            {tempMin} °C
                        </div>
                        <div>{item.weather[0].description}</div>
                    </div>
                    <div className="weather-details__flex">
                        <div className="mr-3 mb-2">
                            {item.wind.speed} m/h
                        </div>
                        <div>{item.main.pressure} hpa</div>
                    </div>
                </td>
            </tr>  
        );
    });

    return (
        <div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th colSpan="2">{date.toDateString()}</th>
                    </tr>
                </thead>
                <tbody>
                    {timesList}
                </tbody>
            </table>
        </div>
    );
}
