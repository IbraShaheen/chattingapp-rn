//Libraries
import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Center, ScrollView, Spinner } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

//Components & functions
import ChatItem from "./ChatItem";
import { fetchRooms } from "../../store/actions/roomActions";

const ChatList = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  const user = useSelector((state) => state.user.user);
  const _users = useSelector((state) => state.user.allUsers);
  const otherUsers = _users.filter((_id) => _id.id !== user.id);

  const rooms = useSelector((state) => state.rooms.rooms);
  const loading = useSelector((state) => state.user.loading);

  if (loading) return <Spinner />;

  const chatList = rooms
    .filter((room) => room.usersId.length === 2)
    .filter((users) => users.usersId.includes(user.id))
    .map((_room) => otherUsers.find((_id) => _room.usersId.includes(_id.id)));

  const uniqueChatList = [...new Set(chatList)];

  const newList = uniqueChatList.map((userobj) => (
    <ChatItem _room={userobj} key={userobj.id} navigation={navigation} />
  ));

  return (
    <SafeAreaView>
      <ScrollView>
        <Center style={styles.center}>
          <View style={styles.card}>
            <Text>{newList}</Text>
          </View>
        </Center>
      </ScrollView>
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
    padding: 20,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ChatList;
