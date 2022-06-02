import React, { useEffect, useState } from 'react'
import { Image, TouchableOpacity } from 'react-native';
import { StyleSheet, StatusBar, Text, View, SafeAreaView } from 'react-native';

export default function({navigation}){
    return(
        <View style={styles.container}>
            <View>
                <Image 
                    style={styles.logoBitcoin}
                    source={require("./src/img/bitcoin.png")}
                />
            </View>
            <View style={styles.boxText}>
                <Text style={styles.text}>Bem vindo ao SambiCoin</Text>

                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => navigation.navigate('Tabs')}
                >
                    <Text style={styles.textButtonQuery}>Ir para Cotações</Text>
                </TouchableOpacity>
            </View>

            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingTop:50,
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center'
    },

    logoBitcoin: {
        width:200,
        height:200
    },

    boxText: {
        flex:2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',

    },

    text:{
        color:'#ffffff',
        fontWeight:'400',
        fontSize: 50,
        textAlign: 'center'
    },

    buttonQuery:{
        width:200,
        height:50,
        backgroundColor:'#f50d41',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'
    },
    textButtonQuery:{
        color:'#ffffff',
        fontWeight:'bold',
        fontSize:14
    }
  });