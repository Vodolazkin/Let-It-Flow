import { LOGIN, SIGNUP, LOGOUT } from './../actionType/userActionType'


export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN: {
        return action.payload
    }

    case SIGNUP: {
      return action.payload
    }

    case LOGOUT: {
      return null
    }
    
    default:{
      return state
    }
  }
}
