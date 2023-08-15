import { ADD_TEACHER, GET_ALL_TEACHER } from "./types";

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
