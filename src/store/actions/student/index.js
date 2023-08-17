import {
  ADD_STUDENT,
  DELETE_STUDENT,
  FIND_STUDENT,
  UPDATE_STUDENT,
} from "./types";

export const addingStudent = (data) => {
  console.log("ADD STUDENT ACTION", data);
  return {
    type: ADD_STUDENT,
    data,
  };
};

export const findingStudent = (data) => {
  return {
    type: FIND_STUDENT,
    data,
  };
};

export const deletingStudent = (data) => {
  return {
    type: DELETE_STUDENT,
    data,
  };
};

export const updatingStudent = (data) => {
  return {
    type: UPDATE_STUDENT,
    data,
  };
};
