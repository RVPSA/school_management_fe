import { ADD_CLASSROOM } from "./types";

export const addingClassRoom = (data) => {
  return {
    type: ADD_CLASSROOM,
    data,
  };
};
