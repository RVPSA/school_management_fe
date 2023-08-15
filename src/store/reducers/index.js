import { combineReducers } from "redux";
import studentReducer from "./studentReducer";
import teacherReducer from "./teacherReducer";
import classroomReducer from "./classroomReducer";
import subjectReducer from "./subjectReducer";
import allocationReducer from "./allocationReducer";

const rootReducer = combineReducers({
  student: studentReducer,
  teacher: teacherReducer,
  classroom: classroomReducer,
  subject: subjectReducer,
  allocation: allocationReducer,
});

const reducers = () => {
  return rootReducer;
};

export default reducers;
