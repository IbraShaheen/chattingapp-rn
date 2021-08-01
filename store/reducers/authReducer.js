import { FETCH_USERS, SET_USER } from "../actions/types";

const initialState = {
  user: null,
  allUsers:[],
  loading:true,

};

const authReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SET_USER:
      console.log("RED SET USER")
      return {
        ...state,
        user: action.payload,
        loading:false,
      };
      case FETCH_USERS:
        console.log("REDDDD FETCH")
      return {
        ...state,
        allUsers: action.payload,
        loading:false,
      };

    default:
      return state;
  }
};
export default authReducer;
