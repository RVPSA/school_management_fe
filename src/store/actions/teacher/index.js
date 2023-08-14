import { ADD_TEACHER } from "./types";

export const addingTeacher = (data) => {
  return {
    type: ADD_TEACHER,
    data,
  };
};
