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
import {
  deleteStudentService,
  getStudentSevice,
  testService,
  updateStudentService,
} from "../../services/studentService";

export function* addStudent({ data }) {
  try {
    const response = yield call(testService, data);
    console.log("Add student response", response.data);
    yield put({ type: ADD_STUDENT_SUCCESS, response: response.data });
  } catch (error) {
    yield put({ type: ADD_STUDENT_FAIL, error: "FAIL" });
  }
}

export function* watchAddStudent() {
  yield takeLatest(ADD_STUDENT, addStudent);
}

export function* findStudent({ data }) {
  try {
    const response = yield call(getStudentSevice, data);
    console.log(data);
    yield put({
      type: FIND_STUDENT_SUCCESS,
      response: response.data,
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
    const response = yield call(deleteStudentService, data);
    yield put({ type: DELETE_STUDENT_SUCCESS, response: response.data });
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
    const response = yield call(updateStudentService, data);
    yield put({ type: UPDATE_STUDENT_SUCCESS, response: response.data });
  } catch (error) {
    yield put({ type: UPDATE_STUDENT_FAIL, error: error.message });
  }
}

export function* watchUpdateStudent() {
  yield takeLatest(UPDATE_STUDENT, updateStudent);
}
