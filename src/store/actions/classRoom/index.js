import { ADD_CLASSROOM, GET_CLASSROOM } from "./types";

export const addingClassRoom = (data) => {
  return {
    type: ADD_CLASSROOM,
    data,
  };
};

export const gettingClassroom = () => {
  return {
    type: GET_CLASSROOM,
  };
};
