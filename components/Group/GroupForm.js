import React, { useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import SelectBox from "react-native-multi-selectbox";
import { xorBy } from "lodash";
import { Input, Button, Center } from "native-base";
import { useDispatch } from "react-redux";
import { GROUP_LIST } from "../Navigation/types";
import { createRoom } from "../../store/actions/roomActions";
import { SafeAreaView } from "react-native-safe-area-context";


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
    <SafeAreaView>
    <View style={{ margin: 20, backgroundColor: "#edf6f9", borderRadius:15,
  padding:15, marginBottom:80 }}>
      <Center>
      <View style={{ height: 40 }} />
      <Text style={{ fontSize: 20, paddingBottom: 10, fontWeight:"bold" }}>Create a group</Text>
      <Text>{"\n"}</Text>
      <SelectBox
        label="Select group members"
        options={TheListOfUsers}
        selectedValues={selectedUsers}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
        
       
      />
      <Text>{"\n"} {"\n"}</Text>
      <Input
        autoCapitalize="none"
        color="black"
        onChangeText={handleChange}
        w="80%"
        mx={4}
        placeholder="enter the group name"
       isRequired
        backgroundColor="#eee"
      
      />
      {room.users.length>1&&room.name ? <Button
        onPress={() =>
          // dispatch(createRoom(room)) && navigation.navigate(GROUP_LIST)
          dispatch(createRoom(room)) && navigation.navigate(GROUP_LIST)

           && setRoom({ users: [] }) && setSelectedUsers([])
        }
        style={styles.btn}
      >
        create a group
      </Button> : <Button disabled style={styles.btn}
      >
        create a group
      </Button>}


      {/* <Button disabled> create a group</Button> */}

      {/* <Button
        onPress={() =>
          dispatch(createRoom(room)) && navigation.navigate(GROUP_LIST)
          // && setRoom({ users: [] })
        }
        style={styles.btn}
      >
        create a group
      </Button> */}
      <Text>{"\n"} {"\n"}</Text>
    </Center>
    </View>
    </SafeAreaView>
  );
};

export default GroupForm;

const styles = StyleSheet.create({
  btn: {
    width: 155,
    marginTop: 50,
    backgroundColor: "#821752",
    fontWeight: "bold",
    justifyContent:"center",
  },
});
