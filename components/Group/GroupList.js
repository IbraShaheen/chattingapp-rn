import { Center, ScrollView } from "native-base";
import React, { useEffect } from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../../store/actions/roomActions";
import { GROUP_FORM } from "../Navigation/types";
//components
import GroupItem from "./GroupItem";

const GroupList = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRooms());
  }, []);
  const user = useSelector((state) => state.user.user);
  const rooms = useSelector((state) => state.rooms.rooms);
  const groupList = rooms
    .filter((room) => room.usersId.length > 2)
    .filter((users) => users.usersId.includes(user.id))
    .map((_room) => (
      <GroupItem _room={_room} navigation={navigation} key={_room.id} />
    ));

  console.log(groupList);

  return (
    <SafeAreaView>
      <ScrollView>

      <Center>
        <View style={styles.card}>
          <Text>{groupList}</Text>
        </View>
      </Center>
      </ScrollView>

    </SafeAreaView>
  );
};

export default GroupList;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "100%",
    // backgroundColor: "#2a9d8f",
    padding: 20,
  },
});

// to reset the form :
//<Button title="new group" onPress={() => navigation.replace(GROUP_FORM)} />
