import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Room = () => {

    return (
        <SafeAreaView style={styles.room}>
        <View >
            <Text> ROOM TEST</Text>
        </View>
        </SafeAreaView>
    )
}

export default Room

const styles = StyleSheet.create({
    room: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height:"100%",
      backgroundColor: "#edf2f4",
      padding: 20,
    },
  });