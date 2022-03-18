//это оболочка для всех редюсеров
import { combineReducers } from "redux";

import { categoriesReducer } from "./categories.reducer";
import { bouquetsReducer } from "./boquets.reducer";

const rootReducer = combineReducers({
  categoriesR: categoriesReducer,
  bouquetsRe : bouquetsReducer
});

export default rootReducer;
