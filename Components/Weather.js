import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import H1 from './H1'
import MyText from './MyText'

import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env';


const Weather = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [temperature, setTemperature] = useState([]);
    const [forecast, setForecast] = useState([]);


    //Getting My location
    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
        setLatitude(location.coords.latitude)
        setLongitude(location.coords.longitude);
        setLocation(location.coords);
        })();
      }, []);
    
    
    //API REQUEST WEATHER
    
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=ab6954f409994773b92111136233006&q=${latitude},${longitude}&aqi=no`)
          const data = await response.json()
          setTemperature(data.current.temp_c)
          setForecast(data.current.condition.text)
      }
        fetchData()
      }, [])

    const noWeather = () =>{
        return(
          <View style={styles.main}>
          <H1>Welcome, Gardener</H1>
          <View>
            <MyText>the temperature is</MyText>
            <Text style={styles.temp}>{temperature}°C</Text>
            <View style={styles.forecastContainer}>
              <MyText>the forecast for today is:</MyText>
              <H1>{forecast}</H1>
            </View>
          </View>
        </View>
        )
    }

    const MyWeather = () => {
        return(
          <View style={styles.main}>
            <H1>Welcome, Gardener</H1>
            <View>
              <MyText>the temperature is</MyText>
              <Text style={styles.temp}>{temperature}°C</Text>
              <View style={styles.forecastContainer}>
                <MyText>the forecast for today is:</MyText>
                <H1>{forecast}</H1>
              </View>
            </View>
        </View>
        )
    }
  return (
    <View style={styles.main}>
      <H1>Welcome, Gardener</H1>
      <View>
        <MyText>the temperature is</MyText>
        <Text style={styles.temp}>{temperature}°C</Text>
        <View style={styles.forecastContainer}>
          <MyText>the forecast for today is:</MyText>
          <H1>{forecast}</H1>
        </View>
      </View>
    </View>
  )
}

export default Weather

const styles = StyleSheet.create({
  main:{
    width: '100%',
    alignItems: 'center',
    marginVertical: 30
  },
  temp:{
    fontSize: 120,
    fontFamily: 'Ovo_400Regular',
  },
  forecastContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
})