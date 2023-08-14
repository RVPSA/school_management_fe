import {
  ADD_CLASSROOM,
  ADD_CLASSROOM_FAIL,
  ADD_CLASSROOM_SUCCESS,
} from "../actions";

export const initialState = {
  isAddingClassRoom: false,
  isAddingClassRoomFail: false,
  addClassRoom: [],
};

const classroomReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLASSROOM:
      return {
        ...state,
        isAddingClassRoom: true,
      };
    case ADD_CLASSROOM_SUCCESS:
      const addClassRoom = action.response;
      return {
        ...state,
        isAddingClassRoom: false,
        addClassRoom: addClassRoom,
      };
    case ADD_CLASSROOM_FAIL:
      return {
        ...state,
        isAddingClassRoom: false,
        isAddingClassRoomFail: true,
      };
    default:
      return state;
  }
};

export default classroomReducer;
