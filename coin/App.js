import React from 'react'
import { StyleSheet, StatusBar, Text, View, SafeAreaView } from 'react-native';
import { Platform } from 'react-native-web';
import CurrentPrice from './src/components/CurrentPrice';
import HystoryGraphic from './src/components/HystoryGraphic';
import QuotationsList from './src/components/QuotationsList';
import QuotationsItems from './src/components/QuotationsList/QuotationsItems';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
      backgroundColor="#f50d41"
      barStyle="dark-content"
      />

      <CurrentPrice/>

      <HystoryGraphic/>

      <QuotationsList/>

      <QuotationsItems/>

    </SafeAreaView>
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
