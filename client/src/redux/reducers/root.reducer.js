//это оболочка для всех редюсеров
import { combineReducers } from "redux";

import { categoriesReducer } from "./categories.reducer";
import { bouquetsReducer } from "./boquets.reducer";
import { userReducer } from "./user.reducer";
import { eventReducer } from "./event.reducer";

const rootReducer = combineReducers({
  categoriesR: categoriesReducer,
  bouquetsRe: bouquetsReducer,
  user: userReducer,
  events: eventReducer,
});

export default rootReducer;
