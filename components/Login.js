import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState }  from 'react'

const Login = () => {
    const [textInputName, setTextInputName] = useState('');
    const [textInputEmail, setTextInputEmail] = useState('');

    const checkTextInput = () =>{

        if(!textInputName.trim()){
            alert('Please Enter Name');
            return;
        }
        if(!textInputEmail.trim()){
            alert('Please Enter Email');
            return;
        }
        else{
            alert('Succes')
        }
    }
  return (
    <View style={styles.container}>
       <TextInput
         placeholder='Enter Name'
         style = {styles.TextInputStyle}
         value= {textInputName}
         onChangeText={(value) => { setTextInputName(value)}}
        />
        <TextInput
         placeholder='Enter Email'
         style = {styles.TextInputStyle}
         value= {textInputEmail}
         onChangeText={(value) => { setTextInputEmail(value)}}
        />
        <Text>{'\n\n'}</Text>
         <Button
         title='submit'
         onPress={checkTextInput}
         />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    TextInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
    },
});