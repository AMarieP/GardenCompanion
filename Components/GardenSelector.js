import { StyleSheet, Text, View, FlatList, Button, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import MyText from './MyText'
import colours from '../colours';


const GARDENS = [
    {
        garden_name:'GardenOne',
        garden_id: 1,
        garden_colour: colours.green,
        garden_colour_light: colours.greenLight
    },
    {
        garden_name: 'GardenTwo',
        garden_id: 2,
        garden_colour: colours.purple,
        garden_colour_light: colours.purpleLight

    },
    {
        garden_name: 'GardenThree',
        garden_id: 3,
        garden_colour: colours.mustard,
        garden_colour_light: colours.mustardLight

    },
    {
        garden_name: 'GardenFour',
        garden_id: 4,
        garden_colour: colours.red,
        garden_colour_light: colours.redLight

    },
    {
        garden_name: 'GardenFive',
        garden_id: 5,
        garden_colour: colours.navy,
        garden_colour_light: colours.navyLight

    },
    {
        garden_name: 'GardenSix',
        garden_id: 6,
        garden_colour: colours.red,
        garden_colour_light: colours.redLight

    }
];

const GardenSelector = ({props}) => {

    const [selectedGarden, setSelectedGarden] = useState([])
    
    //sets seletedGarden to first item if props is true
    useEffect(() => {
        if(!props.length == false){
            setSelectedGarden(props[0])
            console.log(selectedGarden)
        }
    },[])

    const GardenButton = ({props}) => {
        return(
            <Pressable style={[styles.gardenButton, 
                            {backgroundColor: props.garden_colour, 
                            borderColor: props.garden_id == selectedGarden.garden_id ? props.garden_colour_light : props.garden_colour }]} 
                        onPress={() => {setSelectedGarden(props); console.log(props.garden_name)}}>
                <MyText style={{color: 'oldlace'}}>
                {props.garden_name}
                </MyText>
            </Pressable>
        )
    }

    const NoGardens = () => {
        return(
            <MyText>No gardens to show</MyText>
        )
    }

  return (
    <View style={styles.container}>
      <FlatList
      data={props}
      renderItem={({item}) => <GardenButton props={item}/>}
      keyExtractor={(item) => item.garden_id}
      ListEmptyComponent={NoGardens}
      horizontal
      style={styles.flatList} />
    </View>
  )
}

export default GardenSelector

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 10,
    },
    flatList: {
    },
    gardenButton: {
        paddingVertical: 7,
        paddingHorizontal: 15,
        marginHorizontal: 3,
        height: 50,
        borderRadius: 50,
        borderWidth: 3,
        justifyContent: 'center',

    }
})