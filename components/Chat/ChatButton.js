import React from "react";
import { Center, Button } from "native-base";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";

import { CHAT_FORM } from "../Navigation/types";

const CartButton = () => {
    const navigation = useNavigation()

  return (
    <View>
      <Center>
      {/* <Icon
        raised
        name="chat"
        type="materialCommunityIcons"
        color="#f50"
        // size="1"
        onPress={() => navigation.navigate(CHAT_FORM)}
      /> */}
      <Button onPress={() => navigation.navigate(CHAT_FORM)}> ➕ New chat</Button>

      </Center>
    </View>
  );
};

export default CartButton;
