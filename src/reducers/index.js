import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logInReducer from "./login";
import taskReducer from "./login";

const reducer = combineReducers({ logInReducer, taskReducer });
const store = () => {
  return createStore(reducer, composeWithDevTools());
};
export default store();
