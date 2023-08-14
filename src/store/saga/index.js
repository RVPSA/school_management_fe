import { all } from "redux-saga/effects";
import {
  watchAddStudent,
  watchDeleteStudent,
  watchFindStudent,
  watchUpdateStudent,
} from "./studentSaga";
import { watchAddTeacher } from "./teacherSaga";
import { watchAddClassRoom } from "./classroomSaga";
import { watchAddSubject } from "./subjectSaga";

export default function* rootSaga() {
  yield all([
    //Student saga
    watchAddStudent(),
    watchFindStudent(),
    watchDeleteStudent(),
    watchUpdateStudent(),

    //Teacher saga
    watchAddTeacher(),

    //classRoom Saga
    watchAddClassRoom(),

    //subject saga
    watchAddSubject(),
  ]);
}
