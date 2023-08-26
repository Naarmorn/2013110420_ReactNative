import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Example_useEffect from './components/Example_useEffect'
import UseEffectFlatList from './components/UseEffectFlatList'
import RandomUsersScreen from './components/RandomUsersScreen'
import FlatList_Example1 from './components/FlatList_Example1'
import FlatList_HeaderFooter from './components/FlatList_HeaderFooter'
import FlatListAPI from './components/FlatListAPI'
import News from './components/News'
const App = () => {
  return (
    <View>
      {/* <Example_useEffect/> */}
      {/* <UseEffectFlatList/> */}
      {/* <RandomUsersScreen/> */}
      {/* <FlatList_Example1/> */}
      {/* <FlatList_HeaderFooter/> */}
      {/* <FlatListAPI/> */}
      <News/>
    </View>
  )
}
export default App

const styles = StyleSheet.create({})