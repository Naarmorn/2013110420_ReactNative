import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Example_useEffect from './components/Example_useEffect'
import UseEffectFlatList from './components/UseEffectFlatList'

const App = () => {
  return (
    <View>
      {/* <Example_useEffect/> */}
      <UseEffectFlatList/>
    </View>
  )
}
export default App

const styles = StyleSheet.create({})