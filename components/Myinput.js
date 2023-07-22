import { StyleSheet, Text, View, TextInput, Button} from 'react-native'
import React, { useState } from 'react'

const Myinput = () => {

    const [text, setText] = useState('');
    
  return (
    <View style={styles.container}>
        <TextInput
         placeholder='Enter Text'
         style = {styles.TextInputStyle}
         value= {text}
         onChangeText={() => { setText(value)}}
        />
        <Text>{'\n\n'} You typed: {text}</Text>
        <Text>{'\n\n'}</Text>
        <Button
         title='Reset'
         onPress={()=>setText('Hello')}
         />
    </View>
  )
}

export default Myinput

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
    }
})