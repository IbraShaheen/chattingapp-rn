//Libraries
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

//reducer & functions
import rootReducer from "./rootReducer";
import { checkForToken } from "../actions/authActions";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(checkForToken());

export default store;
