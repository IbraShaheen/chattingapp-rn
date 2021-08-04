import React, { useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Center, Button } from "native-base";
import { CHAT_LIST, GROUP_LIST, PROFILE } from "../Navigation/types";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../store/actions/authActions";


const Main = ({ navigation }) => {

    const dispatch = useDispatch()

    useEffect(() => {

      dispatch(fetchUsers())

    }, [])

  return (
    <View style={styles.container}>
      <Center flex={1}>
        <ImageBackground
          style={styles.image}
          source={{
            uri:"https://i.pinimg.com/originals/0f/a8/d5/0fa8d5f32c5101a85351665b753ee7f0.jpg"
          }}
        >
         
          <View
            style={{
              marginTop: 60,
              display: "flex",
              flexDirection: "row",
              height: 100,
              marginLeft:54
            }}
          >
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
    // marginLeft: 61,
    marginHorizontal:5,

    marginTop: 40,
    // backgroundColor: "#3f37c9",
    backgroundColor:"#335c67",
    fontWeight: "bold",
    // maxWidth:85

    borderStyle:"solid",
    borderColor:"white",
    borderWidth:1,
    borderRadius:100
  },
});
export default Main;
