import React from 'react';
import './css/WeatherHeader.css';

const WeatherHeader = ({ city, temperature, image }) => {
  return (
    <div className="WeatherHeader" >
        <h4 className="WeatherHeader__title">{ city }</h4>
        <div>
          <span className="WeatherHeader__temperature" >{ temperature }ºC</span>
          <img className="WeatherHeader__pic" alt="Weather" src={ image } />
        </div>
    </div>
  );
};

export default WeatherHeader;