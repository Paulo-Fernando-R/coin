import React, { useEffect, useState } from 'react'
import { StyleSheet, StatusBar, Text, View, SafeAreaView } from 'react-native';
import { Platform } from 'react-native-web';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './Main';
import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import * as WebBrowser from 'expo-web-browser';
const Tab = createBottomTabNavigator()
import Context from './context'
WebBrowser.maybeCompleteAuthSession();
import storage from './storage';
import {setItemAsync, getItemAsync} from 'expo-secure-store';
import * as Google from 'expo-auth-session/providers/google';

const MY_SECURE_AUTH_STATE_KEY = 'MySecureAuthStateKey';

function Login(){
  const [autenticado, setAutenticado] = useContext(Context);
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    webClientId: '320850868858-1773glg6pgs2qs72r4i6ae4cak3743aq.apps.googleusercontent.com',
  });


  useEffect(() => {
    if (response?.type === 'success') {
        const { authentication } = response;
        fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + authentication.accessToken,
                'Content-Type': 'application/json'
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((json) => {
              const str = {
                email: json.email, 
                nome: json.name,
                foto: json.picture
              };
              setAutenticado(str);
              setItemAsync(MY_SECURE_AUTH_STATE_KEY, JSON.stringify(str))
              .then(() => {
                alert('Armazenado');
              })
            })
           /* .then((json)=>{
                setAutenticado({
                    email: json.email,
                    nome: json.name
                });
            });*/
    }
}, [response]);

return (
    <View style={styles.main}>
        <Button
            title="Logar com Google"
            onPress={() => {
                promptAsync();
            }}
        />
    </View>

);
}

function Decide(){
  const [autenticado] = React.useContext(Context);
  if(!autenticado?.email)
    return <Main />
  else
    return <Main />
};


export default function App() {

 
  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen name="Home" component={Decide}/>
    </Tab.Navigator>
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
