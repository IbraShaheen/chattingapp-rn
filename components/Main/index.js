import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Center } from "native-base";

const Main = () => {
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
});
export default Main;
