import StoreAction from "../constant/StoreAction";

const initialState = {
  students: []
};

export default function studentReducer(state = initialState, action) {
  switch (action.type) {
    case StoreAction.READ_ALL_STUDENTS_START:
      return Object.assign({}, state, {students: initialState.students});
    case StoreAction.READ_ALL_STUDENTS:
      return Object.assign({}, state, {students: action.students});
    default:
      return state;
  }
}