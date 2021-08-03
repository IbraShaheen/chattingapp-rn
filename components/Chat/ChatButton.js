import React from "react";
import { Center, Button } from "native-base";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";

import { CHAT_FORM } from "../Navigation/types";

const CartButton = () => {
    const navigation = useNavigation()

  return (
    <View>
      <Center>
      <Button style={styles.btnG}
       onPress={() => navigation.navigate(CHAT_FORM)}> ➕ New chat</Button>

      </Center>
    </View>
  );
};

export default CartButton;

const styles = StyleSheet.create({

  btnG:{
    color:"black",
    fontWeight: "bold",
    fontSize:30,
    marginRight:15,
    backgroundColor:"gray",
    borderStyle:"solid",
    borderColor:"white",
    borderWidth:1
  }
});