import { StyleSheet, Text, View, Image, Dimensions, Pressable } from 'react-native'
import React, { useState, useContext } from 'react'
import { PlantContext } from '../Context/PlantCard'

// change view to Pressable
//for effect map them
const PlantCard = ({plant}) => {
  
  const [plantContext, setPlantContext] = useContext(PlantContext)
  return (
    <Pressable onPress={() => {setPlantContext(plant)}} style={[styles.container,  
        {width: Dimensions.get('window').width * 0.45,
        height: Dimensions.get('window').height * 0.29,}]}>
      <Text adjustsFontSizeToFit
            numberOfLines={2}
            maxFontSizeMultiplier={1}
            style={styles.title}>{plant.plant_name}</Text>
      <View style={styles.conatinerTwo}>
        <Image
        source={{uri: plant.plant_image}} style={styles.image}/>
        <View style={styles.effects}></View>
      </View>
    </Pressable>
  )
}

export default PlantCard

const styles = StyleSheet.create({
    container: {
        color: '#00000',
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 3,
        backgroundColor: 'white'
    },

    conatinerTwo: {
        width: 150,
        height: 170,
        marginBottom: 13,
        borderWidth: 1,
        borderRadius: 15,
        overflow: 'hidden'

    },

    image: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },

    title: {
      fontFamily: 'Ovo_400Regular',
      textAlign: 'left',
      width: '80%',
      marginBottom: 2,
      fontSize: 24
    }
})