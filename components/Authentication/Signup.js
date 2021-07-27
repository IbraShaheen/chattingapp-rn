import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Center, Input } from "native-base";
import { signup } from "../../store/actions/authActions";
import { useDispatch } from "react-redux";
import { SIGN_IN } from "../Navigation/types";

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    dispatch(signup(user, navigation));
  };

  return (
    <View style={styles.mainVeiw}>
      <Input
        style={styles.inputs}
        color="white"
        autoCapitalize="none"
        onChangeText={(username) => setUser({ ...user, username })}
        w="80%"
        mx={4}
        placeholder="username"
        isRequired={true}
      />
      <Input
        style={styles.inputs}
        color="white"
        secureTextEntry={true}
        autoCapitalize="none"
        onChangeText={(password) => setUser({ ...user, password })}
        w="80%"
        mx={4}
        placeholder="password"
        isRequired={true}
      />
      <Input
        style={styles.inputs}
        color="white"
        autoCapitalize="none"
        onChangeText={(email) => setUser({ ...user, email })}
        w="80%"
        mx={4}
        placeholder="email"
        isRequired={true}
      />
      <Input
        style={styles.inputs}
        color="white"
        autoCapitalize="none"
        onChangeText={(fullname) => setUser({ ...user, fullname })}
        w="80%"
        mx={4}
        placeholder="enter your fullname"
        isRequired={true}
      />

      <Center>
        <Button
          onPress={handleSubmit}
          style={{ width: 100, marginTop: 10, backgroundColor: "#dc2f02" }}
        >
          Regist
        </Button>

        <Center>
          <Text style={styles.regText}>Already have an account ?</Text>
          <Text
            onPress={() => navigation.navigate(SIGN_IN)}
            style={styles.signinbtn}
          >
            Signin here
          </Text>
        </Center>
      </Center>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  mainVeiw: {
    marginTop: 100,
    padding: 35,
    alignItems: "center",
    justifyContent: "center",
  },

  inputs: {
    margin: 5,
    fontSize: 20,
  },
  
  signinbtn:{
    width: 300, marginTop:25, textAlign:"center", color:"white", fontSize:17, textDecorationLine:"underline", textDecorationColor:"#dc2f02"
  },
  regText:{ width: 300, marginTop:25, textAlign:"center", color:"white", fontSize:17 },
  inputs: {
    margin: 5,
    fontSize: 20,
  }
});

