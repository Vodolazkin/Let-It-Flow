import { LOGIN, SIGNUP, LOGOUT, REFRESH_TOKEN } from './../actionType/userActionType'


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

    case REFRESH_TOKEN: {
      return state
    }
      // return {
      //   // ...state,
      //   // user: { ...user, accessToken: payload },
      // };
    
    default:{
      return state
    }
  }
}
