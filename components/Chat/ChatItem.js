import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const ChatItem = ({_room}) => {
    return (
        <View >
           
        <View >
            {/* <Image style={{width:120,height:120}} source={{uri:"https://images-ext-2.discordapp.net/external/AI57JsmK1EEPi8KUukWW6xsP-5cbehDxFOiatyDTFpE/https/pngimage.net/wp-content/uploads/2018/06/telemarketing-icon-png-4.png"}} /> */}
            <Text>{_room.username}</Text>
           
        </View>
        <Text>{"\n"}</Text>
        </View>
    )
}

export default ChatItem

const styles = StyleSheet.create({
    card:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        flexWrap:"wrap",
        width:"100%",
        backgroundColor:"#2a9d8f",
        padding:20
    }
})
