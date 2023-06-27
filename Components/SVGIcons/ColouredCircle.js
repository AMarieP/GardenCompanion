import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

import colours from '../../colours'
import ColorPicker from 'react-native-wheel-color-picker'


const ColouredCircle = () => {
  return (
      <View style={{}}>
        <ColorPicker
          style={{}}
          row={false}
          swatchesOnly={true}
          palette={[colours.green, colours.navy, colours.mustard, colours.purple, colours.red, colours.greenLight, colours.mustardLight, colours.navyLight, colours.purpleLight, colours.redLight]}
        />
        </View>
  );
}

export default ColouredCircle

const styles = StyleSheet.create({})
