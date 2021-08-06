//Libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components & functions
import Home from "../Home";
import Main from "../Main";
import Room from "../Room/Room";
import Group from "../Room/Group";
import ChatForm from "../Chat/ChatForm";
import ChatList from "../Chat/ChatList";
import Profile from "../Profile/Profile";
import GroupForm from "../Group/GroupForm";
import GroupList from "../Group/GroupList";
import ChatButton from "../Chat/ChatButton";
import Signup from "../Authentication/Signup";
import Signin from "../Authentication/Signin";
import GroupButton from "../Group/GroupButton";
import ProfileForm from "../Profile/ProfileForm";

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
  GROUP,
  PROFILE,
  PORFILE_FORM,
} from "./types";


const StackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName={HOME}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#335c67",
        },
        headerTintColor: "white",

        cardStyle: {
          backgroundColor: "#353656",
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
        options={{ title: "Chats", headerRight: () => <ChatButton /> }}
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
        options={{ title: "Groups", headerRight: () => <GroupButton /> }}
      />

      <Screen
        name={ROOM}
        component={Room}
        options={({ route }) => {
          return { headerTitle: route.params._room.username };
        }}
      />
      <Screen
        name={GROUP}
        component={Group}
        options={({ route }) => {
          return { headerTitle: route.params.certainRoom.name };
        }}
      />
      <Screen
        name={PROFILE}
        component={Profile}
        options={{ title: "My Profile" }}
      />
      <Screen
        name={PORFILE_FORM}
        component={ProfileForm}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default StackNavigator;
