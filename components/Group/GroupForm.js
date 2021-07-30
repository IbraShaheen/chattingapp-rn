import React, { useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import SelectBox from "react-native-multi-selectbox";
import { xorBy } from "lodash";
import { Input, Button } from "native-base";
import { useDispatch } from "react-redux";
import { GROUP_LIST } from "../Navigation/types";
import { createRoom } from "../../store/actions/roomActions";

const GroupForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const _users = useSelector((state) => state.user.allUsers);

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [room, setRoom] = useState({ users: [] });
  const TheListOfUsers = _users.map((user) => {
    return { item: user.username, id: user.id };
  });

  const onMultiChange = () => {
    return (item) => setSelectedUsers(xorBy(selectedUsers, [item]));
  };
  const usersId = selectedUsers.map((u) => u.id);

  const handleChange = (name) => {
    setRoom({ ...room, users: usersId, name });
  };
  console.log(room);
  return (
    <View style={{ margin: 30, backgroundColor: "white" }}>
      <View style={{ height: 40 }} />
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>MultiSelect Demo</Text>
      <SelectBox
        label="Select multiple"
        options={TheListOfUsers}
        selectedValues={selectedUsers}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
      />
      <Input
        autoCapitalize="none"
        color="black"
        onChangeText={handleChange}
        w="80%"
        mx={4}
        placeholder="enter group name"
      />
      <Button
        onPress={() =>
          dispatch(createRoom(room)) && navigation.navigate(GROUP_LIST)
        }
        style={styles.btn}
      >
        create a group
      </Button>
    </View>
  );
};

export default GroupForm;

const styles = StyleSheet.create({
  btn: {
    width: 100,
    marginLeft: 200,
    marginTop: 50,
    backgroundColor: "#3f37c9",
    fontWeight: "bold",
  },
});
