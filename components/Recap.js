import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, {useState} from 'react'

const Recap = () => {

    const[textInputEmail,settextInputEmail]=useState('');
    const[textInputPassword,setTextInputPassword]=useState('');

    const alertTextInput =()=>{
        alert(
            'Email: ' +textInputEmail+ '\nPassword: ' +textInputPassword
        )
    }


  return (
    <View style={styles.container}>
      <TextInput
       placeholder='Email'
       style = {styles.input}
       value={textInputEmail}
       onChangeText={(value)=> {settextInputEmail(value)}}
      />

    <TextInput
       placeholder='Password'
       style = {styles.input}
       value={textInputPassword}
       onChangeText={(value)=> {setTextInputPassword(value)}}
      />

    <Text>{'\n\n'}</Text>
         <Button
         title='submit'
         style={styles.submitButton}
         onPress={()=>{{alertTextInput()}}

         }
         />
    </View>
  )
}

export default Recap

const styles = StyleSheet.create({
    container:{
        paddingTop: 23
    },
    input:{
        margin: 15,
        height: 40,
        borderColor: '#7q42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7q42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
})