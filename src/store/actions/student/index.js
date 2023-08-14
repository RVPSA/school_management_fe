import { ADD_STUDENT } from "./types";

export const addingStudent = (data) => {
  console.log("ADD STUDENT ACTION", data);
  return {
    type: ADD_STUDENT,
    data,
  };
};
