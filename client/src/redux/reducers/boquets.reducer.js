const initialState = {
  bouquetsRe: [],
}

export function bouquetsReducer(state = initialState, action) {
  

  switch (action.type) {
    case 'INIT_BOUQUETS': {
      return {...state, bouquetsRe: action.payload}
    }
    case 'INIT_CATEGORY_BOUQUETS': {
      // return [...action.payload]
      return {...state, bouquetsRe: action.payload}
    }
    default: {
      return state
    }
  }
}
