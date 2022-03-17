import { TEST_TEST } from '../actionType/actionType'


export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case TEST_TEST: {
        return action.payload
    }
    
  
    default:{
      return state
    }
  }
}
