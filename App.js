// Libraries
import React from "react";
import { Provider } from "react-redux";
import { StyleSheet} from "react-native";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

// Components
import StackNavigator from "./components/Navigation/StackNavigator";
import store from "./store/reducers/";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>

        <NavigationContainer>

          <StackNavigator />

        </NavigationContainer>

        <StatusBar style="auto" />
      </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
