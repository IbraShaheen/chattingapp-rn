import React from "react";
import { Center} from "native-base";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { ROOM } from "../Navigation/types";

const ChatItem = ({ _room, navigation }) => {
  console.log(_room);
  return (
    <SafeAreaView>
      <Center>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROOM, { _room: _room })}
        >
          <View style={styles.card}>
          {/* style={{backgroundColor:"red" }} */}
            <Icon   name="v-card" type="entypo" color="darkcyan" />

            <Text style={styles.uName} > {_room.username}</Text>
          </View>
        </TouchableOpacity>
        {/* <Text>{"\n"}</Text> */}
      </Center>
    </SafeAreaView>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    width: 300,
    backgroundColor: "rgb(237, 242, 251)",
    padding: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "cyan",
    height: 65,
    marginRight: 10,
    marginLeft: 35,
    marginVertical: 6,
    fontWeight: "bold",
    fontSize:25
  },
  uName:{
    fontWeight: "bold",
    fontSize:18,
    marginLeft: 45,
      
  }
});
