import { StyleSheet, Text, View } from 'react-native'
import H2 from './H2'
import MyText from './MyText'
import React from 'react'

const Fieldset = (props) => {
  return (
    <View  {...props} style={styles.fieldSet}>
        <H2 style={styles.legend}>{props.title}</H2>
        <MyText>{props.children}</MyText>
    </View>
  )
}

export default Fieldset

const styles = StyleSheet.create({
    fieldSet:{
        marginVertical: 10,
        paddingTop: 50,
        paddingBottom: 30,
        borderWidth: 1,
        alignItems: 'center',
        borderColor: '#000',
        zIndex: -1,
        minHeight: 100
    },
    legend:{
        position: 'absolute',
        top: -10,
        left: 10,
        backgroundColor: 'white',
        fontSize: 32,
    }
})