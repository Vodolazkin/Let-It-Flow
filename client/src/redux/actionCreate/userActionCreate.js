import { LOGIN, SIGNUP } from "../actionType/userActionType"

export const login = (user) => ({
  type: LOGIN,
  payload: user
})

export const signup = (user) => ({
  type: SIGNUP,
  payload: user
})

