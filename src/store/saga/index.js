import { all } from "redux-saga/effects";
import {
  watchAddStudent,
  watchDeleteStudent,
  watchFindStudent,
  watchUpdateStudent,
} from "./studentSaga";
import {
  watchAddTeacher,
  watchGetAllAllocateClass,
  watchGetAllAllocateSubject,
  watchGetAllTeacher,
} from "./teacherSaga";
import { watchAddClassRoom, watchGetClassroom } from "./classroomSaga";
import { watchAddSubject, watchGetAllSubject } from "./subjectSaga";
import {
  watchAllocateClassroom,
  watchAllocateSubject,
  watchDeallocateClassroom,
  watchDeallocateSubject,
} from "./allocateSaga";

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
    watchGetAllAllocateClass(),
    watchGetAllAllocateSubject(),

    //classRoom Saga
    watchAddClassRoom(),
    watchGetClassroom(),

    //subject saga
    watchAddSubject(),
    watchGetAllSubject(),

    //Alloccation saga
    watchAllocateClassroom(),
    watchDeallocateClassroom(),
    watchAllocateSubject(),
    watchDeallocateSubject(),
  ]);
}
