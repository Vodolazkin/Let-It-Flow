const initialState = {
  bouquetsRe: [],
}

export function bouquetsReducer(state = initialState, action) {
  

  switch (action.type) {
    case 'INIT_BOUQUETS': {
      return {...state, bouquetsRe: action.payload}
    }
    default: {
      return state
    }
  }
}
