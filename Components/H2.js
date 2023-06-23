import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const H2 = (props) => {
  return (
    <Text {...props} style={[{fontFamily: 'Ovo_400Regular', fontSize: 24}, props.style]}>{props.children}</Text>
  )
}

export default H2

const styles = StyleSheet.create({})
