import { combineReducers } from 'redux';
import displaySidebar from './displaySidebar';
import weathers from './weathers';
import displayAddCityPopup from './displayAddCityPopup';

export default combineReducers({
  displaySidebar,
  weathers,
  displayAddCityPopup
});