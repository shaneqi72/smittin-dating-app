import { combineReducers, createStore } from "redux";
import { datingInfoReducer } from "./store/reducers/datingInfoReducer";

const allReducers = combineReducers({
  datingInfoReducer: datingInfoReducer,
});

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
