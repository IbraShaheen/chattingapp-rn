//Libraries
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Center, Input } from "native-base";
import { useDispatch } from "react-redux";

//Components
import { signin } from "../../store/actions/authActions";
import { SIGN_UP } from "../Navigation/types";



const Signin = ({ navigation }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = () => {
    dispatch(signin(user, navigation));
  };
  return (

    <View style={styles.mainVeiw}>
      <Input
      style={styles.inputs}
        autoCapitalize="none"
        color="white"
        onChangeText={(username) => setUser({ ...user, username })}
        w="80%"
        mx={4}
        placeholder="enter username"
        isRequired={true}
      />
      <Input
      style={styles.inputs}
        secureTextEntry={true}
        autoCapitalize="none"
        color="white"
        onChangeText={(password) => setUser({ ...user, password })}
        w="80%"
        mx={4}
        placeholder="enter password"
        isRequired={true}
      />
      <Center>

        <Button onPress={handleSubmit} style={{ width: 100, marginTop: 10, backgroundColor: "#dc2f02"}}>
          Sign in
        </Button>
      </Center>

      <Center>


        <Text style={styles.regText}>Don't have an account ?</Text>
        <Text
          onPress={() => navigation.navigate(SIGN_UP)}
          style={styles.signupbtn}
        >
          Signup here
        </Text>
      </Center>
    </View>

  );
};

export default Signin;

const styles = StyleSheet.create({
  signupbtn:{
    width: 300, marginTop:25, textAlign:"center", color:"white", fontSize:17, textDecorationLine:"underline", textDecorationColor:"#dc2f02"
  },
  regText:{ width: 300, marginTop:25, textAlign:"center", color:"white", fontSize:17 },
  inputs: {
    margin: 5,
    fontSize: 20,
  },
  mainVeiw: {
    marginTop: 150,
    padding: 35,
    alignItems: "center",
    justifyContent: "center",
  },
});