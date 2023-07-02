import { StyleSheet, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import colours from '../colours'

const Picker = ({setSelectedColour}) => {

    const [pressed, setPressed] = useState('green')
  return (
    <View style={styles.container}>
      <Pressable onPress={() => [setSelectedColour(colours.green), setPressed('green')]} style={[styles.pressable, {backgroundColor: colours.green, borderColor: pressed == 'green' ? colours.greenLight : colours.green}]}/>
      <Pressable onPress={() => [setSelectedColour(colours.purple), setPressed('purple')]} style={[styles.pressable, {backgroundColor: colours.purple, borderColor: pressed == 'purple' ? colours.purpleLight : colours.purple}]}/>
      <Pressable onPress={() => [setSelectedColour(colours.mustard), setPressed('mustard')]} style={[styles.pressable, {backgroundColor: colours.mustard, borderColor: pressed == 'mustard' ? colours.mustardLight : colours.mustard}]}/>
      <Pressable onPress={() => [setSelectedColour(colours.navy), setPressed('navy')]} style={[styles.pressable, {backgroundColor: colours.navy, borderColor: pressed == 'navy' ? colours.navyLight : colours.navy}]}/>
      <Pressable onPress={() => [setSelectedColour(colours.red), setPressed('red')]} style={[styles.pressable, {backgroundColor: colours.red, borderColor: pressed == 'red' ? colours.redLight : colours.red}]}/>

    </View>
  )
}

export default Picker

const styles = StyleSheet.create({
    container:{
        paddingVertical: 10,
        paddingHorizontal: 5,
        flexDirection: 'row',

    },
    pressable:{
        height: 40,
        width: 40,
        borderRadius: 40,
        borderWidth: 3,
        margin: 3
    }
})