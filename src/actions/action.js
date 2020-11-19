import * as const from './types'

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
