import React from 'react';

export const WeatherTable = (props) => {
    const { 
        windSpeed,
        cloudiness,
        sunrise,
        sunset,
        pressure,
        humidity,
        lat,
        lon
    } = props;
    
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime =new Date(sunset * 1000).toLocaleTimeString();

    return ( 
        <div className="size">
            <table className="table table-striped table-bordered">
                <tbody>
                    <tr>
                        <td>Wind </td>
                        <td>{windSpeed} m/s</td>
                    </tr>
                    <tr>
                        <td>Cloudiness </td>
                        <td>{cloudiness} %</td>
                    </tr>
                    <tr>
                        <td>Pressure</td>
                        <td>{pressure} hpa</td>
                    </tr>
                    <tr>
                        <td>Humidity</td>
                        <td>{humidity} %</td>
                    </tr>
                    <tr>
                        <td>Sunrise</td>
                        <td>{sunriseTime}</td>
                    </tr>
                    <tr>
                        <td>Sunset</td>
                        <td>{sunsetTime}</td>
                    </tr>
                    <tr>
                    <td>Geo coords</td>
                    <td>[{lat} ,{lon}]</td>
                </tr>
                </tbody>
            </table>
           
        </div>   
    );
}
