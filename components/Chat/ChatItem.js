import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Center, FlatList } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native-svg"; //Remove unused import
import { border, margin } from "styled-system"; //Remove unused import
import { Icon } from "react-native-elements/dist/icons/Icon";

const ChatItem = ({ _room }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <FlatList> */}
        <Center>
          <View style={styles.card}>
            {/* <Image style={{width:10,height:10}} source={{uri:"https://images-ext-2.discordapp.net/external/AI57JsmK1EEPi8KUukWW6xsP-5cbehDxFOiatyDTFpE/https/pngimage.net/wp-content/uploads/2018/06/telemarketing-icon-png-4.png"}} /> */}

            <Icon name="v-card" type="entypo" color="black" />
            {/* 
            for GroupItem    
          <Icon name="groups" type="FontAwesome" color="black" /> */}

            <Text>{_room.username}</Text>
          </View>
          {/* <Text>{"\n"}</Text> */}
        </Center>
        {/* </FlatList> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    width: 200,
    backgroundColor: "#8ecae6",
    padding: 20,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 17,
    // margin:60
    marginRight: 10,
    marginLeft: 75,
    marginVertical: 4,
    // marginBottom:3,
    // marginTop:3,
    fontWeight: "bold",
  },
});
