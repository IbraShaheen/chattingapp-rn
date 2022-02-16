//Libraries
import React from "react";
import { Center, Button } from "native-base";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

//Components & functions
import { GROUP_FORM } from "../Navigation/types";

const GroupButton = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Center>
        <Button
          style={styles.btnG}
          onPress={() => navigation.navigate(GROUP_FORM)}
        >
          ➕ New group
        </Button>
      </Center>
    </View>
  );
};

export default GroupButton;

const styles = StyleSheet.create({
  btnG: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
    marginRight: 15,
    backgroundColor: "gray",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 1,
    height: 45,
  },
});
