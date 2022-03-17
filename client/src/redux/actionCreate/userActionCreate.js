import { LOGIN } from "../actionType/userActionType"

export const login = (user) => {

  return {
    type: LOGIN,
    payload: user
  }
}
