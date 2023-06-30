import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'

import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env';


const Weather = () => {

    //Getting My location
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getLastKnownPositionAsync({});
        setLatitude(location.coords.latitude)
        setLongitude(location.coords.longitude);
        setLocation(location.coords);
        })();
      }, []);
    
      let text = 'Waiting..';
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        text = JSON.stringify(location);
      }
    
    //API REQUEST WEATHER
    
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=ab6954f409994773b92111136233006&q=${latitude},${longitude}&aqi=no`)
          const data = await response.json()
          console.log({ data })
        }
    
        fetchData()
      }, [])

    const noWeather = () =>{
        return(
            <View>
                <Text>We couldn't get the forecast today, Gardener!</Text>
            </View>
        )
    }

    const Weather = () => {
        return(
            <View>
                <Text>the temperature is</Text>
                <Text>25C</Text>
                <Text>the forecast for today is</Text>
                <Text>Sunny</Text>
                <Text>The chance of rain today is: </Text>
                <Text>The chance of snow today is: </Text>
                <Text>The chance of growing great plants is: Almost Certain</Text>
            </View>
        )
    }
  return (
    <View>
        <Text>{[latitude]}</Text>
        <Text>{[longitude]}</Text>
    </View>
  )
}

export default Weather

const styles = StyleSheet.create({})