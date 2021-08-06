//Libraries
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Center, Button } from "native-base";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

//Components & functions
import { fetchUsers } from "../../store/actions/authActions";
import { CHAT_LIST, GROUP_LIST, PROFILE } from "../Navigation/types";

const Main = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <View style={styles.container}>
      <Center flex={1}>
        <ImageBackground
          style={styles.image}
          source={{
            uri: "https://i.pinimg.com/originals/99/56/0a/99560aa62aa2bc656c1189917f64b044.jpg",
          }}
        >
          <View style={styles.view}>
            <Button
              type="Submit"
              onPress={() => navigation.navigate(CHAT_LIST)}
              style={styles.chatsbtn}
            >
              <Icon name="chat" type="entypo" color="white" />
              Chats
            </Button>

            <Button
              type="Submit"
              onPress={() => navigation.navigate(PROFILE)}
              style={styles.chatsbtn}
            >
              <Icon name="person" type="Fontisto" color="white" />
              Profile
            </Button>

            <Button
              type="Submit"
              onPress={() => navigation.navigate(GROUP_LIST)}
              style={styles.chatsbtn}
            >
              <Icon name="groups" type="materialCommunityIcons" color="white" />
              Groups
            </Button>
          </View>
          <Text style={styles.mainText}>Welcome To </Text>
          <Text style={styles.mainTextt}> The Light </Text>
          <Text style={styles.mainTextt}> Speed Chat </Text>
        </ImageBackground>
      </Center>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 500,
    height: 800,
  },
  mainText: {
    fontSize: 40,
    color: "white",
    marginTop: 165,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "serif",
    letterSpacing: 3,
  },
  mainTextt: {
    fontSize: 40,
    color: "white",
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "serif",
    letterSpacing: 3,
  },
  chatsbtn: {
    width: 120,
    marginHorizontal: 5,
    marginTop: 40,
    backgroundColor: "#335c67",
    fontWeight: "bold",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 100,
  },
  view: {
    marginTop: 60,
    display: "flex",
    flexDirection: "row",
    height: 100,
    marginLeft: 54,
  },
});
export default Main;
