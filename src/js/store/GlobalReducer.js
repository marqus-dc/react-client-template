import StoreAction from "../constant/StoreAction";

const initialState = {
  createMarkDialogVisible: false
};

export default function globalReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case StoreAction.SET_CREATE_MARK_DIALOG_VISIBILITY:
      return Object.assign({}, state, {createMarkDialogVisible: action.visibility});
    default:
      return state;
  }
}