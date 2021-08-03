import { FETCH_ROOMS, NEW_ROOM } from "../actions/types";

const initialState = {
  rooms: [],
  loading:true,
}

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case FETCH_ROOMS:
      console.log("hello from reducer")
      return {
        ...state,
        rooms: action.payload,
        loading: false,
      };
    case NEW_ROOM:
      const { room } = action.payload;
      return {
        ...state,
        rooms: [...state.rooms, room],
      };
    default:
      return state;
  }
};

export default roomReducer;