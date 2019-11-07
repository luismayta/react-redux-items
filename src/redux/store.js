import {combineReducers, createStore} from "redux";
import results from "./reducers/results";
import suggestions from "./reducers/suggestions";
import currentItem from "./reducers/currentItem";

const reducer = combineReducers({
    results,
    suggestions,
    currentItem,
  }),
  store = createStore(reducer);

export default store;
