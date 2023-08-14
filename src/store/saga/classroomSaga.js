import { call, put, take, takeLatest } from "redux-saga/effects";
import {
  ADD_CLASSROOM,
  ADD_CLASSROOM_FAIL,
  ADD_CLASSROOM_SUCCESS,
} from "../actions";

export function* addClassRoom({ data }) {
  try {
    console.log(data);
    // const response = yield call()
    yield put({
      type: ADD_CLASSROOM_SUCCESS,
      response: " add classroom Success",
    });
  } catch (error) {
    yield put({ type: ADD_CLASSROOM_FAIL, error: error.message });
  }
}

export function* watchAddClassRoom() {
  yield takeLatest(ADD_CLASSROOM, addClassRoom);
}
