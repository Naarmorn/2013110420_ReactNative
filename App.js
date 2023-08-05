import { StyleSheet, Text, View } from 'react-native';
import  ViewBoxesWithColorAndText from './components/ViewBoxesWithColorAndText';
import DisplayandImage from './components/DisplayandImage';
import LotsOfGreeting from './components/LotsOfGreeting';
import Customtext from './components/Customtext';
import Counter from './components/Counter';
import Myinput from './components/Myinput';
import IncrementCounter from './components/IncrementCounter';
import Form from './components/Form';
import Login from './components/Login';
import DefineStyle from './components/DefineStyle';
import Recap from './components/Recap';
import TouchablePractice from './components/TouchablePractice';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<ViewBoxesWithColorAndText/>*/}
      {/*<DisplayandImage/>*/}
      {/*<LotsOfGreeting/>*/}
      {/*<Customtext/>*/}
      {/* <Counter/> */}
      {/* <Myinput/> */}
      {/* <IncrementCounter/> */}
      {/* <Form/> */}
      {/* <Login/> */}
      {/* <DefineStyle/> */}
      {/* <Recap/> */}
      {TouchablePractice}

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


