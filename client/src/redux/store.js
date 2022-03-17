import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from ''
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const initialStore = {
  user: {},
}
 
export const store = createStore(rootReducer, initialStore, composeWithDevTools(applyMiddleware(thunk)))
