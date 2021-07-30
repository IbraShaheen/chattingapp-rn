import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GroupItem = ({ _room }) => {
  return (
    <View>
      <Text>{_room.name}</Text>
      <Text>Hello fron group Item</Text>
    </View>
  );
};

export default GroupItem;

const styles = StyleSheet.create({});
