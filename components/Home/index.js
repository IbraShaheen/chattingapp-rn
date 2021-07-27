import { StatusBar } from "expo-status-bar";
import { Center, Button } from "native-base";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { SIGN_IN, SIGN_UP } from "../Navigation/types";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Center flex={1}>
        <ImageBackground
          style={styles.image}
          source={{
            uri: "https://www.kolpaper.com/wp-content/uploads/2021/02/whatsapp-wallpaper-12.png",
          }}
        >
          <Text
            style={styles.mainText}
          >
            Welcome To The Light Speed Chat
          </Text>

          <StatusBar style="auto" />
          <Button
            onPress={() => navigation.navigate(SIGN_UP)}
            style={styles.signup}
          >
            Signup
          </Button>
          <Text style={styles.txt}> or </Text>
          <Button
            onPress={() => navigation.navigate(SIGN_IN)}
            style={styles.signin}
          >
            Signin
          </Button>
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
    // backgroundColor: "transparent"
    // headerTransparent:true
  },
  image: {
    width: 500,
    height: 800,
  },
  mainText:{
    fontSize: 40,
    color: "white",
    marginTop: 165,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "serif",
    letterSpacing: 3
  },
  signin: {
    width: 100,
    marginLeft: 200,
    marginTop: 50,
     backgroundColor: "#dc2f02",
     fontWeight:"bold"
  },
  signup: {
    width: 100,
    marginLeft: 200,
    marginTop: 100,
    backgroundColor: "#dc2f02",
    fontWeight:"bold"
  },
  txt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
    marginTop: 50,
  },
});

export default Home;
