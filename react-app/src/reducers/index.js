import { combineReducers } from "redux";
import favouritesReducers from "./favouritesReducers";
import fetchDataReducers from "./fetchDataReducers";

const rootReducer = combineReducers({
  favourites: favouritesReducers,
  fetchData: fetchDataReducers,
});

export default rootReducer;
