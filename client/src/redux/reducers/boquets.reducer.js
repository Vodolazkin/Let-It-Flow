import {
  ADD_BOUQUET,
  DELETE_BOUQUET,
  UPDATE_BOUQUET,
  INIT_CATEGORY_BOUQUETS,
  INIT_BOUQUETS
} from '../actionType/bouquetActionType'

const initialState = {
  bouquetsRe: [],
}

export function bouquetsReducer(state = initialState, action) {
  

  switch (action.type) {

    case INIT_BOUQUETS: {
      return {...state, bouquetsRe: action.payload}
    }

    case INIT_CATEGORY_BOUQUETS: {
      return {...state, bouquetsRe: action.payload}
    }

    case ADD_BOUQUET:
      return [...state.bouquetsRe, action.payload]

    case DELETE_BOUQUET:
      return { ...state, cards: state.cards.filter(el => el.id !== action.payload)}

    case UPDATE_BOUQUET:
      return { ...state, cards: state.cards.map(el => {
        if (el.id === action.payload.id) {
          return {
            ...el, 
            id: action.payload.id,
            title: action.payload.title, 
            description: action.payload.description,
            image: action.payload.image,
            price: action.payload.price,
            category_id: action.payload.category_id,
          }
        } else {
          return el
        }
      })}

    default: {
      return state
    }
  }
}
