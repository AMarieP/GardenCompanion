import { StyleSheet, Image, View, Button } from 'react-native'
import React, { useState } from 'react'

//Bug w launchCameraAsync on android 
import { launchImageLibraryAsync } from 'expo-image-picker'

const CameraDemo = () => {

    const [pickedImage, setImage] = useState()
    
    const handleCamera = async()=>{
        const image = await launchImageLibraryAsync()
        setImage(image.uri)
    }

  return (
    <View>
      <View style={{width: '100%', height: 300, backgroundColor: 'blue', marginTop: 20}}>
        <Image source={{uri:pickedImage, height: 300, width: '100%'}} />
      </View>
      <Button title='Add Your Picture' onPress={handleCamera}/>
    </View>
  )
}

export default CameraDemo

const styles = StyleSheet.create({})