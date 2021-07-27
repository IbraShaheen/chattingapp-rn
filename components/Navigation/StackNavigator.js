//Libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Home from "../Home";
import Signup from "../Authentication/Signup";
import Signin from "../Authentication/Signin";
import { HOME, SIGN_IN, SIGN_UP } from "./types";



const StackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName={HOME}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#dc2f02",
        },
        headerTintColor: "white",

        cardStyle: {
          backgroundColor: "#023047",
        },
      }}
    >
      <Screen name={HOME} component={Home} options={{ headerShown: false }} />

      <Screen name={SIGN_UP} component={Signup} options={{ title: "Signup" }} />

      <Screen name={SIGN_IN} component={Signin} options={{ title: "Signin" }} />
    </Navigator>
  );
};

export default StackNavigator;
