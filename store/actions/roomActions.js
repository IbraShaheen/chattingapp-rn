import { FETCH_ROOMS, NEW_ROOM} from "./types";
import instance from "./instance";
import { CHAT_LIST } from "../../components/Navigation/types";


export const createRoom = (newRoom) => {
  return async (dispatch) => {
    try {
        // if(user)
      const res = await instance.post("/newroom", newRoom);
      dispatch({
        type: NEW_ROOM,
        payload: {
          room: res.data,
        },
      });
      // navigation.goBack(CHAT_LIST)
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const fetchRooms = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/rooms");

      dispatch({
        type: FETCH_ROOMS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};