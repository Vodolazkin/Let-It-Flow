import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk'

// const initialStore = {
//   user: {},
//   categoriesR: [],
//   bouquetsRe: [],
//   cart: JSON.parse(window.localStorage.getItem('cart')) ?? []
//   // cart: []
// }
 
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))
