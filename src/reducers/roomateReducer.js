import {ADD_ROOMATE,CHANGE_CONTRIBUTION,NAME_CHANGE} from '../actions/types';
import _ from 'lodash'

const INITIAL_STATE={

}

;
 return {...state, ..._.mapKeys(action.payload, 'id')};
//array
// {
//   name:null,
//   contributionPercent:null

// }
export default (state=INITIAL_STATE, action)=>{
  switch(action.type){
    case ADD_ROOMATE:
     return {...state, ..._action.payload}
    case CHANGE_CONTRIBUTION:
      return {...state, roomates}
    case NAME_CHANGE:
    default:
      return state;
  }
}
