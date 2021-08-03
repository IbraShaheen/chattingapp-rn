import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfiles } from '../../store/actions/profileActions';
import { Icon } from "react-native-elements";
import { PORFILE_FORM } from '../Navigation/types';
const Profile = ({navigation}) => {
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(fetchProfiles())
    }, [])
    const user = useSelector((state) => state.user.user);
    const profiles = useSelector((state) => state.profiles.profiles);
    const profile = profiles.find((profile) => profile.userId == user.id);
console.log(profile)
    return (
        <View>
         <TouchableOpacity>
            <Icon
              raised
              name="settings"
              type="Feather"
              color="#f50"
              // size="1"
              onPress={()=>navigation.navigate(PORFILE_FORM)}
            />
          </TouchableOpacity>
            <Text>{user.username}</Text>
            <Text>{profile ? profile.gender : ""}</Text>
            <Text>{profile ? profile.status : ""}</Text>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})
