import { StyleSheet, Text, View } from 'react-native';
import  ViewBoxesWithColorAndText from './components/ViewBoxesWithColorAndText';
import DisplayandImage from './components/DisplayandImage';
import LotsOfGreeting from './components/LotsOfGreeting';
import Customtext from './components/Customtext';

export default function App() {
  return (
    <View>
      {/*<ViewBoxesWithColorAndText/>*/}
      {/*<DisplayandImage/>*/}
      {/*<LotsOfGreeting/>*/}
      <Customtext/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
     flex:1,   
     justifyContent:'center',    
     alignItems:'center'   
  }
 })


