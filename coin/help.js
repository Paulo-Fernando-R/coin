import React, { useEffect, useState } from 'react'
import { StyleSheet, StatusBar, Text, View, SafeAreaView } from 'react-native';

export default function Help (){
    return(
        <View style={styles.container}>
             <View style={styles.title}>
                    <Text style={styles.text1}>Escolher entre períodos</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.text2}>
                       Para exibir cotações em diferentes períodos 
                       é necessário apenas clicar em um dos botões 
                       localizados na parte superior da lista de 
                       valores, então será carregada uma nova lista
                       com as inforações referentes ao período
                       escolhido
                    </Text>
                </View>
        </View>
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
          fontSize:20,
          color:'#ffffff',
          textAlign: 'center'
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