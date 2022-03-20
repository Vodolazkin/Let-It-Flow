import { LOGIN, SIGNUP, LOGOUT, REFRESH_TOKEN } from "../actionType/userActionType"

export const login = (user) => ({
  type: LOGIN,
  payload: user
})

export const signup = (user) => ({
  type: SIGNUP,
  payload: user
})

export const logout = () => ({
  type: LOGOUT,
  payload: null
})

export const refreshToken = (accessToken) => (dispatch) => {
  dispatch({
    type: REFRESH_TOKEN,
    payload: accessToken,
  })
}




