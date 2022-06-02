import React, { useEffect, useState } from 'react'
import { StyleSheet, StatusBar, Text, View, SafeAreaView } from 'react-native';

export default function(){
    return(
        <>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.text1}>Sobre</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.text2}>
                        Este aplicativo foi desenvolvido
                        por mim mesmo como requisito para
                        a aprovação na disciplina de tópicos
                        em desenvolvimento para dispositivos 
                        móveis. Nesta disciplina aprendemos
                        desenvolver aplicativos para android
                        usando o Framework React Native.
                    </Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      
    },

    title: {
        height: 100,
        
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        
      },

      text1: {
          fontSize:30,
          color:'#ffffff'
      },

      content: {
          justifyContent:'center',
          alignItems:'center'
      },

      text2: {
        color:'#ffffff',
        textAlign: 'center'
    },
  });