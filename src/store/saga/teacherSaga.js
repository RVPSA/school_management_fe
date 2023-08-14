import { call, put, take, takeLatest } from "redux-saga/effects";
import { ADD_TEACHER, ADD_TEACHER_FAIL, ADD_TEACHER_SUCCESS } from "../actions";

export function* addTeacher({ data }) {
  try {
    console.log(data);
    // const response = yield call()
    yield put({ type: ADD_TEACHER_SUCCESS, response: "Add teacher success" });
  } catch (error) {
    yield put({ type: ADD_TEACHER_FAIL, error: error.message });
  }
}

export function* watchAddTeacher() {
  yield takeLatest(ADD_TEACHER, addTeacher);
}
