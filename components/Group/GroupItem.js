//Libraries
import React from "react";
import { Center } from "native-base";
import { useSelector } from "react-redux";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

//Components & functions
import { GROUP } from "../Navigation/types";

const GroupItem = ({ _room, navigation }) => {
  const rooms = useSelector((state) => state.rooms.rooms);

  const certainRoom = rooms.find((room) => room.roomId === _room.roomId);
  return (
    <SafeAreaView>
      <ScrollView>
        <Center>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(GROUP, { certainRoom: certainRoom })
            }
          >
            <View style={styles.card}>
              <Icon name="groups" type="FontAwesome" color="darkcyan" />

              <Text style={styles.uName}>{_room.name}</Text>
            </View>
          </TouchableOpacity>
        </Center>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GroupItem;

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
    fontSize: 25,
  },
  uName: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 45,
  },
});
