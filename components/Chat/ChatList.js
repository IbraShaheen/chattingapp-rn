import { Center, List, Spinner } from "native-base";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { CHAT_FORM } from "../Navigation/types";

//components
import ChatItem from "./ChatItem";

const ChatList = ({ navigation }) => {
  const _users = useSelector((state) => state.user.allUsers);
  const loading = useSelector((state) => state.user.loading);
  const rooms = useSelector((state) => state.rooms.rooms);
  if (loading) return <Spinner />;

  const chatList = rooms
    .filter((room) => room.usersId.length === 2)
    .map((_room) => _users.find((_id) => _id.id === _room.usersId[0]));


    console.log(rooms)
  // console.log(_users);
  // console.log(chatList);

  const newList = chatList.map((userobj) => (
    <ChatItem _room={userobj} key={userobj.id} />
  ));

  return (
    <SafeAreaView>
 
    <Center style={styles.center}>
    <View style={styles.card}>
      {/* <Button title="new chat" onPress={() => navigation.navigate(CHAT_FORM)} /> */}
      <Text>{newList}</Text>
    </View>
    </Center>

    </SafeAreaView>
  );
};
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
  center:{

    justifyContent: "center",
    alignItems: "center",

  }
});
export default ChatList;
