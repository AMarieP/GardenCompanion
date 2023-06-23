import { StyleSheet, Text, View, Image, Dimensions, Pressable } from 'react-native'
import React from 'react'

// change view to Pressable
const PlantCard = ({props}) => {
  return (
    <View style={[styles.container,  
        {width: Dimensions.get('window').width * 0.45,
        height: Dimensions.get('window').height * 0.29,}]}>
      <Text style={styles.title}>{props.plantName}</Text>
      <View style={styles.conatinerTwo}>
        <Image
        source={props.plantImage} style={styles.image}/>
        <View></View>
      </View>
    </View>
  )
}

export default PlantCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        color: '#00000',
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: 'flex-end',
        alignItems: 'center'
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
        
    }
})