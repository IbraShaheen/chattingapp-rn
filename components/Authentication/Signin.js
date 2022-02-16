//Libraries
import React from "react";
import { useDispatch } from "react-redux";
import { Button, Center } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { Text, View, TextInput, StyleSheet } from "react-native";

//Components & functions
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
            render={({ field: { onChange, onBlur } }) => (
              <TextInput
                id="username"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Username"
                placeholderTextColor="white"
                color="white"
              />
            )}
            name="username"
            defaultValue=""
          />
          {errors.username && (
            <Text style={styles.redTxt}>username is required</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur } }) => (
              <TextInput
                id="password"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Password"
                placeholderTextColor="white"
                color="white"
              />
            )}
            name="password"
            defaultValue=""
          />
          {errors.password && (
            <Text style={styles.redTxt}>password is required</Text>
          )}

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

  regText: {
    width: 300,
    marginTop: 50,
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
    textDecorationColor: "darkcyan",
    color: "white",
  },
  inbtn: {
    width: 120,
    marginLeft: 90,
    marginTop: 55,
    backgroundColor: "darkcyan",
    fontWeight: "bold",
  },
  redTxt: { color: "darkorange" },
});
