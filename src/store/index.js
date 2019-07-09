import { combineReducers } from "redux";
import { ratesReducer, UiReducer } from "#store/reducers";

export default combineReducers({
  ratesReducer,
  UiReducer
});
