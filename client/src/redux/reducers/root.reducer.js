//это оболочка для всех редюсеров
import { combineReducers } from "redux";

import { categoriesReducer } from "./categories.reducer";

const rootReducer = combineReducers({
  categoriesR: categoriesReducer,
});

export default rootReducer;