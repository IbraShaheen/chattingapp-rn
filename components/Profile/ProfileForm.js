//Libraries
import React, { useState } from "react";
import { Button, Input } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { Picker, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//Components & functions
import { PROFILE } from "../Navigation/types";
import { updateProfile } from "../../store/actions/profileActions";


const ProfileForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const profiles = useSelector((state) => state.profiles.profiles);
  const profile = profiles.find((profile) => profile.userId == user.id);

  const [selectedValue, setSelectedValue] = useState("");
  const [_profile, setProfile] = useState({
    image: "",
    status: "",
    gender: "male",
  });

  return (
    <SafeAreaView>
      <View style={{ marginTop: 200 }}>
        <View
          style={styles.mainView}
        >
          <Text>{"\n"}</Text>

          <Input
            autoCapitalize={false}
            onChangeText={(status) => setProfile({ ..._profile, status })}
            w="80%"
            mx={4}
            placeholder="Your Status"
          />
          <Text>{"\n"}</Text>

          <Text style={{ marginLeft: 100, fontWeight: "bold" }}>
            Your Gender
          </Text>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 120, marginLeft: 88 }}
            onValueChange={(itemValue, itemIndex) =>
              setProfile({ ..._profile, itemValue })
            }
          >
            <Picker.Item label="male" value="male" />
            <Picker.Item label="female" value="female" />
          </Picker>

          <Text>{"\n"}</Text>
          <Button
            style={styles.applyBtn}
            onPress={() =>
              dispatch(updateProfile(_profile, profile.id)) &&
              navigation.navigate(PROFILE)
            }
          >
            Apply
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileForm;

const styles = StyleSheet.create({
mainView:{
  maxWidth: 300,
  backgroundColor: "#edf6f9",
  borderRadius: 10,
  marginLeft: 55,
},
applyBtn:{
  backgroundColor: "darkcyan",
  width: 120,
  marginHorizontal:"auto",
  marginBottom: 10,
}

});