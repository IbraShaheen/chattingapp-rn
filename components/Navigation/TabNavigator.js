/* No need for this file, (just for reference) */

//Libraries
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Components & functions
import Main from "../Main";
import ChatList from "../Chat/ChatList";
import GroupList from "../Group/GroupList";
import { CHATS, GROUPS, MAIN, PROFILE } from "./types";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  console.log(Tab);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={MAIN}
        component={Main}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={CHATS}
        component={ChatList}
        options={{
          tabBarLabel: "Chats",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="comment-multiple"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={GROUPS}
        component={GroupList}
        options={{
          tabBarLabel: "Groups",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={PROFILE}
        component={Main}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-convert"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
