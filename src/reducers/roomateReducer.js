import {ADD_ROOMATE,CHANGE_CONTRIBUTION,NAME_CHANGE} from '../actions/types';
import _ from 'lodash'

const INITIAL_STATE={};

export default (state=INITIAL_STATE, action)=>{
  switch(action.type){
    case ADD_ROOMATE:
     let roomateList;
     for(const roomate in action.payload){
        roomateList[roomate.id]=roomate;
     }
     return {...state, ...roomateList}
    case DELETE_ROOMATE:
     return _.omit(state, action.payload);
    case CHANGE_CONTRIBUTION:
      return {...state, roomates}
    case NAME_CHANGE:
    default:
      return state;
  }
}
