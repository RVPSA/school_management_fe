import { ADD_TEACHER, ADD_TEACHER_FAIL, ADD_TEACHER_SUCCESS } from "../actions";

export const initialState = {
  isAddingTeacher: false,
  isAddingTeacherFail: false,
  addTeacher: [],
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
    default:
      return state;
  }
};

export default teacherReducer;
