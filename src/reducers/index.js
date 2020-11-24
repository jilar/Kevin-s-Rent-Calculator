import {combineReducers} from 'redux';
import roomateReducer from './roomateReducer'
import utilityReducer from './utlityReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  Roomates: roomateReducer,
  Utilities: utilityReducer,
  form:formReducer
});
