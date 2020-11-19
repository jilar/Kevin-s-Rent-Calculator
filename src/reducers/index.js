import {combineReducers} from 'redux';
import roomateReducer from './roomateReducer'

export default combineReducers({
  Roomates: roomateReducer,
});
