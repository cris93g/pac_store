import { createStore, applyMiddleware, combineReducers } from "redux";

import promiseMiddleWare from "redux-promise-middleware";
import itemReducer from "./ducks/itemReducer";

const middleware = applyMiddleware(promiseMiddleWare);

const combinedReducers = combineReducers({
  itemReducer
  //   storeReducer
});

const store = createStore(combinedReducers, middleware);

export default store;
