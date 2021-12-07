import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logIn from "./login";

const reducer = combineReducers({ logIn });
const store = () => {
  return createStore(reducer, composeWithDevTools());
};
export default store(); //our store is ready to use