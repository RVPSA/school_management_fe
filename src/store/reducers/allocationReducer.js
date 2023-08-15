import {
  ALLOCATE_CLASSROOM,
  ALLOCATE_CLASSROOM_FAIL,
  ALLOCATE_CLASSROOM_SUCCESS,
  ALLOCATE_SUBJECT,
  ALLOCATE_SUBJECT_FAIL,
  ALLOCATE_SUBJECT_SUCCESS,
  DEALLOCATE_CLASSROOM,
  DEALLOCATE_CLASSROOM_FAIL,
  DEALLOCATE_CLASSROOM_SUCCESS,
  DEALLOCATE_SUBJECT,
  DEALLOCATE_SUBJECT_FAIL,
  DEALLOCATE_SUBJECT_SUCCESS,
} from "../actions";

export const initialState = {
  allocateSubject: [],
  allocateClassroom: [],
  deAllocateSubject: "",
  deAllocateClassroom: "",
};

const allocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALLOCATE_CLASSROOM:
      return { ...state };
    case ALLOCATE_CLASSROOM_SUCCESS:
      const allocateClassroom = action.response;
      return {
        ...state,
        allocateClassroom: allocateClassroom,
      };
    case ALLOCATE_CLASSROOM_FAIL:
      return { ...state };
    case ALLOCATE_SUBJECT:
      return { ...state };
    case ALLOCATE_SUBJECT_SUCCESS:
      const allocateSubject = action.response;
      return {
        ...state,
        allocateSubject: allocateSubject,
      };
    case ALLOCATE_SUBJECT_FAIL:
      return {
        ...state,
      };
    case DEALLOCATE_CLASSROOM:
      return {
        ...state,
      };
    case DEALLOCATE_CLASSROOM_SUCCESS:
      const deAllocateClassroom = action.response;
      return {
        ...state,
        deAllocateClassroom: deAllocateClassroom,
      };
    case DEALLOCATE_CLASSROOM_FAIL:
      return {
        ...state,
      };
    case DEALLOCATE_SUBJECT:
      return {
        ...state,
      };
    case DEALLOCATE_SUBJECT_SUCCESS:
      const deAllocateSubject = action.response;
      return {
        ...state,
        deAllocateSubject: deAllocateSubject,
      };
    case DEALLOCATE_SUBJECT_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default allocationReducer;
