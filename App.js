import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Example_useEffect from './components/Example_useEffect'
import UseEffectFlatList from './components/UseEffectFlatList'
import RandomUsersScreen from './components/RandomUsersScreen'

const App = () => {
  return (
    <View>
      {/* <Example_useEffect/> */}
      {/* <UseEffectFlatList/> */}
      <RandomUsersScreen/>
    </View>
  )
}
export default App

const styles = StyleSheet.create({})