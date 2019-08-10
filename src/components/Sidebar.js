import React from 'react';
import './css/Sidebar.css';
import { ReactComponent as AddButtonSVG } from '../assets/ic_add_circle.svg';
import store from '../store';
import { setDisplayAddWeatherPopup, addWeather } from '../actions';
import AddCityPopup from '../containers/AddCityPopup';
import { openWeatherMapAPI } from '../constants/api-keys';

const Weather = ({ city, image }) => {
  return (
    <div className="Sidebar__weather">
      <img alt={ `${ city } weather` } className="Sidebar__weather__pic" src={ image } />
      <span className="Sidebar__weather__text">{ city }</span>
    </div>
  );
}

const Sidebar = () => {
  const { displaySidebar, displayAddCityPopup, weathers } = store.getState();
  const sidebarClasses = displaySidebar ? "Sidebar Sidebar--hide" : "Sidebar";

  return (
    <div className={sidebarClasses}>
      { displayAddCityPopup &&
          <AddCityPopup onCancel={ handleOnCancel } onAccept={ handleOnAccept } />
      }
      {
        Object.values(weathers).map((weather, index) => (
          <Weather key={ index } city={ `${ weather.name }, ${ weather.sys.country }` } image={ `http://openweathermap.org/img/wn/${ weather.weather[0].icon }@2x.png` } />
        ))
      }
      <AddButtonSVG onClick={ handleBtnClick } className="Sidebar__addButton"/>
    </div>
  );
};

function handleBtnClick() {
  store.dispatch(setDisplayAddWeatherPopup(true));
}

function handleOnAccept(value) {
  console.log(value);
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (this.status === 200) {
      const jsonData = JSON.parse(this.responseText);
      store.dispatch(addWeather(jsonData));
    }
    store.dispatch(setDisplayAddWeatherPopup(false));
  };
  xhr.onerror = function () {
    store.dispatch(setDisplayAddWeatherPopup(false));
  };
  // Get Open Weather data asynchronously.
  xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${ value }&appid=${ openWeatherMapAPI }`, true);
  xhr.send();

}

function handleOnCancel() {
  store.dispatch(setDisplayAddWeatherPopup(false));
}

export default Sidebar;