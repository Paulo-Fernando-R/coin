import React, { useEffect, useState } from 'react'
import { StyleSheet, StatusBar, Text, View, SafeAreaView } from 'react-native';

export default function History (){
    return(
        <View style={styles.container}>
             <View style={styles.title}>
                <Text style={styles.text1}>História do Bitcoin</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.text2}>
                    O Bitcoin surgiu em 31 de outubro de 2008.
                     Naquele dia, o criador (ou criadores) da
                    criptomoeda, que se esconde sob o 
                    pseudônimo de Satoshi Nakamoto, enviou
                    um e-mail para uma lista de pessoas
                    interessadas em criptografia.
                    No corpo da mensagem, ele escreveu
                    que vinha trabalhando “em um novo
                    sistema de dinheiro eletrônico
                    totalmente peer-to-peer, sem terceiros 
                    confiáveis”.
                </Text>

                <Text style={styles.text1}>Como funciona</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.text2}>
                    É uma rede peer-to-peer para evitar o 
                    gasto duplo (possibilidade de enviar as 
                    mesmas moedas mais de uma vez); sem 
                    intermediários, como bancos; permite 
                    o anonimato dos participantes; e usa 
                    Prova de Trabalho (um tipo de algoritmo) 
                    para gerar Bitcoin (processo que ganhou 
                    o nome de mineração) e prevenir o tal 
                    gasto duplo.
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
        textAlign: 'center',
        marginBottom: 20
    },
  });