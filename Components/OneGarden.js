import { FlatList, StyleSheet, Text, View, Button } from 'react-native'
import H1 from './H1'
import H2 from './H2'
import MyText from './MyText'
import PlantCard from './PlantCard'
import { useContext } from 'react';
import { GardenContext } from '../Context/SelectedGardenContext'
import { SelGardenContext } from '../Context/GardenIDContext'
import React, { useState, useEffect } from 'react'

//Garden details will be drilled from the garden selector
const OneGarden = ({navigation}) => {
  garden = useContext(GardenContext)
  selGarden = useContext(SelGardenContext)

    //Will navigate to add a plant page
    const noPlants = ()=> {
      return(
          <View style={[styles.main]}>
              <MyText>You have no plants in your garden yet!</MyText>
              <Button title='Add A Plant' onPress={() => navigation.NewPlant()} />
          </View>
      )
  }

  return (
    <View style={[styles.main, {backgroundColor: selGarden.garden_colour}]}>
      <FlatList
        data={garden}
        renderItem={({item}) => <PlantCard plant={item}/>}
        keyExtractor={(item)=>item.plant_id}
        numColumns={2}
        ListEmptyComponent={noPlants}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={()=><H1 style={styles.header}>{selGarden.garden_name}</H1>}
               />
    </View>
  )
}

export default OneGarden

const styles = StyleSheet.create({
  main:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 3,
    minHeight: '100%'
  },
  header:{
    borderBottomWidth: 1,
    borderColor: 'oldlace',
    width: '100%',
    textAlign: 'center',
    marginVertical: 10,
    color: 'oldlace',
    marginHorizontal: 0,
  }
})