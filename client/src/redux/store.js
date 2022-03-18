import { createStore } from 'redux'
import { rootReducer } from ''
import { composeWithDevTools } from 'redux-devtools-extension'
//import thunk from 'redux-thunk'

const initialStore = {
  user: {},
  bouquetsRe: []
}
 
export const store = createStore(rootReducer, initialStore, composeWithDevTools())
