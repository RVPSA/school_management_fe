import { ADD_SUBJECT } from "./types";

export const addingSubject = (data) => {
  return {
    type: ADD_SUBJECT,
    data,
  };
};
