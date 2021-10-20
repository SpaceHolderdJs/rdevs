import { combineReducers } from "redux";

import tabReducer from "./tabReducer";
import popupReducer from "./popupReducer";

const allReducers = combineReducers({
  tab: tabReducer,
  popup: popupReducer,
});

export default allReducers;
