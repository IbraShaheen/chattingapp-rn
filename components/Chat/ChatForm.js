//Libraries
import { Button } from "native-base";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, Picker, Text } from "react-native";

//Components & functions
import { CHAT_LIST } from "../Navigation/types";
import { createRoom } from "../../store/actions/roomActions";

const ChatForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("");

  const _users = useSelector((state) => state.user.allUsers);

  const [room, setRoom] = useState({
    users: [],
  });
  console.log(room);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.txt}> Start a Chat</Text>
        <Picker
          itemStyle={{ color: "white" }}
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) =>
            setRoom({ ...room, users: [itemValue] })
          }
        >
          <Picker.Item color="white" label="select user" value="" />
          {_users.map((user) => (
            <Picker.Item
              color="black"
              label={user.username}
              value={user.id}
              key={user.id}
            />
          ))}
        </Picker>
        <Button
          onPress={() =>
            dispatch(createRoom(room)) && navigation.navigate(CHAT_LIST)
          }
          style={styles.btnbtn}
        >
          start a chat
        </Button>
      </View>
    </View>
  );
};

export default ChatForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    marginTop: 240,
  },
  btnbtn: {
    width: 120,
    height: 40,
    backgroundColor:"darkcyan",
    marginHorizontal:"auto",
    marginVertical: 35
  },
  txt: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 28
  },
});
