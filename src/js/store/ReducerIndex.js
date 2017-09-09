import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import globalReducer from './GlobalReducer';
import studentReducer from './StudentReducer';

export default combineReducers({
  form: formReducer,
  globalReducer,
  studentReducer,
});
