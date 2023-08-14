import { call, put, takeLatest } from "redux-saga/effects";
import { ADD_STUDENT, ADD_STUDENT_FAIL, ADD_STUDENT_SUCCESS } from "../actions";

export function* addStudent(data) {
  try {
    // const response = yield call()
    yield put({ type: ADD_STUDENT_SUCCESS, response: "Student Added" });
  } catch (error) {
    yield put({ type: ADD_STUDENT_FAIL, error: "FAIL" });
  }
}

export function* watchAddStudent() {
  yield takeLatest(ADD_STUDENT, addStudent);
}
