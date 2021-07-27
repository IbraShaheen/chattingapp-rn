import { SET_USER } from "../actions/types";

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.payload) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
export default authReducer;
