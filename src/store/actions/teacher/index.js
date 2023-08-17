import {
  ADD_TEACHER,
  GET_ALL_ALLOCATE_CLASS,
  GET_ALL_ALLOCATE_SUBJECT,
  GET_ALL_TEACHER,
} from "./types";

export const addingTeacher = (data) => {
  return {
    type: ADD_TEACHER,
    data,
  };
};

export const gettingAllTeacher = () => {
  return {
    type: GET_ALL_TEACHER,
  };
};

export const gettingAllAllocateSubject = (data) => {
  return {
    type: GET_ALL_ALLOCATE_SUBJECT,
    data,
  };
};

export const gettingAllAllocateClass = (data) => {
  return {
    type: GET_ALL_ALLOCATE_CLASS,
    data,
  };
};
