import * as const from './types'

//newRoomates MUST be an array of objects
export const addRoomate= (newRoomates) =>{
  return{
    type:const.ADD_ROOMATE,
    payload:newRoomates
  }
}

export const deleteRoomate= (roomateID) =>async(dispatch,getState)=>{
  return{
    type:const.DELETE_ROOMATE,
    payload:roomateID
  }
}
