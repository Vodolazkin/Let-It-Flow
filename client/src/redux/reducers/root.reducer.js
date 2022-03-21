//это оболочка для всех редюсеров
import { combineReducers } from "redux";
import { categoriesReducer } from "./categories.reducer";
import { bouquetsReducer } from "./boquets.reducer";
import { cartReducer } from "./cart.reducer"
import { userReducer } from "./user.reducer";
import { eventReducer } from "./event.reducer";
import { cardReducer } from "./card.reducer";

// const rootReducer = combineReducers({
//   categoriesR: categoriesReducer,
//   bouquetsRe : bouquetsReducer,
  
  const rootReducer = combineReducers({
    categoriesR: categoriesReducer,
    bouquetsRe: bouquetsReducer,
    cart: cartReducer,
    user: userReducer,
    events: eventReducer,
    cardR: cardReducer,

});

export default rootReducer;
