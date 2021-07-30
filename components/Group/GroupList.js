import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
//components
import GroupItem from './GroupItem';

const GroupList = () => {
   
    const rooms = useSelector((state) => state.rooms.rooms);
    const groupList = rooms
    .filter((room) => room.usersId.length > 2)
    .map((_room) => <GroupItem _room={_room} key={_room.id} />);

    console.log(groupList)


    return (
        <SafeAreaView>

        <View>
            <Text>{groupList}</Text>
        </View>
        </SafeAreaView>
    )
}

export default GroupList

const styles = StyleSheet.create({})
