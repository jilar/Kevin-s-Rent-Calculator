import * as const from './types'

//newRoomates MUST be an array of objects
export const addRoomate= (newRoomates) =>{
  return{
    type:const.ADD_ROOMATE,
    payload:newRoomates
  }
}

export const addRoomate= (newRoomates) =>async(dispatch,getState)=>{
  const list=getState.Roomates
  for (const roomate in newRoomates){
    list.push(roomate)
  }

  return{
    type:const.ADD_ROOMATE,
    payload:list
  }
}
