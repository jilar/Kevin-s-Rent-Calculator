import {combineReducers} from 'redux';
import roomateReducer from './roomateReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  Roomates: roomateReducer,
  form:formReducer
});
