import {
  ALLOCATE_CLASSROOM,
  ALLOCATE_SUBJECT,
  DEALLOCATE_CLASSROOM,
  DEALLOCATE_SUBJECT,
} from "./types";

export const allocatingClassroom = (data) => {
  return {
    type: ALLOCATE_CLASSROOM,
    data,
  };
};

export const deallocatingClassroom = (data) => {
  return {
    type: DEALLOCATE_CLASSROOM,
    data,
  };
};

export const allocatingSubject = (data) => {
  return {
    type: ALLOCATE_SUBJECT,
    data,
  };
};

export const deallocatingSubject = (data) => {
  return {
    type: DEALLOCATE_SUBJECT,
    data,
  };
};
