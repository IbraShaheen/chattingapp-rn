import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { checkForToken, fetchUsers } from "../actions/authActions";
import { fetchRooms } from "../actions/roomActions";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(checkForToken());
store.dispatch(fetchUsers())
store.dispatch(fetchRooms());



export default store;
