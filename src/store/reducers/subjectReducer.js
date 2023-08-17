import {
  ADD_SUBJECT,
  ADD_SUBJECT_FAIL,
  ADD_SUBJECT_SUCCESS,
  GET_ALL_SUBJECT,
  GET_ALL_SUBJECT_FAIL,
  GET_ALL_SUBJECT_SUCCESS,
} from "../actions/subject/types";

export const initialState = {
  isAddingSubject: false,
  isAddingSubjectFail: false,
  addSubject: [],
  getAllSubject: [],
  isGettingAllSubject: false,
  isGettingAllSubjectFail: false,
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
    case GET_ALL_SUBJECT:
      return {
        ...state,
        isGettingAllSubject: true,
      };
    case GET_ALL_SUBJECT_SUCCESS:
      const getAllSubject = action.response;
      return {
        ...state,
        isGettingAllSubject: false,
        getAllSubject: getAllSubject,
      };
    case GET_ALL_SUBJECT_FAIL:
      return {
        ...state,
        isGettingAllSubject: false,
        isGettingAllSubjectFail: true,
      };
    default:
      return state;
  }
};

export default subjectReducer;
