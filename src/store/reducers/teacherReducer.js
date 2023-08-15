import {
  ADD_TEACHER,
  ADD_TEACHER_FAIL,
  ADD_TEACHER_SUCCESS,
  GET_ALL_ALLOCATE_CLASS,
  GET_ALL_ALLOCATE_CLASS_FAIL,
  GET_ALL_ALLOCATE_CLASS_SUCCESS,
  GET_ALL_ALLOCATE_SUBJECT,
  GET_ALL_ALLOCATE_SUBJECT_FAIL,
  GET_ALL_ALLOCATE_SUBJECT_SUCCESS,
  GET_ALL_TEACHER,
  GET_ALL_TEACHER_FAIL,
  GET_ALL_TEACHER_SUCCESS,
} from "../actions";

export const initialState = {
  isAddingTeacher: false,
  isAddingTeacherFail: false,
  addTeacher: [],
  getAllTeacher: [],
  isGettingAllTeaher: false,
  isGettingAllTeaherFail: false,
  allAllocateClass: [],
  allAllocateSubject: [],
};

const teacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEACHER:
      return {
        ...state,
        isAddingTeacher: true,
      };
    case ADD_TEACHER_SUCCESS:
      const addTeacher = action.response;
      return {
        ...state,
        isAddingTeacher: false,
        addTeacher: addTeacher,
      };
    case ADD_TEACHER_FAIL:
      return {
        ...state,
        isAddingTeacher: false,
        isAddingTeacherFail: true,
      };
    case GET_ALL_TEACHER:
      return {
        ...state,
        isGettingAllTeaher: true,
      };
    case GET_ALL_TEACHER_SUCCESS:
      const getAllTeacher = action.response;
      return {
        ...state,
        isGettingAllTeaher: false,
        getAllTeacher: getAllTeacher,
      };
    case GET_ALL_TEACHER_FAIL:
      return {
        ...state,
        isGettingAllTeaher: false,
        isGettingAllTeaherFail: true,
      };
    case GET_ALL_ALLOCATE_CLASS:
      return { ...state };
    case GET_ALL_ALLOCATE_CLASS_SUCCESS:
      const allAllocateClass = action.response;
      return {
        ...state,
        allAllocateClass: allAllocateClass,
      };
    case GET_ALL_ALLOCATE_CLASS_FAIL:
      return { ...state };
    case GET_ALL_ALLOCATE_SUBJECT:
      return { ...state };
    case GET_ALL_ALLOCATE_SUBJECT_SUCCESS:
      const allAllocateSubject = action.response;
      return {
        ...state,
        allAllocateSubject: allAllocateSubject,
      };
    case GET_ALL_ALLOCATE_SUBJECT_FAIL:
      return { ...state };
    default:
      return state;
  }
};

export default teacherReducer;
