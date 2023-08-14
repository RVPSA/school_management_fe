import { ADD_STUDENT, ADD_STUDENT_FAIL, ADD_STUDENT_SUCCESS } from "../actions";

export const initialState = {
  isAddingStudent: false,
  isAddingStudentFail: false,
  student: [],
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

    default:
      return state;
  }
};

export default studentReducer;
