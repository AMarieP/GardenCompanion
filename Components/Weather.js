import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'

import * as Location from 'expo-location';


const Weather = () => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
      }, []);
    
      let text = 'Waiting..';
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        text = JSON.stringify(location);
      }

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
        <Text>{text}</Text>
    </View>
  )
}

export default Weather

const styles = StyleSheet.create({})