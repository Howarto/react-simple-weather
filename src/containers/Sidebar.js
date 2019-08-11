import React from 'react';
import './css/Sidebar.css';
import { ReactComponent as AddButtonSVG } from '../assets/ic_add_circle.svg';
import store from '../store';
import { setDisplayAddWeatherPopup, addWeather, setCurrentWeatherId } from '../actions';
import AddCityPopup from '../components/AddCityPopup';
import { openWeatherMapAPI } from '../constants/api-keys';

const Weather = ({ city, image, onClick, selected }) => {

  let selectedCSS = selected ? ' Sidebar__weather--selected' : '';

  return (
    <div onClick={ onClick } className={ `Sidebar__weather${ selectedCSS }` }>
      <img alt={ `${ city } weather` } className="Sidebar__weather__pic" src={ image } />
      <span className="Sidebar__weather__text">{ city }</span>
    </div>
  );
}

const Sidebar = () => {
  const { displaySidebar, displayAddCityPopup, weathers, currentWeatherId } = store.getState();
  const sidebarClasses = displaySidebar ? "Sidebar Sidebar--hide" : "Sidebar";

  return (
    <div className={sidebarClasses}>
      {displayAddCityPopup && (
        <AddCityPopup onCancel={handleOnCancel} onAccept={handleOnAccept} />
      )}
      {Object.values(weathers).map((weather, index) => (
        <Weather
          onClick={handleSelectWeather.bind(this, weather.id)}
          selected={currentWeatherId === weather.id}
          key={index}
          city={`${weather.name}, ${weather.sys.country}`}
          image={`http://openweathermap.org/img/wn/${
            weather.weather[0].icon
          }@2x.png`}
        />
      ))}
      <AddButtonSVG onClick={handleBtnClick} className="Sidebar__addButton" />
    </div>
  );
};

function handleSelectWeather(weatherId) {
  store.dispatch(setCurrentWeatherId(weatherId));
}

function handleBtnClick() {
  store.dispatch(setDisplayAddWeatherPopup(true));
}

function handleOnAccept(city) {
  const apiKey = openWeatherMapAPI;
  xhrPromise(`https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ apiKey }&units=metric`, 'GET')
  .then((currentTime) => {

    xhrPromise(`https://api.openweathermap.org/data/2.5/forecast?q=${ city }&appid=${ apiKey }&units=metric`, 'GET')
    .then((futureTime) => {
      store.dispatch(addWeather({
        ...currentTime,
        'list': futureTime.list
      }));
      store.dispatch(setDisplayAddWeatherPopup(false));
    })
    .catch(() => {
      store.dispatch(setDisplayAddWeatherPopup(false));
    });

  })
  .catch(() => {
    store.dispatch(setDisplayAddWeatherPopup(false));
  });
}

function handleOnCancel() {
  store.dispatch(setDisplayAddWeatherPopup(false));
}

function xhrPromise(url, method, data) {
  return new Promise(function(resolve, reject) {
    const request = new XMLHttpRequest();
    request.responseType = 'json';
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.status));
        }
      }
    };
    request.onerror = function() {
      reject(Error("Network Error"));
    };
    request.open(method, url, true);
    request.send(data);
  });
}

export default Sidebar;