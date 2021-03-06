// Libraries
import React from "react";
import { useDispatch } from "react-redux";
import { Center, Button } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { Text, View, TextInput, StyleSheet } from "react-native";

//Components & functions
import { SIGN_IN } from "../Navigation/types";
import { signup } from "../../store/actions/authActions";

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => dispatch(signup(data, navigation));
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
                id="fullname"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Fullname"
                placeholderTextColor="#eee"
                color="white"
              />
            )}
            name="fullname"
            defaultValue=""
          />
          {errors.fullname && (
            <Text style={styles.redTxt}>fullname is required</Text>
          )}

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
                placeholderTextColor="#eee"
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
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Not an email format",
              },
            }}
            render={({ field: { onChange, onBlur } }) => (
              <TextInput
                id="email"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Email"
                placeholderTextColor="#eee"
                color="white"
              />
            )}
            name="email"
            defaultValue=""
          />
          {errors.email && <Text style={styles.redTxt}>email is required</Text>}
          {errors.email && (
            <Text style={styles.redTxt} role="alert">
              {errors.email.message}
            </Text>
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
                placeholderTextColor="#eee"
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
            Register
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
        </View>
      </View>
    </Center>
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

  signinbtn: {
    width: 300,
    marginTop: 25,
    textAlign: "center",
    fontSize: 17,
    textDecorationLine: "underline",
    textDecorationColor: "darkcyan",
    color: "white",
  },
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
  inbtn: {
    width: 120,
    marginLeft: 90,
    marginTop: 55,
    backgroundColor: "darkcyan",
    fontWeight: "bold",
  },
  redTxt: { color: "darkorange" },
});
