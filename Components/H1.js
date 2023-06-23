import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const H1 = (props) => {
  return (
    <Text {...props} style={[{fontFamily: 'Ovo_400Regular', fontSize: 32}, props.style]}>{props.children}</Text>
  )
}

export default H1

const styles = StyleSheet.create({})
