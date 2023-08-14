import { combineReducers } from "redux";
import studentReducer from "./studentReducer";

const rootReducer = combineReducers({
  student: studentReducer,
});

const reducers = () => {
  return rootReducer;
};

export default reducers;
