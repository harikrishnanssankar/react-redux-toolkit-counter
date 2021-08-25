import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import testSlice from "./testSlice";

const reducer = combineReducers({
  counter: counterSlice,
  test: testSlice
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false })]
});

export default store;
