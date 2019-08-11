import React from 'react';
import './css/WeatherData.css';

const Data = ({ weatherList }) => {
  const reducedWeatherList = weatherList.splice(0, 5);
  return (
    <div className="WeatherData__data">
      {reducedWeatherList.map((element, index) => (
        <div key={index} className="WeatherData__data__block">
          <div className="WeatherData__data__block__time">{element.time}</div>
          <div className="WeatherData__data__block__pic">
            <img
              className="WeatherData__data__block__pic__element"
              alt="Weather"
              src={ element.icon }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const WeatherData = ({ weatherList }) => {
  return (
    <div className="WeatherData" >
      <div className="WeatherData__header">
        Timeline
      </div>
      <Data weatherList={ weatherList } />
    </div>
  );
};

export default WeatherData;