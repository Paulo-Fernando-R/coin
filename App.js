import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {Camera} from 'expo-camera'
//import { useState } from 'react/cjs/react.production.min';
export default function App() {

  const [type, setType] = useState(Camera.Constants.Type.back)
  const [hasPermission, setHasPermission] = useState(null)

  useEffect(() =>{
    (async() => {
      const { status } = await Camera.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })
  }, [])

  if(hasPermission === null){
    return<View/>
  }

  if(hasPermission === false){
    return <Text>Acesso negado</Text>
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera
      style={styles.camera}
      type={type}
      >

      </Camera>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
  },
  camera:{
    width:'100%',
    height:'100%'
  }
});
