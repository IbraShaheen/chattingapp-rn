import { FETCH_USERS, SET_USER } from "../actions/types";

const initialState = {
  user: null,
  allUsers:[],
  loading:true,
  //  allUsers : [
  //   { username: "ahmad", id: 1 },
  //   { username: "amjad", id: 2 },
  //   { username: "ibra", id: 3 },
  //   { username: "coded", id: 4 },
  // ]
};

const authReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SET_USER:
      console.log("RED")
      return {
        ...state,
        user: action.payload,
        loading:false,
      };
      case FETCH_USERS:
        console.log("REDDDD")
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
