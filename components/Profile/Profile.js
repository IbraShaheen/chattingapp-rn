//Libraries
import { Center } from "native-base";
import React, { useEffect } from "react";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

//Components & functions
import { HOME, PORFILE_FORM } from "../Navigation/types";
import { signout } from "../../store/actions/authActions";
import { fetchProfiles } from "../../store/actions/profileActions";

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfiles());
  }, []);
  const user = useSelector((state) => state.user.user);
  const profiles = useSelector((state) => state.profiles.profiles);
  const profile = profiles.find((profile) => profile.userId == user.id);
  console.log(profile);
  return (
    <SafeAreaView>
      <Center>
        <View style={styles.info}>
          <Text style={styles.txt}>
            {" "}
            {user.username}
            {"\n"}
          </Text>
          <Text style={styles.txt}>
            {" "}
            {profile ? profile.gender : ""}
            {"\n"}
          </Text>
          <Text style={styles.txt}>
            {" "}
            {profile ? profile.status : ""}
            {"\n"}
          </Text>
        </View>
      </Center>

 
      <TouchableOpacity style={{ marginLeft: 10 }}>
        <Icon
          raised
          name="settings"
          type="Feather"
          color="#353656"
          onPress={() => navigation.navigate(PORFILE_FORM)}
        />
        <Text style={styles.subTxt1}> Edit {"\n"}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginLeft: 10 }}>
        <Icon
          raised
          name="logout"
          type="Feather"
          color="#353656"
          onPress={() => navigation.navigate(HOME) && dispatch(signout())}
        />
        <Text style={styles.subTxt2}> Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  txt: {
    color: "#353656",
    fontSize: 33,
  },
  subTxt1: {
    color: "white",
    fontSize: 17,
    marginLeft: 12,
  },
  subTxt2: {
    color: "white",
    fontSize: 17,
    marginLeft: 4,
  },
  info: {
    color: "white",
    fontSize: 17,
    marginLeft: 4,
    marginTop:20,
    marginBottom: 55,
    backgroundColor: "#edf6f9",
    width: 380,
    padding: 15,
    borderRadius: 10,
  },
});
