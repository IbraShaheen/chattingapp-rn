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
        setState("")
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
        roomId: route.params.certainRoom.roomId,
        // text: text,
        text: ` ${user.username} |  ${new Date(Date.now())
          .toString()
          .substr(0, 21)}  : \n\n\n ${text}`,
      });
    }
  }, [text]);
  const _messages = messages.filter((msg) => msg.roomId === route.params.certainRoom.roomId);

    return (
      <SafeAreaView style={styles.room}>
      <View>
        <ScrollView style={{width:400}}>



          {/* <View style={{ backgroundColor:"#ced4da", width:"90%"}}> */}

{_messages
            ? _messages.map((message) => (
                <>
                  {user.id === message.senderId ? (
                    <>
                      <Text style={styles.sender}>{message.text}</Text>
                    </>
                  ) : (
                    <Text style={styles.recever}>{message.text} </Text>
                  )}
                </>
              ))
            : <Text>""</Text> }


 {/* </View> */}
 </ScrollView>
 <View>
       <Text style={{color:"black" }}>{"ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ"}</Text>
          <Input
          style={{marginLeft:80, width:250 }}
            autoCapitalize={false}
            onChangeText={(state)=>setState(state)}
            w="80%"
            mx={4}
            placeholder="type a message"
            value={state}
          />
          <TouchableOpacity style={{ marginLeft:165, marginTop:1}}>
            <Icon
              raised
              name="send"
              type="Ionicons"
              color="darkblue"
              // size="1"
              onPress={handleSubmit}
            />
          </TouchableOpacity>
          </View>
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
      sender:{
        fontSize:18,
          color:"black",
          backgroundColor:"#0f57078e",
          width:180,
          marginLeft:10,
          padding:15,
          marginVertical:10,
          borderRadius:12,
          textShadowColor:"rgba(0, 60, 255, 0.849)",
    
      },
      recever:{
        fontSize:18,
        color:"white",
        backgroundColor:"hsla(180, 70%, 4%, 0.425)",
        width:180,
        marginLeft:190,
        padding:15,
        marginVertical:10,
        borderRadius:12,
        textShadowColor:"rgba(0, 60, 255, 0.849)",
      }
})










/*

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

*/