import { Center, Spinner } from "native-base";
import React from "react";
import { View, Text,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";


//components
import ChatItem from "./ChatItem";

const ChatList = ({ navigation }) => {
  const _users = useSelector((state) => state.user.allUsers);

  const user = useSelector((state) => state.user.user);

  const otherUsers = _users.filter((_id) => _id.id !== user.id);

  const loading = useSelector((state) => state.user.loading);
  const rooms = useSelector((state) => state.rooms.rooms);
  if (loading) return <Spinner />;



  const chatList = rooms
    .filter((room) => room.usersId.length === 2)
    .map((_room) => otherUsers.find((_id) => _room.usersId.includes(_id.id)));

    const uniqueChatList = [...new Set(chatList)];


  const newList = uniqueChatList.map((userobj) => (
    <ChatItem _room={userobj} key={userobj.id} navigation={navigation} />
  ));



  return (
    <SafeAreaView>
 
    <Center style={styles.center}>
    <View style={styles.card}>
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