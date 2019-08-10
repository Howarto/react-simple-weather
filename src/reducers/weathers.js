import { ADD_WEATHER } from "../constants/actionTypes";

export default (state = {}, action) => {
  if (action.type === ADD_WEATHER) {
    const newState = { ...state };
    Object.assign(newState, action.payload);
    return newState;
  }

  return state;
};