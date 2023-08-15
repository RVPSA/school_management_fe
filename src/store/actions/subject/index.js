import { ADD_SUBJECT, GET_ALL_SUBJECT } from "./types";

export const addingSubject = (data) => {
  return {
    type: ADD_SUBJECT,
    data,
  };
};

export const gettingAllSubject = () => {
  return {
    type: GET_ALL_SUBJECT,
  };
};
