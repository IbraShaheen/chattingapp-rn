//Libraries
import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { Button, Center } from "native-base";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";

//Components
import { signin } from "../../store/actions/authActions";
import { SIGN_UP } from "../Navigation/types";




const Signin = ({ navigation }) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => dispatch(signin(data, navigation));

  return (
    <Center>
      <View>
        <View style={{ marginTop: 150 }}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                id="username"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Username"
                placeholderTextColor="#eee"
                color="white"
              />
            )}
            name="username"
            defaultValue=""
          />
          {errors.username && (
            <Text style={{ color: "red" }}>username is required</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                id="password"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Password"
                placeholderTextColor="#eee"
                color="white"
              />
            )}
            name="password"
            defaultValue=""
          />
          {errors.password && (
            <Text style={{ color: "red" }}>password is required</Text>
          )}

          {/* <Button  style={{color:"red"}} type="Submit" title="Submit" onPress={handleSubmit(onSubmit)} /> */}

          <Button
            type="Submit"
            onPress={handleSubmit(onSubmit)}
            style={styles.inbtn}
          >
            Signin
          </Button>

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
      </View>
    </Center>
  );
};

export default Signin;

const styles = StyleSheet.create({
  btn: {
    width: 300,
    marginTop: 25,
    textAlign: "center",
    color: "white",
    fontSize: 17,
    textDecorationLine: "underline",
    textDecorationColor: "#dc2f02",
  },
  regText: {
    width: 300,
    marginTop: 25,
    textAlign: "center",
    color: "white",
    fontSize: 17,
  },
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
  signupbtn: {
    width: 300,
    marginTop: 25,
    textAlign: "center",
    fontSize: 17,
    textDecorationLine: "underline",
    textDecorationColor: "#dc2f02",
    color: "white",
  },
  inbtn: {
    width: 100,
    marginLeft: 100,
    marginTop: 50,
    backgroundColor: "#dc2f02",
    fontWeight: "bold",
  },
});
