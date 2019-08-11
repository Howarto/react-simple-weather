import React from 'react';
import './css/Information.css';
import WeatherHeader from '../components/WeatherHeader';
import store from '../store';
import WeatherData from '../components/WeatherData';

const Information = () => {

  const { weathers, currentWeatherId } = store.getState();
  const currentWeather = weathers[currentWeatherId];

  let weatherList = [];
  if (currentWeather) {
    const { list } = currentWeather;
    if (list) {
      weatherList = list.map((element, index) => {
        const { dt_txt, weather } = element;
        const hour = dt_txt.substring(11, 16);
        return {
          time: hour,
          icon: `http://openweathermap.org/img/wn/${ weather[0].icon }@2x.png`
        };
      });
    }
  }

  return (
    <div className="Information">
      {currentWeather && [
        <WeatherHeader
          key="1"
          city={currentWeather.name}
          temperature={currentWeather.main.temp.toFixed()}
          image={`http://openweathermap.org/img/wn/${
            currentWeather.weather[0].icon
          }@2x.png`}
        />,
        <WeatherData key="2" weatherList={ weatherList } />
      ]}
    </div>
  );
};

export default Information;