import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmojiSelector, { Categories } from "react-native-emoji-selector";
import { Button, Input } from "native-base";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { createMessage, fetchMessages } from "../../store/actions/msgActions";

const Room = ({ route }) => {
  // console.log(route.params._room.id)
  const dispatch = useDispatch();
useEffect(() => {
    dispatch(fetchMessages())
}, [])

  const [text, setText] = useState("");
  const [state,setState]=useState("");
  const [socket, setSocket] = useState(null);
  const messages = useSelector((state) => state.messages.messages);
  const loading = useSelector((state) => state.rooms.loading);
    console.log(messages)
  const rooms = useSelector((state) => state.rooms.rooms);
  const users = useSelector((state) => state.user.allUsers);

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    setSocket(io("http://192.168.1.179:8080"));

  }, []);

  const handleSubmit = () => {
    setText(state)
  };

  useEffect(() => {
    if (socket) {
      socket.off("message");
      socket.on("message", ({ message }) => {
          console.log(message)
        dispatch(createMessage(message));
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket && text !== null) {
      socket.emit("message", {
        senderId: user.id,

        image: "",
        text: text,
        roomId: certainRoom.roomId,
      });
    }
  }, [text]);

  const certainRoom = rooms.find(
    (room) =>
      room.usersId.includes(user.id) &&
      room.usersId.includes(route.params._room.id)
  );
//   console.log(certainRoom)
  const _messages = messages.filter((msg) => msg.roomId === certainRoom.roomId);
 
  return (
    <SafeAreaView style={styles.room}>
      <View>
        <Text>{_messages?_messages.map((message)=> <Text>{message.text}</Text>):""}</Text>
        {/* <EmojiSelector onEmojiSelected={emoji => console.log(emoji)} /> */}
        <View>
          <Input
            autoCapitalize={false}
            onChangeText={(state)=>setState(state)}
            w="80%"
            mx={4}
            placeholder="type a message"
          />
          <TouchableOpacity>
            <Icon
              raised
              name="send"
              type="Ionicons"
              color="#f50"
              // size="1"
              onPress={handleSubmit}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Room;

const styles = StyleSheet.create({
  room: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#edf2f4",
    padding: 20,
  },
});
