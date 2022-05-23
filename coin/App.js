import React, { useEffect, useState } from 'react'
import { StyleSheet, StatusBar, Text, View, SafeAreaView } from 'react-native';
import { Platform } from 'react-native-web';
import CurrentPrice from './src/components/CurrentPrice';
import HystoryGraphic from './src/components/HystoryGraphic';
import QuotationsList from './src/components/QuotationsList';

function addZero(number){
  if(number <= 9){
    return '0'+number
  }
  return number;
}

function url(qtdDays){
  const date = new Date();
  const listLastDays = qtdDays;
  const end_date = 
  `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
  date.setDate(date.getDate() - listLastDays);
  const start_date = 
  `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
  //URL  GET API
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`;;
}

async function getListCoins(url){
  let response = await fetch(url);
  let retunrApi = await response.json();
  let selectListQuotations = retunrApi.bpi;
  const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
    return {
      data: key.split("-").reverse().join("/"),
      valor: selectListQuotations[key],
    };
  });
  let data = queryCoinsList.reverse();
  return data;
}

async function getPriceCoinsGraphic(url){
  let responseG = await fetch(url);
  let returnApiG = await responseG.json();
  let selectListQuotationsG = returnApiG.bpi;
  const queryCoinsListG = Object.keys(selectListQuotationsG).map((key) => {
    return selectListQuotationsG[key];
  });
  let dataG = queryCoinsListG;
  return dataG;
}

export default function App() {

  const [coinsList, setCoinsList] = useState([])
  const [coisGraphicList, setCoinsGraphicList] = useState([0])
  const [days, setDays] = useState(30)
  const [updateData, setUpdateData] = useState(true)
  const [price, setPrice] = useState()

  function updateDay(number){
    setDays(number);
    setUpdateData(true)
  }

  function priceCotation(){
    setPrice(coisGraphicList.pop())
  }

  useEffect(() =>{
    getListCoins(url(days)).then((data) => {
      setCoinsList(data)
    });

    getPriceCoinsGraphic(url(days)).then((dataG) => {
      setCoinsGraphicList(dataG)
    });

    priceCotation()

    if(updateData){
      setUpdateData(false)
    }

  }, [updateData]);
//<HystoryGraphic infoDataGraphic={coisGraphicList}/>
//<CurrentPrice lastCotation={price}/>
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
      backgroundColor="#f50d41"
      barStyle="dark-content"
      />
      <QuotationsList filterDay={updateDay} listTransactions={coinsList}/>

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
