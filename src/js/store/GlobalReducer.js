const initialState = {};

export default function globalReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    default:
      return state;
  }
}