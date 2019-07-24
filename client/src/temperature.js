import React from 'react';

export const Temperature = (props) => {
    const { temp, icon } = props;
    const kelvinConversion = 273.15;
    const roundtemp = Math.round((temp - kelvinConversion), 2);
    const iconUrl = 'http://openweathermap.org/img/w/' + icon +'.png';

    return (
        <div className="temp">
            <img className="img" src={iconUrl} alt=""></img>
            <span>{roundtemp}°C</span>
        </div>  
    )
    
}
