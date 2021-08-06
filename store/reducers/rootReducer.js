//Libraries
import { combineReducers } from "redux";

// Reducers
import roomReducer from "./roomReducer";
import authReducer from "./authReducer";
import messageReducer from "./msgReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  user: authReducer,
  rooms: roomReducer,
  messages: messageReducer,
  profiles: profileReducer,
});

export default rootReducer;
