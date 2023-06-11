import { combineReducers } from "redux";
import directionReducer from "./directionReducer";

export default combineReducers({
  direction: directionReducer,
});
