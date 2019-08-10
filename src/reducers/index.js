import { combineReducers } from 'redux';
import displaySidebar from './displaySidebar';
import weathers from './weathers';
import displayAddCityPopup from './displayAddCityPopup';
import currentWeatherId from './currentWeatherId';

export default combineReducers({
  displaySidebar,
  weathers,
  displayAddCityPopup,
  currentWeatherId
});