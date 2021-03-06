//Libraries
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Components & functions
import instance from "./instance";
import { FETCH_USERS, SET_USER } from "./types";
import { MAIN } from "../../components/Navigation/types";


export const signup = (userData, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", userData);
      dispatch(setUser(res.data.token));
      navigation.navigate(MAIN);
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const signin = (userData, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      dispatch(setUser(res.data.token));
      navigation.navigate(MAIN);
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const signout = () => {
  return setUser();
};

const setUser = (token) => async (dispatch) => {
  if (token) {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    return dispatch({
      type: SET_USER,
      payload: decode(token),
    });
  } else {
    await AsyncStorage.removeItem("myToken");
    delete instance.defaults.headers.common.Authorization;
    return dispatch({
      type: SET_USER,
      payload: null,
    });
  }
};

export const checkForToken = () => async (dispatch) => {
  const token = await AsyncStorage.getItem("myToken");

  if (token) {
    //check if token expiered
    const currentTime = Date.now();
    const user = decode(token);

    if (user.exp > currentTime) {
      return dispatch(setUser(token));
    }
  }
  dispatch(setUser());
};

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/fetch");
      console.log(res.data);
      dispatch({
        type: FETCH_USERS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
