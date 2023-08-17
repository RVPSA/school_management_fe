import {
  ADD_CLASSROOM,
  ADD_CLASSROOM_FAIL,
  ADD_CLASSROOM_SUCCESS,
  GET_CLASSROOM,
  GET_CLASSROOM_FAIL,
  GET_CLASSROOM_SUCCESS,
} from "../actions";

export const initialState = {
  isAddingClassRoom: false,
  isAddingClassRoomFail: false,
  addClassRoom: [],
  isGettingClassRoom: false,
  isGettingClassRoomFail: false,
  getClassRoom: [],
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
    case GET_CLASSROOM:
      return {
        ...state,
        isGettingClassRoom: true,
      };
    case GET_CLASSROOM_SUCCESS:
      const getClassRoom = action.response;
      return {
        ...state,
        isGettingClassRoom: false,
        getClassRoom: getClassRoom,
      };
    case GET_CLASSROOM_FAIL:
      return {
        ...state,
        isGettingClassRoom: false,
        isGettingClassRoomFail: true,
      };
    default:
      return state;
  }
};

export default classroomReducer;
