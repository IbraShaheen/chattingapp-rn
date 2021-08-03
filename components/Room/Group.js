import {  Input, ScrollView } from 'native-base'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { createMessage, fetchMessages } from '../../store/actions/msgActions'
import io from "socket.io-client";
import { Icon } from "react-native-elements";


const Group = ({route}) => {
    console.log(route)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMessages())
    }, [])

    const [text, setText] = useState("");
    const [state,setState]=useState("");
    const [socket, setSocket] = useState(null);
    const messages = useSelector((state) => state.messages.messages);
    const rooms = useSelector((state) => state.rooms.rooms);
    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        setSocket(io("http://192.168.8.133:8080"));
    
      }, []);

      const handleSubmit = () => {
        setText(`${user.username} : ${state}`);
      };
    
 useEffect(() => {
    if (socket) {
      socket.off("message");
      socket.on("message", ({ message }) => {
          console.log(message)
        dispatch(createMessage(message));
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket && text !== null) {
      socket.emit("message", {
        senderId: user.id,

        image: "",
        text: text,
        roomId: route.params.certainRoom.roomId,
      });
    }
  }, [text]);
  const _messages = messages.filter((msg) => msg.roomId === route.params.certainRoom.roomId);

    return (
        <SafeAreaView style={styles.room}>
        <View>
        <ScrollView>
            <Text>{_messages?_messages.map((message)=> <Text>{message.text}</Text>):""}</Text>
            <View>
          <Input
            autoCapitalize={false}
            
            onChangeText={(state)=>setState(state)}
            w="80%"
            mx={4}
            placeholder="type a message"
          />
          <TouchableOpacity>
            <Icon
              raised
              name="send"
              type="Ionicons"
              color="#f50"
              // size="1"
              onPress={handleSubmit}
            />
          </TouchableOpacity>
        </View>
        </ScrollView>
        </View>
        </SafeAreaView>
    )
}

export default Group

const styles = StyleSheet.create({
    room: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height:"100%",
        backgroundColor: "#edf2f4",
        padding: 20,
      },
})
