import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

export default function QuotationsItems(){
    return (
        <View style={styles.mainContent}>

            <View style={styles.contextLeft}>

                <View style={styles.boxLogo}>

                    <Image 
                        style={styles.logoBitcoin}
                        source={require("../../../img/bitcoin.png")}
                    />
                    <Text style={styles.dayCotation}>12/12/2021</Text>

                </View>

            </View>

                <View style={styles.contextRight}>
                    <Text style={styles.price}>656565556</Text>
                </View>
        </View>
        
    )
}