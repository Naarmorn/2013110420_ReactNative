import { View, Text } from 'react-native'
import React from 'react'

const Greeting = (props)=>{
    return(
        <View>
            <text>Hello {props.name}</text>
        </View>
    )
}

const LotsOfGreeting = () => {
  return (
    <View style={{alignItems:'center',top:50}}>
        <Greeting name="Marry Chrismas"/>
        <Greeting name="Happy New Year"/>
        <Greeting name="Songharn Festival"/>
    </View>
  )
}

export default LotsOfGreeting