import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CHATS, GROUPS, MAIN, PROFILE } from './types';
import Main from '../Main';
import { Icon } from "react-native-elements/dist/icons/Icon";
import ChatList from '../Chat/ChatList';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import GroupList from '../Group/GroupList';


const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    console.log(Tab)
    return (
        <Tab.Navigator>
        <Tab.Screen name={MAIN} component={Main} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-circle" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name={CHATS} component={ChatList} options={{
          tabBarLabel: 'Chats',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="comment-multiple" color={color} size={size} />
          ),
        }}  />
         <Tab.Screen name={GROUPS} component={GroupList} options={{
          tabBarLabel: 'Groups',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={size} />
          ),
        }}  />
         <Tab.Screen name={PROFILE} component={Main} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-convert" color={color} size={size} />
          ),
        }}  />
      </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({})
