import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { SafeAreaView, TouchableOpacity ,Image} from 'react-native-web'

const TouchablePractice = () => {
  return (
    <SafeAreaView >
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonFacebookStyle}>
                <Image 
                style={styles.buttonImageIconDtyle}
                source={require("../assets/facebook.png")}/>
                <View style={styles.buttonImageIconSeparatorStyle}/>
                <Text style={styles.buttonTextStyle}>Login Using Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonGPlusStyle}>
                <Image style={styles.buttonImageIconDtyle}
                source={require("../assets/google-plus.png")}/>
                <View style={styles.buttonImageIconSeparatorStyle}/>
                <Text style={styles.buttonTextStyle}>Login Using Google Plus</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default TouchablePractice

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 10,
        marginTop: 30,
        padding: 30,
    },
    buttonGPlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonFacebookStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#485a96',
      borderWidth: 0.5,
      borderColor: '#fff',
      height: 40,
      borderRadius: 5,
      margin: 5,
    },
    buttonImageIconDtyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode: 'stretch',
    },
    buttonTextStyle: {
      color: '#fff',
      marginButtom: 4,
      marginLeft: 10,
    },
    buttonImageIconSeparatorStyle: {
     backgroundColor: '#fff',
     width: 1,
     height: 40,
    },
});