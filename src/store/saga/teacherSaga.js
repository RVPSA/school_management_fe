import { call, put, take, takeLatest } from "redux-saga/effects";
import {
  ADD_TEACHER,
  ADD_TEACHER_FAIL,
  ADD_TEACHER_SUCCESS,
  GET_ALL_TEACHER,
  GET_ALL_TEACHER_FAIL,
  GET_ALL_TEACHER_SUCCESS,
} from "../actions";
import {
  addTeacherService,
  getAllTeacherService,
} from "../../services/teacherService";

export function* addTeacher({ data }) {
  try {
    console.log(data);
    const response = yield call(addTeacherService, data);
    yield put({ type: ADD_TEACHER_SUCCESS, response: response.data });
  } catch (error) {
    yield put({ type: ADD_TEACHER_FAIL, error: error.message });
  }
}

export function* watchAddTeacher() {
  yield takeLatest(ADD_TEACHER, addTeacher);
}

export function* getAllTeacher() {
  try {
    const response = yield call(getAllTeacherService);
    yield put({ type: GET_ALL_TEACHER_SUCCESS, response: response.data });
  } catch (error) {
    yield put({ type: GET_ALL_TEACHER_FAIL, error: error.message });
  }
}

export function* watchGetAllTeacher() {
  yield takeLatest(GET_ALL_TEACHER, getAllTeacher);
}
