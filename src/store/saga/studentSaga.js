import { call, put, take, takeLatest } from "redux-saga/effects";
import {
  ADD_STUDENT,
  ADD_STUDENT_FAIL,
  ADD_STUDENT_SUCCESS,
  DELETE_STUDENT,
  DELETE_STUDENT_FAIL,
  DELETE_STUDENT_SUCCESS,
  FIND_STUDENT,
  FIND_STUDENT_FAIL,
  FIND_STUDENT_SUCCESS,
  UPDATE_STUDENT,
  UPDATE_STUDENT_FAIL,
  UPDATE_STUDENT_SUCCESS,
} from "../actions";

export function* addStudent({ data }) {
  try {
    // const response = yield call()
    console.log(data);
    yield put({ type: ADD_STUDENT_SUCCESS, response: "Student Added" });
  } catch (error) {
    yield put({ type: ADD_STUDENT_FAIL, error: "FAIL" });
  }
}

export function* watchAddStudent() {
  yield takeLatest(ADD_STUDENT, addStudent);
}

export function* findStudent({ data }) {
  try {
    // const response = yield call()
    console.log(data);
    yield put({
      type: FIND_STUDENT_SUCCESS,
      response: " find Studetnt Success",
    });
  } catch (error) {
    yield put({
      type: FIND_STUDENT_FAIL,
      error: error.message,
    });
  }
}

export function* watchFindStudent() {
  yield takeLatest(FIND_STUDENT, findStudent);
}

export function* deleteStudent({ data }) {
  try {
    console.log(data);
    // const response = yield call()
    yield put({ type: DELETE_STUDENT_SUCCESS, response: "Student Delete" });
  } catch (error) {
    yield put({ type: DELETE_STUDENT_FAIL, error: error.message });
  }
}

export function* watchDeleteStudent() {
  yield takeLatest(DELETE_STUDENT, deleteStudent);
}

export function* updateStudent({ data }) {
  try {
    console.log(data);
    // const response = yield call()
    yield put({ type: UPDATE_STUDENT_SUCCESS, response: "Update succcess" });
  } catch (error) {
    yield put({ type: UPDATE_STUDENT_FAIL, error: error.message });
  }
}

export function* watchUpdateStudent() {
  yield takeLatest(UPDATE_STUDENT, updateStudent);
}
