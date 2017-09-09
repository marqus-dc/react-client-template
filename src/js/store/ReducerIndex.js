import {combineReducers} from "redux";
import globalReducer from "./GlobalReducer";
import studentReducer from "./StudentReducer";

export default combineReducers({
  globalReducer,
  studentReducer,
})
