import { combineReducers } from "redux";
import studentReducer from "./studentReducer";
import teacherReducer from "./teacherReducer";
import classroomReducer from "./classroomReducer";
import subjectReducer from "./subjectReducer";

const rootReducer = combineReducers({
  student: studentReducer,
  teacher: teacherReducer,
  classroom: classroomReducer,
  subject: subjectReducer,
});

const reducers = () => {
  return rootReducer;
};

export default reducers;
