import { Button, Input } from 'native-base';
import React, { useEffect, useState } from 'react'
import { Picker, StyleSheet, Text, View } from 'react-native'
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
        <View>
              <View style={{marginTop:200}}>
         
       <Input
            
            autoCapitalize={false}
            onChangeText={(status)=>setProfile({..._profile, status})}
      w="80%"
      mx={4}
      placeholder="Your Status"
   
    />
        <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) =>
            setProfile({ ..._profile, itemValue })
          }
      >
        <Picker.Item label="male" value="male" />
        <Picker.Item label="female" value="female" />
      </Picker>
      
       {/* <Input
           
           autoCapitalize={false}
           onChangeText={(username)=>setUser({...user, username})}
     w="80%"
     mx={4}
     placeholder="enter username"
  
   /> */}
     <Button
        onPress={() =>
          dispatch(updateProfile(_profile,profile.id))&& navigation.navigate(PROFILE)
        }
        style={styles.signin}
      >
        apply
      </Button>
    </View>
        </View>
    )
}

export default ProfileForm

const styles = StyleSheet.create({})
