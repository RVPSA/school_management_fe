import {
  ADD_STUDENT,
  ADD_STUDENT_FAIL,
  ADD_STUDENT_SUCCESS,
  DELETE_STUDENT,
  DELETE_STUDENT_FAIL,
  DELETE_STUDENT_SUCCESS,
  FIND_STUDENT,
  FIND_STUDENT_FAIL,
  FIND_STUDENT_SUCCESS,
  UPDATE_STUDENT,
  UPDATE_STUDENT_FAIL,
  UPDATE_STUDENT_SUCCESS,
} from "../actions";

export const initialState = {
  isAddingStudent: false,
  isAddingStudentFail: false,
  student: [],
  isFindingStudent: false,
  isFindingStudentFail: false,
  studentDetails: {},
  isDeletingStudent: false,
  isDeletingStudentFail: false,
  deleteStudent: [],
  isUpdatingStudent: false,
  isUpdatingStudentFail: false,
  updateStudent: [],
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      console.log("CALL ADD STUDENT REUCER", action.data);
      return {
        ...state,
        isAddingStudent: true,
      };
    case ADD_STUDENT_SUCCESS:
      const { response } = action;
      return {
        ...state,
        isAddingStudent: false,
        student: response,
      };
    case ADD_STUDENT_FAIL:
      const { error } = action;
      return {
        ...state,
        isAddingStudent: false,
        isAddingStudentFail: true,
      };
    case FIND_STUDENT:
      return {
        ...state,
        isFindingStudent: true,
      };
    case FIND_STUDENT_SUCCESS:
      const studentDetails = action.response;
      return {
        ...state,
        isFindingStudent: false,
        studentDetails: studentDetails,
      };
    case FIND_STUDENT_FAIL:
      return {
        ...state,
        isFindingStudent: false,
        isFindingStudentFail: true,
      };
    case DELETE_STUDENT:
      return {
        ...state,
        isDeletingStudent: true,
      };
    case DELETE_STUDENT_SUCCESS:
      const deleteStudent = action.response;
      return {
        ...state,
        isDeletingStudent: false,
        deleteStudent: deleteStudent,
      };
    case DELETE_STUDENT_FAIL:
      return {
        ...state,
        isDeletingStudent: false,
        isDeletingStudentFail: true,
      };
    case UPDATE_STUDENT:
      return {
        ...state,
        isUpdatingStudent: true,
      };
    case UPDATE_STUDENT_SUCCESS:
      const updateStudent = action.response;
      return {
        ...state,
        isUpdatingStudent: false,
        updateStudent: updateStudent,
      };
    case UPDATE_STUDENT_FAIL:
      return {
        ...state,
        isUpdatingStudent: false,
        isUpdatingStudentFail: true,
      };
    default:
      return state;
  }
};

export default studentReducer;
