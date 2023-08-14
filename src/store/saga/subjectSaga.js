import { call, put, take, takeLatest } from "redux-saga/effects";
import {
  ADD_SUBJECT,
  ADD_SUBJECT_FAIL,
  ADD_SUBJECT_SUCCESS,
} from "../actions/subject/types";

export function* addSubject({ data }) {
  try {
    console.log(data);
    // const response = yield call()
    yield put({ type: ADD_SUBJECT_SUCCESS, response: "Add subject success" });
  } catch (error) {
    yield put({ type: ADD_SUBJECT_FAIL, error: error.message });
  }
}

export function* watchAddSubject() {
  yield takeLatest(ADD_SUBJECT, addSubject);
}
