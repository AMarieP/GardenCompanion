import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyText = (props) => {
  return (
    <Text {...props} style={[{fontFamily: 'Ovo_400Regular'}, props.style]}>{props.children}</Text>
  )
}

export default MyText

const styles = StyleSheet.create({})
