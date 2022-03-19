import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk'

const initialStore = {
  user: {
    first_name: 'Артем',
    last_name: 'Тарасов',
    email: "tarasov@mail.ru", 
    phone: "7812654246"
  },
  categoriesR: [],
  bouquetsRe: []
}
 
export const store = createStore(rootReducer, initialStore, composeWithDevTools(applyMiddleware()))
