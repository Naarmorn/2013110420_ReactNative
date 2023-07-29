import { StyleSheet, Text, View, SafeAreaView, Alert, Button } from 'react-native'
import React from 'react'

const Separator = ()=> <View style={styles.separator}/>

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          The title and onPress handler are required. It is recommended to set
          accessibilityLabel to help make your app usable by everyone.
        </Text>
        <Button
         title='Press me'
         onPress={()=> alert('Simple Button Pressed')}
         color="black"
        />
      </View>
      <Separator/>

      <View>
        <Text style={styles.title}>
        Adjust the color in a way that looks standard on each platform. On iOS,
        the color prop controls the color of the text. On Android, the color
        adjusts the background color of the button.
        </Text>
        <Button
         title='Press me'
         onPress={()=> alert('Simple Button Pressed')}
         color="pink"
        />
      </View>
      <Separator/>

      <View>
        <Text style={styles.title}>
        All interaction for the component are disabled.
        </Text>
        <Button
         title='Press me'
         onPress={()=> alert('Simple Button Pressed')}
         color="black"
        />
        <Separator/>
        <Text style={styles.title}>This layout strategy lets the title define the width of the button.</Text>
        <View style={styles.fixToText}>
          <Button
           title="Left Button"
           onPress={()=>alert('Left Button Pressed')}
           color="green"
           />
           <Button
           title="Right Button"
           onPress={()=>alert('Right Button Pressed')}
           color={"yellow"}
           />
        </View>
      </View>
    </SafeAreaView>
    
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  title:{
    textAlign: 'center',
    marginHorizontal: 10,
  },
  fixToText:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});