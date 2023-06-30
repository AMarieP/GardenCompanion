import { StyleSheet, Image, View, Button, Pressable, Text } from 'react-native'
import React, { useState } from 'react'
import colours from '../colours'
import Ionicons from 'react-native-vector-icons/Ionicons';


//Bug w launchCameraAsync on android 
import { launchImageLibraryAsync, launchCameraAsync } from 'expo-image-picker'

const Camera = () => {

    const [pickedImage, setImage] = useState('')
    
    const handleLibrary = async()=>{
        const image = await launchImageLibraryAsync()
        setImage(image.assets[0].uri)
    }
    const handleCamera = async()=>{
      const image = await launchCameraAsync()
      setImage(image.assets[0].uri)
  }

  return (
    <View>
      <View style={{width: '100%', height: '100%', backgroundColor: colours.greenLight}}>
        <Image source={{uri:pickedImage, height: '100%', width: '100%'}} />
      </View>
      <View style={styles.buttons}>
          <Pressable onPress={handleLibrary} style={styles.button}><Ionicons name="images" size={25} color={colours.greenLight}/></Pressable>
          <Pressable onPress={handleCamera} style={styles.button}><Ionicons name="camera" size={25} color={colours.greenLight}/></Pressable>
        </View>
    </View>
  )
}

export default Camera

const styles = StyleSheet.create({
  button:{
    backgroundColor: colours.green,
    height: 60,
    width: 60,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  buttons: {
    flexDirection: 'row-reverse',
    position: 'absolute',
    zIndex: 10,
    marginTop: '80%',
    marginLeft: '2%'

  }
})