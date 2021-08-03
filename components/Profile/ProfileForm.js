import { Button, Input } from 'native-base';
import React, { useEffect, useState } from 'react'
import { Picker, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchProfiles, updateProfile } from '../../store/actions/profileActions';
import { PROFILE } from '../Navigation/types';

const ProfileForm = ({navigation}) => {
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
              <View style={{marginTop:200}}>
        <View style={{ maxWidth:300, backgroundColor:"#edf6f9", borderRadius:10, marginLeft:55}}>
    <Text>{"\n"}</Text>
         
       <Input
            autoCapitalize={false}
            onChangeText={(status)=>setProfile({..._profile, status})}
      w="80%"
      mx={4}
      placeholder="Your Status"
   
    />
    <Text>{"\n"}</Text>

    <Text style={{marginLeft:100, fontWeight:"bold"}}>Your Gender</Text>
        <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 120, marginLeft:88 }}
        onValueChange={(itemValue, itemIndex) =>
            setProfile({ ..._profile, itemValue })
          }
      >
        {/* <Picker.Item label="" value="" /> */}
        <Picker.Item label="male" value="male" />
        <Picker.Item label="female" value="female" />
      </Picker> 

      <Text>{"\n"}</Text>
     <Button
     style={{backgroundColor: "#3f37c9", width:100, marginLeft:100, marginBottom:10}}
        onPress={() =>
          dispatch(updateProfile(_profile,profile.id))&& navigation.navigate(PROFILE)
        }

      >
        Apply
      </Button>
    </View>
        </View>
        </SafeAreaView>
    )
}

export default ProfileForm

const styles = StyleSheet.create({})
