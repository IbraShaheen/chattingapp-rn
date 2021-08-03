import React from "react";
import { Center, Button, Text } from "native-base";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";

import { GROUP_FORM } from "../Navigation/types";

const GroupButton = () => {
    const navigation = useNavigation()

  return (
    <View>
      <Center>
      <Button style={styles.btnG}
      onPress={() => navigation.navigate(GROUP_FORM)}> ➕ New group</Button>

      </Center>
    </View>
  );
};

export default GroupButton;

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