import { all } from "redux-saga/effects";
import { watchAddStudent } from "./studentSaga";

export default function* rootSaga() {
  yield all([watchAddStudent()]);
}
