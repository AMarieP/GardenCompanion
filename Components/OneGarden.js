import { FlatList, StyleSheet, Text, View, Button } from 'react-native'
import H1 from './H1'
import H2 from './H2'
import MyText from './MyText'
import PlantCard from './PlantCard'

import React, { useState, useEffect } from 'react'

//Garden details will be drilled from the garden selector
const OneGarden = ({props}) => {
  
  console.log(props)
    //Will navigate to add a plant page
    const noPlants = ()=> {
      return(
          <View>
              <MyText>You have no plants in your garden yet!</MyText>
              <Button title='Add A Plant' />
          </View>
      )
  }

  return (
    <View>
      <H1>PlaceholderName</H1>
      <FlatList
        data={props}
        renderItem={({item}) => <PlantCard props={item}/>}
        keyExtractor={(item)=>item.plant_id}
        numColumns={2}
        ListEmptyComponent={noPlants}
       />
    </View>
  )
}

export default OneGarden

const styles = StyleSheet.create({})