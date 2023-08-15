import { call, put, take, takeLatest } from "redux-saga/effects";
import {
  ADD_SUBJECT,
  ADD_SUBJECT_FAIL,
  ADD_SUBJECT_SUCCESS,
  GET_ALL_SUBJECT,
  GET_ALL_SUBJECT_FAIL,
  GET_ALL_SUBJECT_SUCCESS,
} from "../actions/subject/types";
import {
  addSubjectService,
  getAllSubjectService,
} from "../../services/subjectService";

export function* addSubject({ data }) {
  try {
    console.log(data);
    const response = yield call(addSubjectService, data);
    yield put({ type: ADD_SUBJECT_SUCCESS, response: response.data });
  } catch (error) {
    yield put({ type: ADD_SUBJECT_FAIL, error: error.message });
  }
}

export function* watchAddSubject() {
  yield takeLatest(ADD_SUBJECT, addSubject);
}

export function* getAllSubject() {
  try {
    const response = yield call(getAllSubjectService);
    yield put({ type: GET_ALL_SUBJECT_SUCCESS, response: response.data });
  } catch (error) {
    yield put({ type: GET_ALL_SUBJECT_FAIL, error: error.message });
  }
}

export function* watchGetAllSubject() {
  yield takeLatest(GET_ALL_SUBJECT, getAllSubject);
}
