import {
  ADD_SUBJECT,
  ADD_SUBJECT_FAIL,
  ADD_SUBJECT_SUCCESS,
} from "../actions/subject/types";

export const initialState = {
  isAddingSubject: false,
  isAddingSubjectFail: false,
  addSubject: [],
};

const subjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUBJECT:
      return {
        ...state,
        isAddingSubject: true,
      };
    case ADD_SUBJECT_SUCCESS:
      const addSubject = action.response;
      return {
        ...state,
        isAddingSubject: false,
        addSubject: addSubject,
      };
    case ADD_SUBJECT_FAIL:
      return {
        ...state,
        isAddingSubject: false,
        isAddingSubjectFail: true,
      };
    default:
      return state;
  }
};

export default subjectReducer;
