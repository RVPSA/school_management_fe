import { call, put, take, takeLatest } from "redux-saga/effects";
import {
  allocateClassService,
  allocateSubjectService,
  deallocateClassService,
  deallocateSubjectService,
} from "../../services/allocationService";
import {
  ALLOCATE_CLASSROOM,
  ALLOCATE_CLASSROOM_FAIL,
  ALLOCATE_CLASSROOM_SUCCESS,
  ALLOCATE_SUBJECT,
  ALLOCATE_SUBJECT_FAIL,
  ALLOCATE_SUBJECT_SUCCESS,
  DEALLOCATE_CLASSROOM,
  DEALLOCATE_CLASSROOM_FAIL,
  DEALLOCATE_CLASSROOM_SUCCESS,
  DEALLOCATE_SUBJECT,
  DEALLOCATE_SUBJECT_FAIL,
  DEALLOCATE_SUBJECT_SUCCESS,
} from "../actions/allocation/types";
export function* allocateClassroom({ data }) {
  try {
    const response = yield call(allocateClassService, data);
    yield put({ type: ALLOCATE_CLASSROOM_SUCCESS, response: response.data });
  } catch (error) {
    yield put({ type: ALLOCATE_CLASSROOM_FAIL, error: error.message });
  }
}

export function* watchAllocateClassroom() {
  yield takeLatest(ALLOCATE_CLASSROOM, allocateClassroom);
}

export function* deallocateClassroom({ data }) {
  try {
    const response = yield call(deallocateClassService, data);
    yield put({ type: DEALLOCATE_CLASSROOM_SUCCESS, response: response.data });
  } catch (error) {
    yield put({ type: DEALLOCATE_CLASSROOM_FAIL, error: error.message });
  }
}

export function* watchDeallocateClassroom() {
  yield takeLatest(DEALLOCATE_CLASSROOM, deallocateClassroom);
}

export function* allocateSubject({ data }) {
  try {
    const response = yield call(allocateSubjectService, data);
    yield put({ type: ALLOCATE_SUBJECT_SUCCESS, response: response.data });
  } catch (error) {
    yield put({ type: ALLOCATE_SUBJECT_FAIL, error: error.message });
  }
}

export function* watchAllocateSubject() {
  yield takeLatest(ALLOCATE_SUBJECT, allocateSubject);
}

export function* deallocateSubject({ data }) {
  try {
    const response = yield call(deallocateSubjectService, data);
    yield put({ type: DEALLOCATE_SUBJECT_SUCCESS, response: response.data });
  } catch (error) {
    yield put({ type: DEALLOCATE_SUBJECT_FAIL, error: error.message });
  }
}

export function* watchDeallocateSubject() {
  yield takeLatest(DEALLOCATE_SUBJECT, deallocateSubject);
}
