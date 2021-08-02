//Libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Home from "../Home";
import Signup from "../Authentication/Signup";
import Signin from "../Authentication/Signin";
import Main from "../Main";
import ChatForm from "../Chat/ChatForm";
import ChatList from "../Chat/ChatList";
import GroupForm from "../Group/GroupForm";
import GroupList from "../Group/GroupList";
import ChatButton from "../Chat/ChatButton"

import {
  HOME,
  SIGN_IN,
  SIGN_UP,
  MAIN,
  CHAT_FORM,
  CHAT_LIST,
  GROUP_FORM,
  GROUP_LIST,
  ROOM,
} from "./types";
import Room from "../Room/Room";
import GroupButton from "../Group/GroupButton";

const StackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName={HOME}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#3f37c9",
        },
        headerTintColor: "white",

        cardStyle: {
          backgroundColor: "#023047",
        },
      }}
    >
      <Screen name={HOME} component={Home} options={{ headerShown: false }} />

      <Screen name={SIGN_UP} component={Signup} options={{ title: "Signup" }} />

      <Screen name={SIGN_IN} component={Signin} options={{ title: "Signin" }} />
      <Screen name={MAIN} component={Main} options={{ headerShown: false }} />
      <Screen
        name={CHAT_LIST}
        component={ChatList}
        options={{ title: "Chats",
        headerRight:() => (<ChatButton/>) }}
        
      />
      <Screen
        name={CHAT_FORM}
        component={ChatForm}
        options={{ headerShown: false }}
      />
      <Screen
        name={GROUP_FORM}
        component={GroupForm}
        options={{ headerShown: false }}
      />
      <Screen
        name={GROUP_LIST}
        component={GroupList}
        options={{ title: "Groups",
        headerRight:() => (<GroupButton/>) }}
      />

    <Screen name={ROOM} component={Room} options={({route})=>{
            return {headerTitle : route.params._room.username}}} /> 

    </Navigator>
  );
};

export default StackNavigator;
