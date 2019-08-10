import { SET_DISPLAY_ADD_CITY_POPUP } from "../constants/actionTypes";

export default (state = false, action) => {
  if (action.type === SET_DISPLAY_ADD_CITY_POPUP) {
    return action.payload;
  }

  return state;
};