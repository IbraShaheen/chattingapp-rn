import { combineReducers } from "redux";
import authReducer from "./authReducer";
import messageReducer from "./msgReducer";
import profileReducer from "./profileReducer";
import roomReducer from "./roomReducer";

const rootReducer = combineReducers({
  user: authReducer,
  rooms : roomReducer,
  messages: messageReducer,
  profiles: profileReducer
});

export default rootReducer;
