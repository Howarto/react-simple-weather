import { SET_DISPLAY_SIDEBAR } from "../constants/actionTypes";

export default (state = false, action) => {
  if (action.type === SET_DISPLAY_SIDEBAR) {
    return action.payload;
  }

  return state;
};