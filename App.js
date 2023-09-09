import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from './components/pages/FirstPage';
import SecondPage from './components/pages/SecondPage';


const Stack = createNativeStackNavigator();

function FirstSceenStack(){
  return(
    <Stack.Navigator 
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#ffb6c1",
      },
      headerTintColor: "#ffff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}>
      <Stack.Screen name='FirstPage' component={FirstPage} options={{title: 'First Page'}}/>
    </Stack.Navigator>
  );
}

function SecondSceenStack(){
  return(
    <Stack.Navigator
    initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ffb6c1",
          },
          headerTintColor: "#ffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}>
      <Stack.Screen name='SecondPage' component={SecondPage} options={{title: 'Second Page'}}/>
    </Stack.Navigator>
  );
}


const Drawer = createDrawerNavigator();

function MyDrawer(){
  return(
    <Drawer.Navigator screenOptions={{
      drawerStyle:{
        backgroundColor: '#ffb6c1',
        width:240,
      },
    }}>
    <Drawer.Screen name='FirstDrawer' component={FirstSceenStack}/>
    <Drawer.Screen name='SecondDrawer' component={SecondSceenStack}/>
    </Drawer.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  )
}

export default App