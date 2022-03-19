import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root.reducer';
import { composeWithDevTools } from '@redux-devtools/extension';
// import thunk from 'redux-thunk'

const initialStore = {
  user: null,
  categoriesR: [],
  bouquetsRe: []
}
 
export const store = createStore(rootReducer, initialStore, composeWithDevTools())
