import { all } from "redux-saga/effects";
import {
  watchAddStudent,
  watchDeleteStudent,
  watchFindStudent,
  watchUpdateStudent,
} from "./studentSaga";
import { watchAddTeacher, watchGetAllTeacher } from "./teacherSaga";
import { watchAddClassRoom, watchGetClassroom } from "./classroomSaga";
import { watchAddSubject, watchGetAllSubject } from "./subjectSaga";

export default function* rootSaga() {
  yield all([
    //Student saga
    watchAddStudent(),
    watchFindStudent(),
    watchDeleteStudent(),
    watchUpdateStudent(),

    //Teacher saga
    watchAddTeacher(),
    watchGetAllTeacher(),

    //classRoom Saga
    watchAddClassRoom(),
    watchGetClassroom(),

    //subject saga
    watchAddSubject(),
    watchGetAllSubject(),
  ]);
}
