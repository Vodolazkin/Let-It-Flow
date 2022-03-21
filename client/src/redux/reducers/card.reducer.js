import { 
  ONE_CARD
 } from '../actionType/eventActionType';


const initialState = {
  cardR: [],
}

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ONE_CARD:{
      return {cardR: action.payload}
    }
   
    default:
      return state
  }
}