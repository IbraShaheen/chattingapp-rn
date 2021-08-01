import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Center, Button } from "native-base";
import { CHAT_LIST, GROUP_FORM, GROUP_LIST } from "../Navigation/types";
import { Icon } from "react-native-elements/dist/icons/Icon";

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Center flex={1}>
        <ImageBackground
          style={styles.image}
          source={{
            uri: "https://www.kolpaper.com/wp-content/uploads/2021/02/whatsapp-wallpaper-12.png",
          }}
        >
          <Text style={styles.mainText}>Welcome To </Text>
          <Text style={styles.mainTextt}> The Light </Text>
          <Text style={styles.mainTextt}> Speed Chat </Text>

          <View
            style={{
              marginTop: 295,
              // backgroundColor: "darkcyan",
              display: "flex",
              flexDirection: "row",
              height: 100,
            }}
          >
            <Button
              type="Submit"
              onPress={() => navigation.navigate(CHAT_LIST)}
              style={styles.chatsbtn}
            >
              <Icon name="chat" type="entypo" color="black" />
              Chats
            </Button>

            <Button
              type="Submit"
              // onPress={() => navigation.navigate(CHAT_LIST)}
              style={styles.chatsbtn}
            >
              <Icon name="person" type="Fontisto" color="black" />
              Profile
            </Button>

            <Button
              type="Submit"
              // onPress={() => navigation.navigate(GROUP_LIST)}
              onPress={() => navigation.navigate(GROUP_LIST)}

              style={styles.chatsbtn}
            >
              <Icon name="groups" type="materialCommunityIcons" color="black" />
              Groups
            </Button>
          </View>
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
    width: 100,
    marginLeft: 61,
    marginTop: 40,
    backgroundColor: "#3f37c9",
    fontWeight: "bold",
    maxWidth:85
  },
});
export default Main;
