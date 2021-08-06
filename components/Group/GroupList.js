//Libraries
import React, { useEffect } from "react";
import { Center, ScrollView } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

//Components & functions
import GroupItem from "./GroupItem";
import { fetchRooms } from "../../store/actions/roomActions";

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
    padding: 20,
  },
});
