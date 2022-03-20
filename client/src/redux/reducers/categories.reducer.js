const initialState = {
  categoriesR: [],
}

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'INIT_CATEGORIES':{
      return {...state, categoriesR: action.payload}
    }
   
    default:
      return state
  }
}
