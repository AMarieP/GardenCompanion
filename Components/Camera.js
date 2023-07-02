import { StyleSheet, Image, View, Button, Pressable, Text } from 'react-native'
import React, { useEffect } from 'react'
import colours from '../colours'
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as MediaLibrary from 'expo-media-library';


//Bug w launchCameraAsync on android 
import { launchImageLibraryAsync, launchCameraAsync } from 'expo-image-picker'

const Camera = ({image, setSelectedImage}) => {

    
    const handleLibrary = async()=>{
        const pickedImage = await launchImageLibraryAsync()
        setSelectedImage(pickedImage.assets[0].uri)
    }
    const handleCamera = async()=>{
      const pickedImage = await launchCameraAsync()
      setSelectedImage(pickedImage.assets[0].uri)
  }

  //Saves image to a folder on phone
  // const SaveToPhone = async (item) => {
  //   const permission = await MediaLibrary.requestPermissionsAsync();
  //   if (permission.granted) {
  //     try {
  //       const asset = await MediaLibrary.createAssetAsync(item);
  //       MediaLibrary.createAlbumAsync('GardenCompanionImages', asset, true)
  //         .then(() => {
  //           console.log('Image Saved Sucessfully!');
  //           setSelectedImage(asset.uri)
  //         })
  //         .catch(() => {
  //           console.log('Error In Saving Image!');
  //         });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     console.log('Need Storage permission to save file');
  //   }
  // };

  // const GetUriSavedImage = async() => {

  // }

  return (
    <View>
      <View style={{width: '100%', height: '100%', backgroundColor: colours.purpleLight}}>
        <Image source={{uri:image, height: '100%', width: '100%'}} />
      </View>
      <View style={styles.buttons}>
          <Pressable onPress={handleLibrary} style={styles.button}><Ionicons name="images" size={25} color={colours.greenLight}/></Pressable>
          <Pressable onPress={handleCamera} style={styles.button}><Ionicons name="camera" size={25} color={colours.greenLight}/></Pressable>
          {/* <Button
            style={styles.button}
            title="Submit"
            onPress={() => SaveToPhone(image)}/> */}
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