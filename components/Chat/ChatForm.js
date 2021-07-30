import { Button } from "native-base";
import React, { useState } from "react";
import { StyleSheet, View, Picker } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { createRoom } from "../../store/actions/roomActions";
import { CHAT_LIST } from "../Navigation/types";

const ChatForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("");

  const _users = useSelector((state) => state.user.allUsers);

  const [room, setRoom] = useState({
    users: [],
  });
  console.log(room);

  return (
    <View style={styles.container}>
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
        style={styles.signin}
      >
        start a chat
      </Button>
    </View>
  );
};

export default ChatForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
});

//just in case
{
  /* <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, paddingBottom: 20 }}>Demos</Text>
      </View>
      {/* <Text style={{ fontSize: 20, paddingBottom: 10 }}>Select Demo</Text>
      <SelectBox
        label="Select single"
        options={K_OPTIONS}
        value={selectedTeam}
        onChange={onChange()}
        hideInputFilter={false}
      /> */
}

//   const onChange=()=> {
//     return (val) => setSelectedTeam(val)
//   }

// const [selectedTeam, setSelectedTeam] = useState({})
