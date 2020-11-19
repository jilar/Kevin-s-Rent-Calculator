import {ADD_ROOMATE,CHANGE_CONTRIBUTION,NAME_CHANGE} from '../actions/types';
import _ from 'lodash'

const INITIAL_STATE={};

//array
// {
//   name:null,
//   contributionPercent:null

// must user array with mapKeys
export default (state=INITIAL_STATE, action)=>{
  switch(action.type){
    case ADD_ROOMATE:
     let roomateList;
     for(const roomate in action.payload){
        roomateList[roomate.id]=roomate;
     }
     return {...state, ...roomateList}
    case CHANGE_CONTRIBUTION:
      return {...state, roomates}
    case NAME_CHANGE:
    default:
      return state;
  }
}
