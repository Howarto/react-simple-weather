import { SET_DISPLAY_SIDEBAR, ADD_WEATHER, SET_DISPLAY_ADD_CITY_POPUP, SET_CURRENT_WEATHER_ID } from "../constants/actionTypes";

export const setDisplaySidebar = value => ({
  type: SET_DISPLAY_SIDEBAR,
  payload: value
});

export const addWeather = value => ({
  type: ADD_WEATHER,
  payload: {
    [value.id]: value
  }
});

export const setDisplayAddWeatherPopup = value => ({
  type: SET_DISPLAY_ADD_CITY_POPUP,
  payload: value
});

export const setCurrentWeatherId = value => ({
  type: SET_CURRENT_WEATHER_ID,
  payload: value
});