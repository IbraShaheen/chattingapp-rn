import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { checkForToken} from "../actions/authActions";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(checkForToken());

export default store;
