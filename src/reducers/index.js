import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logIn from "./login";
import tasksReducer from "./tasks";
const reducer = combineReducers({ logIn, tasksReducer });
const store = () => {
  return createStore(reducer, composeWithDevTools());
};
export default store(); //our store is ready to use
