import { Center } from 'native-base';
import React from 'react'
import { StyleSheet,Button, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { GROUP_FORM } from '../Navigation/types';
//components
import GroupItem from './GroupItem';

const GroupList = ({navigation}) => {
   
    const rooms = useSelector((state) => state.rooms.rooms);
    const groupList = rooms
    .filter((room) => room.usersId.length > 2)
    .map((_room) => <GroupItem _room={_room} key={_room.id} />);

    console.log(groupList)


    return (
        <SafeAreaView>
<Center>
        <View style={styles.card}>
            <Text>{groupList}</Text>
                        
                {/* <Button title="new group" onPress={() => navigation.replace(GROUP_FORM)} /> */}
        </View>
        </Center>
        </SafeAreaView>
    )
}

export default GroupList

const styles = StyleSheet.create({
    card: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      flexWrap: "wrap",
      width: "100%",
      // backgroundColor: "#2a9d8f",
      padding: 20,
    },
  });

  // to reset the form :
  //<Button title="new group" onPress={() => navigation.replace(GROUP_FORM)} />

