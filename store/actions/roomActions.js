import { NEW_ROOM} from "./types";
import instance from "./instance";
import { CHAT_LIST } from "../../components/Navigation/types";

export const createRoom = (newRoom) => {
  return async (dispatch) => {
    try {
        // if(user)
        console.log("hello")
        console.log(newRoom)
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