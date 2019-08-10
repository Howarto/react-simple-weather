import { SET_CURRENT_WEATHER_ID } from "../constants/actionTypes";

export default (state = null, action) => {
  if (action.type === SET_CURRENT_WEATHER_ID) {
    return action.payload
  }

  return state;
};