//это оболочка для всех редюсеров
import { combineReducers } from "redux";

import { categoriesReducer } from "./categories.reducer";
import { bouquetsReducer } from "./boquets.reducer";
import { cartReducer } from "./cart.reducer"

const rootReducer = combineReducers({
  categoriesR: categoriesReducer,
  bouquetsRe : bouquetsReducer,
  cart: cartReducer
});

export default rootReducer;
