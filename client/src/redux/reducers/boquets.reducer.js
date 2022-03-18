export function bouquetsReducer(state = [], action) {
  

  switch (action.type) {
    case 'INIT_BOUQUETS': {
      return [...action.payload]
    }
    default: {
      return state
    }
  }
}
