import { StyleSheet, Image, View, Button } from 'react-native'
import React, { useState } from 'react'
import colours from '../colours'

//Bug w launchCameraAsync on android 
import { launchImageLibraryAsync } from 'expo-image-picker'

const Camera = () => {

    const [pickedImage, setImage] = useState('')
    
    const handleCamera = async()=>{
        const image = await launchImageLibraryAsync()
        setImage(image.uri)
    }

  return (
    <View>
      <View style={{width: '100%', height: 300, backgroundColor: colours.greenLight, marginTop: 20}}>
        <Image source={{uri:pickedImage, height: 300, width: '100%'}} />
      </View>
      <Button title='Add Photo From Device' onPress={handleCamera} color={colours.green} />
    </View>
  )
}

export default Camera

const styles = StyleSheet.create({})