import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, StatusBar, Text, View, SafeAreaView } from 'react-native';
import { Platform } from 'react-native-web';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './Main';
import Sobre from './Sobre';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './Start';
import Help from './help';
import History from './history';
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();

function Bottom({navigation}) {
  return(
   
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle:{
          backgroundColor:'black'
        }
      }}
      
    >
      <Tab.Screen name="Home" component={Main}
        options = {{
          tabBarIcon: () => (<Image source={require("./src/img/home.png")} style={{width: 20, height: 20}}/>)
        }}
      />
      <Tab.Screen name="Sobre" component={Sobre}
       options = {{
        tabBarIcon: () => (<Image source={require("./src/img/info.png")} style={{width: 20, height: 20}}/>)
      }}
      />
      <Tab.Screen name="Ajuda" component={Help}
       options = {{
        tabBarIcon: () => (<Image source={require("./src/img/help.png")} style={{width: 20, height: 20}}/>)
      }}
      />
      <Tab.Screen name="História" component={History}
       options = {{
        tabBarIcon: () => (<Image source={require("./src/img/history.png")} style={{width: 20, height: 20}}/>)
      }}
      />

    </Tab.Navigator>
  
  )
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Start' component={Start}/>
        <Stack.Screen name='Tabs' component={Bottom}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40: 0
  },
});
