//Libraries
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Center, Button } from "native-base";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

//Components & functions
import { SIGN_IN, SIGN_UP } from "../Navigation/types";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Center flex={1}>
        <ImageBackground
          style={styles.image}
          source={{
            uri: "https://i.pinimg.com/originals/99/56/0a/99560aa62aa2bc656c1189917f64b044.jpg",
          }}
        >
          <Text style={styles.mainText}>Welcome To The Light Speed Chat</Text>

          <StatusBar style="auto" />

          <Button
            onPress={() => navigation.navigate(SIGN_IN)}
            style={styles.signin}
          >
            Signin
          </Button>

          <Text style={styles.txt}>Already have an account?</Text>

          <Button
            onPress={() => navigation.navigate(SIGN_UP)}
            style={styles.signup}
          >
            Signup
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
  signin: {
    width: 120,
    marginHorizontal:"auto",
    marginTop: 120,
    backgroundColor: "darkcyan",
    fontWeight: "bold",
  },
  signup: {
    width: 120,
    marginHorizontal:"auto",
    marginTop: 20,
    backgroundColor: "darkcyan",
    fontWeight: "bold",
  },
  txt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginTop: 40,
  },
});

export default Home;
