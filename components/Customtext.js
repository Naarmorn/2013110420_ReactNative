import { View, Text } from 'react-native'
import React from 'react'

const MyCustomtextWith = ({fName1, lname1}) => {
  return (
    <View>
        <Text>Your First name is {fName1} and Last name is {lname1}</Text>
    </View>
  )
}

const Customtext =() =>{
    return(
        <View>
            <MyCustomtextWith fName1="Naarmorn" lname1="Supapsoontorn"/>
            <MyCustomtextWith fName1="Kanlayanuch" lname1="Srichote"/>
        </View>
    )
}


export default Customtext