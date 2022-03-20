import { TEST_TEST } from '../actionType/actionType'
const initalState = {
  user: {},
}

export const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case TEST_TEST: {
        return action.payload
    }
    
  
    default:{
      return state
    }
  }
}
